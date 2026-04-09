// ===== Product Data =====
const products = [
  {
    id: 1,
    name: 'ピュア ビタミンC セラム',
    category: 'skincare',
    categoryLabel: 'セラム',
    price: 4800,
    originalPrice: null,
    badge: 'best',
    color: 'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #f48fb1 100%)',
    desc: 'ピュアビタミンC 15%配合。ブライトニング効果で透明感のある肌へ導きます。軽いテクスチャーで素早く浸透。',
    reviews: 234
  },
  {
    id: 2,
    name: 'シカ リペアクリーム',
    category: 'skincare',
    categoryLabel: 'クリーム',
    price: 3600,
    originalPrice: null,
    badge: 'best',
    color: 'linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 50%, #80cbc4 100%)',
    desc: 'ツボクサエキス配合の鎮静クリーム。敏感肌や肌荒れをケアし、健やかな肌に整えます。',
    reviews: 189
  },
  {
    id: 3,
    name: 'トーンアップ UVクリーム SPF50+',
    category: 'suncare',
    categoryLabel: 'サンケア',
    price: 2800,
    originalPrice: 3500,
    badge: 'sale',
    color: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 50%, #ffcc80 100%)',
    desc: 'SPF50+ PA++++の高い紫外線防止効果。トーンアップ効果で自然な明るい肌色に。化粧下地としても。',
    reviews: 312
  },
  {
    id: 4,
    name: 'ベルベット ティントリップ #05',
    category: 'makeup',
    categoryLabel: 'リップ',
    price: 2400,
    originalPrice: null,
    badge: 'new',
    color: 'linear-gradient(135deg, #fce4ec 0%, #e1bee7 50%, #ce93d8 100%)',
    desc: 'マットなのに乾燥しない、ベルベットテクスチャーのティントリップ。#05 ローズウッドカラー。',
    reviews: 156
  },
  {
    id: 5,
    name: 'ヒアルロン酸 モイスト トナー',
    category: 'skincare',
    categoryLabel: 'トナー',
    price: 2200,
    originalPrice: null,
    badge: null,
    color: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)',
    desc: '5種のヒアルロン酸配合。肌の角質層まで深く浸透し、内側からうるおいで満たします。',
    reviews: 278
  },
  {
    id: 6,
    name: 'クッションファンデ グロウ',
    category: 'makeup',
    categoryLabel: 'ファンデーション',
    price: 3800,
    originalPrice: null,
    badge: 'best',
    color: 'linear-gradient(135deg, #f5e6d3 0%, #e8d5c4 50%, #d4bea8 100%)',
    desc: '水光肌を叶えるグロウタイプのクッションファンデーション。SPF42 PA++で紫外線からも肌を守ります。',
    reviews: 421
  },
  {
    id: 7,
    name: 'レチノール ナイトセラム',
    category: 'skincare',
    categoryLabel: 'セラム',
    price: 5200,
    originalPrice: 6500,
    badge: 'sale',
    color: 'linear-gradient(135deg, #ede7f6 0%, #d1c4e9 50%, #b39ddb 100%)',
    desc: 'カプセル化レチノール0.5%配合。夜のスキンケアに取り入れて、ハリのある若々しい肌へ。',
    reviews: 167
  },
  {
    id: 8,
    name: 'アイシャドウパレット #Seoul',
    category: 'makeup',
    categoryLabel: 'アイシャドウ',
    price: 4200,
    originalPrice: null,
    badge: 'new',
    color: 'linear-gradient(135deg, #efebe9 0%, #d7ccc8 50%, #bcaaa4 100%)',
    desc: 'デイリーに使える9色パレット。マット・シマー・グリッターの3質感で立体的な目元を演出。',
    reviews: 98
  }
];

// ===== Cart State =====
let cart = [];

// ===== DOM Elements =====
const productGrid = document.getElementById('productGrid');
const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartFooter = document.getElementById('cartFooter');
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const modalOverlay = document.getElementById('modalOverlay');
const quickViewModal = document.getElementById('quickViewModal');
const modalClose = document.getElementById('modalClose');
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
const header = document.getElementById('header');

// ===== Render Products =====
function renderProducts(filter = 'all') {
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  productGrid.innerHTML = filtered.map((product, index) => `
    <div class="product-card" data-id="${product.id}" data-aos="fade-up" data-aos-delay="${index * 50}">
      <div class="product-image">
        ${product.badge ? `<span class="product-badge badge-${product.badge}">${
          product.badge === 'best' ? 'Best' : product.badge === 'new' ? 'New' : '-' + Math.round((1 - product.price / product.originalPrice) * 100) + '%'
        }</span>` : ''}
        <div class="product-image-bg" style="background: ${product.color};"></div>
        <div class="product-overlay">
          <button class="product-overlay-btn quick-view-btn" data-id="${product.id}" aria-label="クイックビュー">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <button class="product-overlay-btn add-btn" data-id="${product.id}" aria-label="カートに追加">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
        </div>
      </div>
      <div class="product-info">
        <p class="product-category">${product.categoryLabel}</p>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">
          <span class="current">¥${product.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span class="original">¥${product.originalPrice.toLocaleString()}</span><span class="discount">-${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // Re-trigger AOS for new elements
  initAOS();

  // Bind events
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const product = products.find(p => p.id === parseInt(btn.dataset.id));
      addToCart(product);
    });
  });

  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const product = products.find(p => p.id === parseInt(btn.dataset.id));
      openQuickView(product);
    });
  });
}

// ===== Filter Products =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

// ===== Cart Functions =====
function addToCart(product, qty = 1) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, qty });
  }
  updateCart();
  openCart();

  // Button animation feedback
  cartBtn.style.transform = 'scale(1.2)';
  setTimeout(() => cartBtn.style.transform = '', 200);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function updateCart() {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  cartCount.textContent = count;
  cartCount.classList.toggle('active', count > 0);
  cartTotal.textContent = `¥${total.toLocaleString()}`;
  cartFooter.style.display = count > 0 ? 'block' : 'none';

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <p>カートは空です</p>
      </div>
    `;
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img" style="background: ${item.color}; border-radius: 8px;"></div>
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-price">¥${(item.price * item.qty).toLocaleString()} ${item.qty > 1 ? `(×${item.qty})` : ''}</p>
          <button class="cart-item-remove" data-id="${item.id}">削除</button>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
    });
  }
}

function openCart() {
  cartDrawer.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartDrawer.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

// ===== Quick View Modal =====
let currentModalProduct = null;
let modalQty = 1;

function openQuickView(product) {
  currentModalProduct = product;
  modalQty = 1;

  document.getElementById('modalImg').style.background = product.color;
  document.getElementById('modalCategory').textContent = product.categoryLabel;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalDesc').textContent = product.desc;
  document.getElementById('modalReviews').textContent = `${product.reviews}件のレビュー`;
  document.getElementById('modalPrice').innerHTML = `¥${product.price.toLocaleString()}${product.originalPrice ? ` <span style="text-decoration:line-through;color:#999;font-size:0.9rem;">¥${product.originalPrice.toLocaleString()}</span>` : ''}`;
  document.getElementById('qtyValue').textContent = '1';

  quickViewModal.classList.add('active');
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  quickViewModal.classList.remove('active');
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeQuickView);
modalOverlay.addEventListener('click', closeQuickView);

document.getElementById('qtyMinus').addEventListener('click', () => {
  if (modalQty > 1) {
    modalQty--;
    document.getElementById('qtyValue').textContent = modalQty;
  }
});

document.getElementById('qtyPlus').addEventListener('click', () => {
  modalQty++;
  document.getElementById('qtyValue').textContent = modalQty;
});

document.getElementById('modalAddToCart').addEventListener('click', () => {
  if (currentModalProduct) {
    addToCart(currentModalProduct, modalQty);
    closeQuickView();
  }
});

// ===== Search =====
searchBtn.addEventListener('click', () => {
  searchOverlay.classList.add('active');
  setTimeout(() => searchInput.focus(), 300);
});

searchClose.addEventListener('click', () => {
  searchOverlay.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchOverlay.classList.remove('active');
    closeCart();
    closeQuickView();
  }
});

// ===== Mobile Nav =====
navToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

// ===== Header Scroll =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  header.classList.toggle('scrolled', scrollY > 50);
  lastScroll = scrollY;
});

// ===== Add to Cart from New Arrivals =====
document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.name;
    const price = parseInt(btn.dataset.price);
    const product = {
      id: Date.now(),
      name,
      price,
      color: btn.closest('.arrival-card').querySelector('.arrival-img').style.background,
      qty: 1
    };
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty++;
      updateCart();
      openCart();
    } else {
      addToCart(product);
    }

    btn.textContent = '追加しました';
    btn.style.background = 'var(--color-accent-dark)';
    setTimeout(() => {
      btn.textContent = 'カートに入れる';
      btn.style.background = '';
    }, 1500);
  });
});

// ===== Simple AOS (Animate on Scroll) =====
function initAOS() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-aos-delay') || 0;
        setTimeout(() => {
          entry.target.classList.add('aos-animate');
        }, parseInt(delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('[data-aos]').forEach(el => {
    el.classList.remove('aos-animate');
    observer.observe(el);
  });
}

// ===== Smooth scroll for anchor links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Init =====
renderProducts();
initAOS();
