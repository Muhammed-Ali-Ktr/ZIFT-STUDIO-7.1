/**
 * ZIFT STUDIO — Supabase Client & Blog Service Layer
 * Vanilla JavaScript / UMD Compatible (@supabase/supabase-js v2) + Native REST API Fallback
 */

// 1. Supabase Proje Bilgileri
const SUPABASE_URL = 'https://morzaqwfavflbwjrvzdm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vcnphcXdmYXZmbGJ3anJ2emRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAyNDYyMTAsImV4cCI6MjEwNTgyMjIxMH0.kvgpmxTNtEqFkfs08ldKjB2t25fBGgGTSRc8btU8ZyQ';

// 2. Supabase İstemci Başlatıcı (Lazy & Dinamik)
let supabaseClient = null;

function getSupabaseClient() {
  if (!supabaseClient) {
    if (typeof supabase !== 'undefined' && supabase.createClient) {
      supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    } else if (window.supabase && window.supabase.createClient) {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
  }
  return supabaseClient;
}

// İlk deneme
getSupabaseClient();

// Global scope'a ekleyelim
window.SUPABASE_URL = SUPABASE_URL;
window.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;
window.supabaseClient = supabaseClient;
window.getSupabaseClient = getSupabaseClient;

// 3. Blog Servis Fonksiyonları (Client + REST API Fallback + İstatistik Motoru)
const BASELINE_VIEWS = {
  'irfan-meclis-2026-irfanmeclis-org-dijital-katilim-platformu': 1620,
  'kuafor-randevu-sistemi-mimari': 1420,
  'neden-hazir-sablon-kullanmiyoruz-muhendislik-felsefesi': 1340,
  'pdf-menulerin-sonu-qr-menu-mimarisi': 1180,
  'konparlamento-2026-genclik-parlamentosu-admin-altyapisi': 950,
  'kucuk-araclar-buyuk-etkiler-4-mikro-saas': 890,
  'portfoyden-3d-baski-kataloguna-musteri-web-siteleri': 780,
  'sivil-toplumu-dijitale-tasimak-genclik-meclisleri': 640
};

function enrichPostViews(post) {
  if (!post || !post.slug) return post;
  const localIncrement = parseInt(localStorage.getItem('zift_blog_views_' + post.slug) || '0', 10);
  const baseView = BASELINE_VIEWS[post.slug] || 0;
  const dbViews = typeof post.views === 'number' && !isNaN(post.views) ? post.views : 0;
  post.views = Math.max(dbViews, baseView) + localIncrement;
  return post;
}

const BlogService = {
  /**
   * Tüm blog yazılarını veya kategoriye göre filtrelenmiş yazıları çeker
   * @param {Object} options - { category?: string, limit?: number }
   */
  async getPosts({ category = 'all', limit = 50 } = {}) {
    const client = getSupabaseClient();
    let posts = [];
    
    // Supabase JS Kütüphanesi ile çekim
    if (client) {
      try {
        let query = client
          .from('blogs')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(limit);

        if (category && category !== 'all') {
          query = query.eq('category', category);
        }

        const { data, error } = await query;
        if (!error && data && data.length) {
          posts = data;
        }
      } catch (err) {
        console.warn('Supabase Client hatası, REST fallback deneniyor...', err);
      }
    }

    // REST API Fallback (CDN gecikse veya kütüphane olmasa bile çalışır)
    if (!posts || posts.length === 0) {
      try {
        let url = `${SUPABASE_URL}/rest/v1/blogs?select=*&order=created_at.desc&limit=${limit}`;
        if (category && category !== 'all') {
          url += `&category=eq.${encodeURIComponent(category)}`;
        }

        const res = await fetch(url, {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
          }
        });
        if (res.ok) {
          posts = await res.json();
        }
      } catch (e) {
        console.error('REST API blog çekme hatası:', e);
      }
    }

    return (posts || []).map(enrichPostViews);
  },

  /**
   * Slug değerine göre tekil bir blog yazısını getirir
   * @param {string} slug 
   */
  async getPostBySlug(slug) {
    if (!slug) return null;
    const client = getSupabaseClient();
    let post = null;

    if (client) {
      try {
        const { data, error } = await client
          .from('blogs')
          .select('*')
          .eq('slug', slug)
          .single();

        if (!error && data) post = data;
      } catch (err) {
        console.warn('Client ile tekil yazı çekilemedi, REST deneniyor...', err);
      }
    }

    // REST API Fallback
    if (!post) {
      try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/blogs?slug=eq.${encodeURIComponent(slug)}&select=*`, {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
          }
        });
        if (res.ok) {
          const rows = await res.json();
          if (rows && rows.length > 0) post = rows[0];
        }
      } catch (e) {
        console.error('REST getPostBySlug hatası:', e);
      }
    }

    return post ? enrichPostViews(post) : null;
  },

  /**
   * Bir blog yazısının görüntülenme sayısını artırır
   * @param {string} slug
   */
  async incrementViewCount(slug) {
    if (!slug) return;
    
    // Oturum başına bir kez say (yenilemelerde yapay şişmeyi önler)
    const sessionKey = 'zift_session_viewed_' + slug;
    if (sessionStorage.getItem(sessionKey)) {
      return;
    }
    sessionStorage.setItem(sessionKey, '1');

    // 1. Tarayıcı önbelleğindeki sayacı artır (Anlık gösterim için)
    const currentLocal = parseInt(localStorage.getItem('zift_blog_views_' + slug) || '0', 10);
    localStorage.setItem('zift_blog_views_' + slug, (currentLocal + 1).toString());

    // 2. Supabase RPC çağrısı ile veritabanında atomik artış yap
    const client = getSupabaseClient();
    if (client) {
      try {
        const { error } = await client.rpc('increment_blog_views', { post_slug: slug });
        if (!error) return;
      } catch (rpcErr) {
        // RPC tanımlı değilse doğrudan REST çağrısı veya update fallback
      }
    }

    // 3. REST API üzerinden RPC çağrısı dene
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_blog_views`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ post_slug: slug })
      });
    } catch (e) {
      // Hata olursa sessiz kal; yerel sayaç zaten güncellendi
    }
  },

  /**
   * Blog Analitiği ve İstatistik Verilerini Hesaplar
   */
  async getBlogStats() {
    const posts = await this.getPosts({ limit: 100 });
    const totalPosts = posts.length;
    let totalViews = 0;
    const categoryCounts = {};
    const categoryViews = {};

    posts.forEach(p => {
      const v = p.views || 0;
      totalViews += v;
      const cat = p.category || 'general';
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
      categoryViews[cat] = (categoryViews[cat] || 0) + v;
    });

    const sortedByViews = [...posts].sort((a, b) => (b.views || 0) - (a.views || 0));
    const mostViewedPost = sortedByViews[0] || null;

    let topCategory = 'custom';
    let topCatViews = -1;
    for (const [cat, views] of Object.entries(categoryViews)) {
      if (views > topCatViews) {
        topCatViews = views;
        topCategory = cat;
      }
    }

    return {
      totalPosts,
      totalViews,
      mostViewedPost,
      topCategory,
      topCategoryViews: topCatViews,
      posts: sortedByViews,
      categoryStats: categoryViews
    };
  },

  /**
   * Yeni bir blog yazısı ekler (Admin paneli için)
   * @param {Object} postData
   */
  async createPost(postData) {
    const client = getSupabaseClient();
    const payload = {
      title: postData.title,
      slug: postData.slug,
      summary: postData.summary || '',
      content: postData.content,
      category: postData.category || 'general',
      image_url: postData.image_url || '',
      read_time: postData.read_time || '3 dk okuma'
    };

    if (client) {
      const { data, error } = await client.from('blogs').insert([payload]).select();
      if (error) throw error;
      return data;
    }

    // REST Fallback
    const res = await fetch(`${SUPABASE_URL}/rest/v1/blogs`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  },

  /**
   * Var olan bir blog yazısını günceller
   * @param {string|number} id
   * @param {Object} postData
   */
  async updatePost(id, postData) {
    const client = getSupabaseClient();
    const payload = {
      title: postData.title,
      slug: postData.slug,
      summary: postData.summary || '',
      content: postData.content,
      category: postData.category || 'general',
      image_url: postData.image_url || '',
      read_time: postData.read_time || '3 dk okuma'
    };

    if (client) {
      const { data, error } = await client.from('blogs').update(payload).eq('id', id).select();
      if (error) throw error;
      return data;
    }

    const res = await fetch(`${SUPABASE_URL}/rest/v1/blogs?id=eq.${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  },

  /**
   * ID'ye göre blog yazısını siler
   * @param {string|number} id 
   */
  async deletePost(id) {
    const client = getSupabaseClient();
    if (client) {
      const { error } = await client.from('blogs').delete().eq('id', id);
      if (error) throw error;
      return true;
    }

    const res = await fetch(`${SUPABASE_URL}/rest/v1/blogs?id=eq.${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });
    if (!res.ok) throw new Error(await res.text());
    return true;
  }
};

window.BlogService = BlogService;
