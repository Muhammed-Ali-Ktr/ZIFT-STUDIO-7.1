/* 
 * ZIFT STUDIO — NEO-BRUTALIST PREMIUM INTERACTION ENGINE
 * Manages custom cursor, loaders, modals, theme toggles, progress bar checkpoints, and blog expansions.
 */

// Comprehensive Zift Studio Projects Data
const projects = [

  /*
  {
    num: '001',
    title: 'NexaAnalytics — SaaS Dashboard',
    desc: 'Gerçek zamanlı veri görselleştirme ve analitik platformu. 2.4 milyon günlük istek işleyen, çoklu kullanıcı destekli kapsamlı SaaS çözümü. WebSocket tabanlı canlı veri akışı, özelleştirilebilir dashboard widgetları ve gelişmiş raporlama özellikleri içermektedir.',
    techs: ['React.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'AWS EC2', 'WebSocket', 'D3.js'],
    visual: 'proj-v1',
    link: '#',
    results: ['↑ %340 Daha Hızlı Veri İşleme', '↓ %60 Altyapı Maliyeti', '2.4M+ Günlük Request']
  },
  {
    num: '002',
    title: 'MarketFlow — E-Ticaret Platformu',
    desc: 'Günde 12.000+ işlem gerçekleştiren yüksek trafikli e-ticaret altyapısı. Stripe ödeme entegrasyonu, stok yönetim sistemi ve gelişmiş SEO altyapısıyla donatılmış tam kapsamlı ticaret çözümü.',
    techs: ['Next.js 14', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Redis', 'Vercel', 'Algolia'],
    visual: 'proj-v2',
    link: '#',
    results: ['↑ %180 Dönüşüm Oranı', '%99.9 Uptime', '12K+ Günlük İşlem']
  },
  {
    num: '003',
    title: 'MindFlow — AI Asistan Uygulaması',
    desc: 'GPT-4 destekli, özelleştirilebilir yapay zeka asistanı. 50.000+ aktif kullanıcıya hizmet veren, bağlam-duyarlı konuşma yönetimi ve çoklu model desteğiyle güçlendirilmiş SaaS platformu.',
    techs: ['Python', 'FastAPI', 'OpenAI API', 'LangChain', 'React', 'PostgreSQL', 'Docker', 'Pinecone'],
    visual: 'proj-v3',
    link: '#',
    results: ['50K+ Aktif Kullanıcı', '%94 Kullanıcı Memnuniyeti', '↓ %70 Yanıt Süresi']
  },
  {
    num: '004',
    title: 'DevOps Pipeline Otomasyon Sistemi',
    desc: 'Kubernetes üzerinde çalışan tam otomatik CI/CD altyapısı. GitHub Actions entegrasyonu, otomatik test ve deployment, mavi-yeşil dağıtım stratejisi ile sıfır kesintili güncelleme sistemi.',
    techs: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'Prometheus', 'Grafana', 'AWS EKS', 'Helm'],
    visual: 'proj-v4',
    link: '#',
    results: ['↓ %60 Deployment Süresi', '%99.99 Uptime SLA', 'Tam Otomatik CI/CD']
  },
  */



  {
    num: '001',
    title: 'KonParlamento.org — Katılım Platformu',
    desc: 'Yurttaş katılımını dijital ortama taşıyan, fikir paylaşımı ve yönetim etkileşimini sade bir deneyimle buluşturan web sitesi.',
    techs: ['React', 'CMS', 'Community', 'SEO'],
    visual: 'proj-v5',
    img: 'assets/image/musteri-thumb.jpg',
    link: 'https://muhammed-ali-ktr.github.io/Konparlamento-son/',
    results: ['Dijital Katılım Sağlandı', 'Hızlı İçerik Yönetimi', 'Canlı Topluluk Feedback']
  },
  {
    num: '002',
    title: 'KaratayGençMeclis.org — Gençlik Ağı',
    desc: 'Gençlerin fikirlerini paylaşabildiği, etkinliklerini duyurabildiği ve yerel politika sürecine katılabildiği gençlik meclisi sitesi.',
    techs: ['Community', 'React', 'Events', 'Mobile'],
    visual: 'proj-v6',
    img: 'assets/image/musteri-thumb.jpg',
    link: 'https://karataygencmeclis.org',
    results: ['Gerçek Zamanlı Etkinlik', 'Kolay İçerik Güncelleme', 'Genç Katılımına Açık']
  },
  {
    num: '003',
    title: 'EmirHanTazegul.site — Kişisel Marka',
    desc: 'Kişisel portföy ve marka kimliğini dijitalde etkili şekilde sunan tasarım odaklı web sitesi.',
    techs: ['Portfolio', 'Branding', 'SEO', 'Responsive'],
    visual: 'proj-v7',
    img: 'assets/image/hero-avatar.jpg',
    link: 'https://muhammed-ali-ktr.github.io/emirhantazegul/',
    results: ['Net Marka İmajı', 'Mobil Uyumlu Tasarım', 'Yüksek SEO Performansı']
  },
  {
    num: '004',
    title: 'CafeAroma — Café Deneyimi',
    desc: 'Kafe atmosferini dijitalleştiren, menü ve rezervasyon akışını şık bir arayüzde sunan marka web sitesi.',
    techs: ['Cafe', 'Menu', 'Reservation', 'UI'],
    visual: 'proj-v8',
    img: 'assets/image/cafearoma-thumb.jpg',
    link: 'https://qr-menu-nsoi.vercel.app/',
    results: ['Dijital Menü Deneyimi', 'Marka Hikayesi Anlatımı', 'Masa Rezervasyonu']
  },
  {
    num: '005',
    title: 'QRMenu — QR Menü Sistemi',
    desc: 'Restoranlarda QR kodlu menü ve sipariş akışını basit, hızlı ve modern bir kullanıcı deneyimiyle sağlayan sistem.',
    techs: ['QR Code', 'Mobile', 'UI/UX', 'Restoran'],
    visual: 'proj-v9',
    img: 'assets/image/qr-menu-thumb.jpg',
    link: 'https://qr-menu-seri2.vercel.app/',
    results: ['Temassız Menü', 'Hızlı Sipariş Akışı', 'Mobil Kullanıcı Deneyimi']
  },
  {
    num: '006',
    title: 'Sınav Sayacı — Geri Sayım Uygulaması',
    desc: 'Öğrencilerin YKS, LGS ve önemli sınav tarihlerini anlık takip etmesini sağlayan, özelleştirilebilir geri sayım aracı.',
    techs: ['JavaScript', 'HTML5/CSS3', 'Sayaç', 'LocalStorage'],
    visual: 'proj-v1',
    img: 'assets/image/sinavsayac-thumb.jpg',
    link: 'https://muhammed-ali-ktr.github.io/SINAV-SAYAC/',
    results: ['Anlık Geri Sayım', 'Özelleştirilebilir Tarihler', 'Mobil Uyumlu Arayüz']
  },
  {
    num: '007',
    title: 'QR Kod Oluşturucu — Dinamik QR Jeneratörü',
    desc: 'Metin, URL ve iletişim bilgileri için anında yüksek çözünürlüklü ve özelleştirilebilir QR kodlar oluşturan araç.',
    techs: ['JavaScript', 'QR Engine', 'Canvas', 'UI Design'],
    visual: 'proj-v2',
    img: 'assets/image/qrcodegen-thumb.jpg',
    link: 'https://muhammed-ali-ktr.github.io/QR-Code/',
    results: ['Anında QR Üretimi', 'Özelleştirilebilir Tasarım', 'Hızlı İndirme Desteği']
  },
  {
    num: '008',
    title: 'Flip Clock — Özelleştirilebilir Dijital Saat',
    desc: 'Estetik flip-card animasyonlarıyla zamanı takip etmeyi sağlayan, modern masaüstü ve mobil uyumlu dijital saat.',
    techs: ['CSS3 Animation', 'JavaScript', 'UI/UX', 'Retro Clock'],
    visual: 'proj-v3',
    img: 'assets/image/flipclock-thumb.jpg',
    link: 'https://muhammed-ali-ktr.github.io/Flip-Clock/',
    results: ['Akıcı Flip Animasyonu', 'Gece/Gündüz Modu', 'Estetik Masaüstü Görünümü']
  },
  {
    num: '009',
    title: 'Hukuk Bürosu — Kurumsal Danışmanlık',
    desc: 'Bireysel ve kurumsal müvekkillere hukuki danışmanlık hizmeti, çalışma alanları, makale arşivi ve hızlı randevu altyapısı sunan web platformu.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'EmailJS', 'SEO'],
    visual: 'proj-v4',
    img: 'assets/image/musteri-thumb.jpg',
    link: 'https://bayyabz99.github.io/avukat-buro-01/',
    results: ['Kurumsal Güven', 'Hızlı İletişim Akışı', 'Zengin Makale İçeriği']
  },
  {
    num: '010',
    title: '3D STL & Printing Solutions — Tasarım Portalı',
    desc: '3D STL modelleri, filament, reçine ürünleri ve e-ticaret sepet yönetimi sunan kapsayıcı 3D baskı çözümleri platformu.',
    techs: ['HTML5', 'CSS3', 'JavaScript', 'E-Ticaret UI', 'STL Katalog'],
    visual: 'proj-v5',
    img: 'assets/image/saas-thumb.jpg',
    link: 'https://bayyabz99.github.io/3D-TASARIM/',
    results: ['Zengin Ürün Kataloğu', 'Dinamik Sepet Yönetimi', 'Çoklu Tema Desteği']
  },
  {
    num: '011',
    title: 'Kuruyemişçim & Organik Ürünler — E-Ticaret',
    desc: 'Taze kavrulmuş kuruyemişler, doğal besinler, WhatsApp hızlı sipariş ve kargo takibi sunan modern e-ticaret uygulaması.',
    techs: ['Web App', 'Render', 'WhatsApp API', 'E-Ticaret', 'Responsive'],
    visual: 'proj-v6',
    img: 'assets/image/musteri-thumb.jpg',
    link: 'https://kuruyemiscim.onrender.com/',
    results: ['Doğrudan Kapıda Teslimat', 'WhatsApp Tek Tıkla Sipariş', '%100 Taze Ürün Garantisi']
  }
  
];

// Custom Immersive Cursor
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');
let mouseX = -100, mouseY = -100;
let ringX = -100, ringY = -100;
let isTouch = false;

function updateCursorPosition(x, y) {
  mouseX = x;
  mouseY = y;
  if (cursor) {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  }
}

document.addEventListener('mousemove', e => {
  if (isTouch) return;
  if (cursor) cursor.classList.add('active');
  if (cursorRing) cursorRing.classList.add('active');
  updateCursorPosition(e.clientX, e.clientY);
});

document.addEventListener('mouseleave', () => {
  if (cursor) cursor.classList.remove('active');
  if (cursorRing) cursorRing.classList.remove('active');
});

document.addEventListener('touchstart', () => {
  isTouch = true;
  if (cursor) cursor.classList.remove('active');
  if (cursorRing) cursorRing.classList.remove('active');
}, { passive: true });

document.addEventListener('touchmove', () => {
  isTouch = true;
  if (cursor) cursor.classList.remove('active');
  if (cursorRing) cursorRing.classList.remove('active');
}, { passive: true });

document.addEventListener('touchend', () => {
  if (cursor) cursor.classList.remove('active');
  if (cursorRing) cursorRing.classList.remove('active');
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  if (cursorRing) {
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
  }
  requestAnimationFrame(animateRing);
}
animateRing();

// Custom Hover States for Cursor
function setupCursorHovers() {
  document.querySelectorAll('a, button, .project-card, .tech-item, .story-card, .blog-card, input, textarea, select, .checkpoint, .theme-toggle-nav, .modal-close').forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (cursor && cursorRing) {
        cursor.classList.add('hover');
        cursorRing.classList.add('hover');
      }
    });
    el.addEventListener('mouseleave', () => {
      if (cursor && cursorRing) {
        cursor.classList.remove('hover');
        cursorRing.classList.remove('hover');
      }
    });
  });
}

// Custom Loader Animation Sequence
window.addEventListener('load', () => {
  const loader = document.getElementById('loaderOverlay');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 1100);
  }
});

// Bulletproof, Crash-safe Storage Wrapper for sandbox environments (e.g. file:// protocol)
const safeStorage = {
  getItem(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn("Storage item read error:", e);
      return this[key] || null;
    }
  },
  setItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn("Storage item write error:", e);
      this[key] = value;
    }
  }
};

// Theme Management System (Light/Dark Mode)
function initTheme() {
  const toggleBtn = document.getElementById('themeToggle');
  const toggleIcon = document.getElementById('themeToggleIcon');
  
  // Set default theme to light if not already set, or load saved one
  let activeTheme = safeStorage.getItem('ziftTheme') || 'light';
  document.body.setAttribute('data-theme', activeTheme);
  updateThemeUI(activeTheme, toggleIcon);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      activeTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', activeTheme);
      safeStorage.setItem('ziftTheme', activeTheme);
      updateThemeUI(activeTheme, toggleIcon);
    });
  }
}

function updateThemeUI(theme, icon) {
  if (!icon) return;
  if (theme === 'dark') {
    icon.textContent = '☀️'; // Sun icon for switching to light
  } else {
    icon.textContent = '🌙'; // Moon icon for switching to dark
  }
}

// Progress Bar & Checkpoints Tracking
function initProgressBar() {
  const progressFill = document.getElementById('progressBarFill');
  if (!progressFill) return;

  const sections = [
    { id: 'hero', label: 'Ana Sayfa', labelEn: 'Home' },
    { id: 'services', label: 'Hizmetler', labelEn: 'Services' },
    { id: 'projects', label: 'Projeler', labelEn: 'Projects' },
    { id: 'technologies', label: 'Teknolojiler', labelEn: 'Tech' },
    { id: 'founder-about', label: 'Hakkımızda', labelEn: 'About' },
    { id: 'pricing', label: 'Paketler', labelEn: 'Pricing' },
    { id: 'blog', label: 'Blog', labelEn: 'Blog' },
    { id: 'contact', label: 'İletişim', labelEn: 'Contact' }
  ];

  const checkpointsContainer = document.getElementById('checkpoints');
  if (checkpointsContainer) {
    // Generate checkpoints dynamically if container is present
    checkpointsContainer.innerHTML = sections.map((sec) => `
      <div class="checkpoint" data-section="${sec.id}" onclick="scrollToSection('${sec.id}')" title="${sec.label}" data-lang-tr-title="${sec.label}" data-lang-en-title="${sec.labelEn}">
        <div class="checkpoint-dot"></div>
      </div>
    `).join('');
    setupCursorHovers();
  }

  window.addEventListener('scroll', () => {
    // Fill top bar
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressFill.style.width = scrollPercent + '%';

    // Highlight current checkpoint
    let currentActive = 'hero';
    sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) {
        const top = el.offsetTop - 180;
        if (window.scrollY >= top) {
          currentActive = sec.id;
        }
      }
    });

    document.querySelectorAll('.checkpoint').forEach(cp => {
      if (cp.dataset.section === currentActive) {
        cp.classList.add('active');
      } else {
        cp.classList.remove('active');
      }
    });
  });
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    window.scrollTo({
      top: el.offsetTop - 90,
      behavior: 'smooth'
    });
  }
}

// Hamburgers & Mobile Navigation
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (!hamburger || !mobileNav) return;

  let isOpen = false;
  hamburger.addEventListener('click', () => {
    isOpen = !isOpen;
    mobileNav.classList.toggle('open', isOpen);
    
    const spans = hamburger.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

function closeMobileNav() {
  const mobileNav = document.getElementById('mobileNav');
  const hamburger = document.getElementById('hamburger');
  if (!mobileNav || !hamburger) return;
  
  mobileNav.classList.remove('open');
  const spans = hamburger.querySelectorAll('span');
  spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
}

// Project Details Modal System
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');

function openModal(idx) {
  if (!modalOverlay || !modalContent || !projects[idx]) return;
  const p = projects[idx];

  const resultsHTML = p.results.map(res => `<div class="modal-result-item">${res}</div>`).join('');
  const techsHTML = p.techs.map(tech => `<span class="modal-tag">${tech}</span>`).join('');

  const isSubpage = window.location.pathname.includes('/pages/') || window.location.pathname.includes('\\pages\\');
  const pathPrefix = isSubpage ? '../' : '';
  const resolvedImg = p.img ? (p.img.startsWith('http') || p.img.startsWith('../') ? p.img : pathPrefix + p.img) : null;

  const visualContent = resolvedImg ? `
    <div class="modal-visual" style="border: 1px solid var(--border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); overflow: hidden; margin-bottom: 1.5rem; height: 260px; position: relative;">
      <img src="${resolvedImg}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
    </div>
  ` : `
    <div class="modal-visual">
      <div class="proj-visual ${p.visual}" style="width:100%;height:100%;">
        <div class="proj-grid-lines"></div>
        <div class="proj-circle" style="width:200px;height:200px;top:10%;right:10%;opacity:0.4;"></div>
      </div>
    </div>
  `;

  modalContent.innerHTML = `
    <div class="modal-num">${p.num}</div>
    <h2 class="modal-title">${p.title}</h2>
    ${visualContent}
    <p class="modal-desc">${p.desc}</p>
    <div class="modal-results-title">Proje Sonuçları & Özellikler</div>
    <div class="modal-results-wrap">${resultsHTML}</div>
    <div class="modal-results-title" style="margin-top:1.5rem;">Kullanılan Teknolojiler</div>
    <div class="modal-tech-list">${techsHTML}</div>
    <a href="${p.link}" target="_blank" class="modal-link">Projeyi Canlı İncele ↗</a>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (modalOverlay && e.target === modalOverlay) closeModal();
}

// Contact Form Handler
function handleSubmit(e) {
  e.preventDefault();
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const projectType = document.getElementById('projectType').value.trim();
  const notes = document.getElementById('message').value.trim();
  const btn = document.getElementById('submitBtn');

  if (!fullName || !email || !projectType || !notes) {
    alert('Lütfen tüm alanları doldurun.');
    return;
  }

  const subject = encodeURIComponent(`ZiftStudio İletişim Formu | ${fullName}`);
  const body = encodeURIComponent(
    `Ad Soyad: ${fullName}\n` +
    `E-posta: ${email}\n` +
    `Proje Türü: ${projectType}\n` +
    `Not: ${notes}\n\n` +
    `Bu mesaj, ZiftStudio Neo-Brutalist iletişim formu üzerinden gönderildi.`
  );

  const recipient = 'muhammedalikitir.tr@gmail.com';
  const mailto = `mailto:${recipient}?subject=${subject}&body=${body}`;

  if (btn) {
    btn.textContent = 'Oluşturuluyor...';
    btn.disabled = true;
  }

  setTimeout(() => {
    window.location.href = mailto;
    if (btn) {
      btn.textContent = 'Mesaj Gönder →';
      btn.disabled = false;
    }
  }, 350);
}

// Cookie Consent Overlay System
function initConsentOverlay() {
  const consentOverlay = document.getElementById('consentOverlay');
  const acceptConsentBtn = document.getElementById('acceptConsent');
  if (!consentOverlay || !acceptConsentBtn) return;
  
  if (!safeStorage.getItem('ziftConsentAccepted')) {
    consentOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  acceptConsentBtn.addEventListener('click', () => {
    safeStorage.setItem('ziftConsentAccepted', 'true');
    consentOverlay.classList.remove('open');
    document.body.style.overflow = '';
  });
}

// Scroll animation triggers
function initScrollReveals() {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealEls.forEach((el, i) => {
    el.dataset.delay = (i % 4) * 80;
    observer.observe(el);
  });
}

// Expandable Blog posts vertical read more & Category Filter
function initBlogExpansion() {
  const expandBtns = document.querySelectorAll('.read-more-btn');
  expandBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.article-card');
      const content = card.querySelector('.article-content');
      
      if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        btn.innerHTML = 'Devamını Oku <svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 9l-7 7-7-7"/></svg>';
        // Smooth scroll back to card top so user does not get lost
        window.scrollTo({
          top: card.offsetTop - 100,
          behavior: 'smooth'
        });
      } else {
        content.classList.add('expanded');
        btn.innerHTML = 'Daralt / Kapat <svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 15l7-7 7 7"/></svg>';
      }
    });
  });
}

// Blog Category Filtering Logic
function filterBlogCategory(category, btnEl) {
  const filterBtns = document.querySelectorAll('.blog-filter-btn');
  const articles = document.querySelectorAll('.article-card');

  filterBtns.forEach(btn => btn.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  articles.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}

// QR Menu Tab Switching Logic (with Toggle support)
function switchQrTab(tabId) {
  const tabs = document.querySelectorAll('.qr-tab-btn');
  const panels = document.querySelectorAll('.qr-tab-panel');
  const clickedTab = Array.from(tabs).find(tab => 
    tab.dataset.tab === tabId || tab.getAttribute('onclick')?.includes(`'${tabId}'`)
  );
  const isAlreadyActive = clickedTab?.classList.contains('active');

  if (isAlreadyActive) {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    return;
  }

  tabs.forEach(tab => {
    const isMatch = tab.dataset.tab === tabId || tab.getAttribute('onclick')?.includes(`'${tabId}'`);
    tab.classList.toggle('active', !!isMatch);
  });

  panels.forEach(panel => {
    const isMatch = panel.dataset.tab === tabId || panel.id === `qr-tab-${tabId}`;
    panel.classList.toggle('active', !!isMatch);
  });
}

// Admin Panelli QR Menu Design Switcher Logic (Soft vs Modern Toggle)
function switchAdminDesign(designType, clickedBtn) {
  const container = clickedBtn ? clickedBtn.closest('#qr-tab-admin-panel') || document : document;
  const designBtns = container.querySelectorAll('.qr-design-btn');
  const designContents = container.querySelectorAll('.qr-admin-design-content');
  const detailsArea = container.querySelector('.qr-admin-details-area');
  const targetBtn = clickedBtn || Array.from(designBtns).find(b => b.getAttribute('data-design') === designType);
  const isAlreadyActive = targetBtn?.classList.contains('active');

  if (isAlreadyActive) {
    // Toggle OFF: Close details
    designBtns.forEach(btn => btn.classList.remove('active'));
    designContents.forEach(content => content.classList.remove('active'));
    if (detailsArea) detailsArea.style.display = 'none';
    return;
  }

  // Toggle ON: Show details
  designBtns.forEach(btn => {
    if (btn.getAttribute('data-design') === designType || btn.getAttribute('onclick')?.includes(`'${designType}'`)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  designContents.forEach(content => {
    if (content.id === `admin-design-${designType}`) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });

  if (detailsArea) {
    detailsArea.style.display = 'block';
  }

  // Update WhatsApp purchase button text/link to match chosen design and page context
  const isRandevu = window.location.pathname.includes('randevu') || !!document.getElementById('randevu-section');
  const purchaseBtns = container.querySelectorAll('.admin-purchase-btn');
  purchaseBtns.forEach(btn => {
    const designLabel = designType === 'modern' ? 'Modern Tasarım' : 'Soft Tasarım';
    const productName = isRandevu ? 'Randevu Sistemi' : 'QR Menü';
    const priceText = isRandevu ? '35.000 TL' : '27.500 TL';
    btn.href = `https://wa.me/905424786254?text=Merhaba,%20Admin%20Panelli%20${encodeURIComponent(designLabel)}%20Lisanslı%20${encodeURIComponent(productName)}%20Satın%20Alım%20Paketi%20(${encodeURIComponent(priceText)})%20hakkında%20görüşmek%20istiyorum.`;
    btn.innerHTML = `Admin Panelli (${designLabel}) Paketi Seç & İletişime Geç →`;
  });
}

// Statik QR Menu / Randevu Design Switcher Logic (Soft vs Modern Toggle)
function switchStaticDesign(designType, clickedBtn) {
  const container = clickedBtn ? clickedBtn.closest('#qr-tab-static-menu') || document : document;
  const designBtns = container.querySelectorAll('.qr-static-design-btn');
  const designContents = container.querySelectorAll('.qr-static-design-content');
  const detailsArea = container.querySelector('.qr-static-details-area');
  const targetBtn = clickedBtn || Array.from(designBtns).find(b => b.getAttribute('data-design') === designType);
  const isAlreadyActive = targetBtn?.classList.contains('active');

  if (isAlreadyActive) {
    // Toggle OFF: Close details
    designBtns.forEach(btn => btn.classList.remove('active'));
    designContents.forEach(content => content.classList.remove('active'));
    if (detailsArea) detailsArea.style.display = 'none';
    return;
  }

  // Toggle ON: Show details
  designBtns.forEach(btn => {
    if (btn.getAttribute('data-design') === designType || btn.getAttribute('onclick')?.includes(`'${designType}'`)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  designContents.forEach(content => {
    if (content.id === `static-design-${designType}`) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });

  if (detailsArea) {
    detailsArea.style.display = 'block';
  }

  // Update WhatsApp purchase button text/link to match chosen design and page context
  const isRandevu = window.location.pathname.includes('randevu') || !!document.getElementById('randevu-section');
  const purchaseBtns = container.querySelectorAll('.static-purchase-btn');
  purchaseBtns.forEach(btn => {
    const designLabel = designType === 'modern' ? 'Modern Tasarım' : 'Soft Tasarım';
    const productName = isRandevu ? 'Randevu Sistemi' : 'QR Menü';
    btn.href = `https://wa.me/905424786254?text=Merhaba,%20Statik%20${encodeURIComponent(designLabel)}%20Lisanslı%20${encodeURIComponent(productName)}%20Satın%20Alım%20Paketi%20(12.500%20TL)%20hakkında%20bilgi%20almak%20istiyorum.`;
    btn.innerHTML = `Statik ${isRandevu ? 'Randevu Sistemi' : 'Menü'} (${designLabel}) Paketini Seç & İletişime Geç →`;
  });
}

// QR Menu Gallery & Lightbox Controller
const qrGalleryState = {
  currentGalleryId: null,
  currentIndex: 0,
  galleries: {}
};

function initQrGalleries() {
  document.querySelectorAll('.qr-gallery-container').forEach(gallery => {
    const gid = gallery.getAttribute('data-gallery-id');
    if (!gid) return;

    const slides = Array.from(gallery.querySelectorAll('.qr-gallery-slide')).map(slide => ({
      src: slide.getAttribute('data-img-src') || slide.querySelector('img')?.src || '',
      caption: slide.getAttribute('data-caption') || slide.querySelector('.qr-gallery-caption-text')?.innerText || ''
    }));

    qrGalleryState.galleries[gid] = {
      index: 0,
      slides: slides
    };
  });
}

function switchQrSlide(galleryId, dirOrIndex, event) {
  if (event) event.stopPropagation();
  const g = qrGalleryState.galleries[galleryId];
  if (!g || !g.slides.length) return;

  if (typeof dirOrIndex === 'number') {
    g.index = (dirOrIndex + g.slides.length) % g.slides.length;
  } else if (dirOrIndex === 'next') {
    g.index = (g.index + 1) % g.slides.length;
  } else if (dirOrIndex === 'prev') {
    g.index = (g.index - 1 + g.slides.length) % g.slides.length;
  }

  // Update DOM slides
  const galleryEls = document.querySelectorAll(`.qr-gallery-container[data-gallery-id="${galleryId}"]`);
  galleryEls.forEach(galleryEl => {
    const slides = galleryEl.querySelectorAll('.qr-gallery-slide');
    const thumbs = galleryEl.querySelectorAll('.qr-gallery-thumb');
    const countEl = galleryEl.querySelector('.qr-gallery-count');

    slides.forEach((s, idx) => {
      if (idx === g.index) s.classList.add('active');
      else s.classList.remove('active');
    });

    thumbs.forEach((t, idx) => {
      if (idx === g.index) t.classList.add('active');
      else t.classList.remove('active');
    });

    if (countEl) {
      countEl.innerText = `📷 ${g.index + 1} / ${g.slides.length}`;
    }
  });
}

function openQrLightbox(galleryId, index, event) {
  if (event) event.stopPropagation();
  const g = qrGalleryState.galleries[galleryId];
  if (!g || !g.slides.length) return;

  qrGalleryState.currentGalleryId = galleryId;
  qrGalleryState.currentIndex = typeof index === 'number' ? index : g.index;

  updateQrLightbox();

  const lightbox = document.getElementById('qrLightboxOverlay');
  if (lightbox) lightbox.classList.add('open');
}

function updateQrLightbox() {
  const gid = qrGalleryState.currentGalleryId;
  const g = qrGalleryState.galleries[gid];
  if (!g) return;

  const current = g.slides[qrGalleryState.currentIndex];
  if (!current) return;

  const imgEl = document.getElementById('qrLightboxImg');
  const titleEl = document.getElementById('qrLightboxTitle');
  const counterEl = document.getElementById('qrLightboxCounter');

  if (imgEl) imgEl.src = current.src;
  if (titleEl) titleEl.innerText = current.caption;
  if (counterEl) counterEl.innerText = `${qrGalleryState.currentIndex + 1} / ${g.slides.length}`;
}

function navQrLightbox(dir, event) {
  if (event) event.stopPropagation();
  const gid = qrGalleryState.currentGalleryId;
  const g = qrGalleryState.galleries[gid];
  if (!g || !g.slides.length) return;

  if (dir === 'next') {
    qrGalleryState.currentIndex = (qrGalleryState.currentIndex + 1) % g.slides.length;
  } else if (dir === 'prev') {
    qrGalleryState.currentIndex = (qrGalleryState.currentIndex - 1 + g.slides.length) % g.slides.length;
  }
  updateQrLightbox();
}

function closeQrLightbox(event) {
  if (event && event.target && event.target.id !== 'qrLightboxOverlay' && !event.target.classList.contains('qr-lightbox-close')) {
    return;
  }
  const lightbox = document.getElementById('qrLightboxOverlay');
  if (lightbox) lightbox.classList.remove('open');
}

// Blog Post Lightbox Initialization
function initBlogLightbox() {
  const articleCards = document.querySelectorAll('.article-card');
  if (!articleCards.length) return;

  articleCards.forEach((card, cardIdx) => {
    const galleryId = `blog-post-${cardIdx}`;
    const slides = [];

    // 1. Cover image
    const coverWrap = card.querySelector('.article-cover-wrap');
    if (coverWrap) {
      const coverImg = coverWrap.querySelector('img');
      const captionText = coverWrap.querySelector('.article-cover-caption span')?.innerText || coverImg?.alt || 'Proje Görseli';
      if (coverImg && coverImg.src) {
        slides.push({
          src: coverImg.src,
          caption: captionText
        });
        const slideIdx = slides.length - 1;
        coverWrap.addEventListener('click', (e) => {
          openQrLightbox(galleryId, slideIdx, e);
        });
      }
    }

    // 2. Gallery images inside the post
    const galleryItems = card.querySelectorAll('.article-gallery-item');
    galleryItems.forEach(item => {
      const img = item.querySelector('img');
      const labelText = item.querySelector('.article-gallery-label')?.innerText || img?.alt || 'Ekran Görüntüsü';
      if (img && img.src) {
        slides.push({
          src: img.src,
          caption: labelText
        });
        const slideIdx = slides.length - 1;
        item.addEventListener('click', (e) => {
          openQrLightbox(galleryId, slideIdx, e);
        });
      }
    });

    if (slides.length) {
      qrGalleryState.galleries[galleryId] = {
        index: 0,
        slides: slides
      };
    }
  });
}

// Dual Language (TR / EN) Switcher Engine
const i18nEngine = {
  currentLang: 'tr',

  init() {
    // 1. Determine initial language: saved preference, or html lang, or default 'tr'
    const savedLang = safeStorage.getItem('zift_language') || document.documentElement.getAttribute('lang') || 'tr';
    this.setLanguage(savedLang, false);

    // 2. Attach listeners to all language switcher buttons (.lang-btn)
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetLang = btn.getAttribute('data-lang-btn') || btn.getAttribute('data-lang') || 'tr';
        if (targetLang !== this.currentLang) {
          this.setLanguage(targetLang, true);
        }
      });
    });
  },

  setLanguage(lang, animate = true) {
    this.currentLang = lang;
    safeStorage.setItem('zift_language', lang);
    document.documentElement.setAttribute('lang', lang);

    // Update active UI state for switcher buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
      const btnLang = btn.getAttribute('data-lang-btn') || btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Find all translatable elements
    const translatableElements = document.querySelectorAll('[data-lang-tr], [data-lang-en]');
    const placeholderElements = document.querySelectorAll('[data-lang-tr-placeholder], [data-lang-en-placeholder]');
    const titleElements = document.querySelectorAll('[data-lang-tr-title], [data-lang-en-title]');

    const applyTranslations = () => {
      // 1. Text / HTML content
      translatableElements.forEach(el => {
        const text = el.getAttribute(`data-lang-${lang}`);
        if (text !== null) {
          // If string contains HTML tags, render with innerHTML, else textContent
          if (/<[a-z][\s\S]*>/i.test(text)) {
            el.innerHTML = text;
          } else {
            el.textContent = text;
          }
        }
      });

      // 2. Placeholders
      placeholderElements.forEach(el => {
        const placeholderText = el.getAttribute(`data-lang-${lang}-placeholder`);
        if (placeholderText !== null) {
          el.setAttribute('placeholder', placeholderText);
        }
      });

      // 3. Titles / Aria labels
      titleElements.forEach(el => {
        const titleText = el.getAttribute(`data-lang-${lang}-title`);
        if (titleText !== null) {
          el.setAttribute('title', titleText);
          if (el.hasAttribute('aria-label')) {
            el.setAttribute('aria-label', titleText);
          }
        }
      });
    };

    if (animate) {
      document.body.classList.add('lang-fade-out');
      setTimeout(() => {
        applyTranslations();
        document.body.classList.remove('lang-fade-out');
      }, 120);
    } else {
      applyTranslations();
    }

    // Broadcast event for custom listeners
    document.dispatchEvent(new CustomEvent('ziftLanguageChanged', { detail: { lang } }));
  }
};

function initLanguageSwitcher() {
  i18nEngine.init();
}

// Initialize components on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguageSwitcher();
  initProgressBar();
  initMobileNav();
  initConsentOverlay();
  initScrollReveals();
  initBlogExpansion();
  initBlogLightbox();
  initQrGalleries();
  setupCursorHovers();
  
  // Esc closes modal
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
      closeQrLightbox();
    } else if (e.key === 'ArrowRight') {
      const lightbox = document.getElementById('qrLightboxOverlay');
      if (lightbox && lightbox.classList.contains('open')) {
        navQrLightbox('next');
      }
    } else if (e.key === 'ArrowLeft') {
      const lightbox = document.getElementById('qrLightboxOverlay');
      if (lightbox && lightbox.classList.contains('open')) {
        navQrLightbox('prev');
      }
    }
  });
});

