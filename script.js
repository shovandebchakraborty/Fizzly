// ===== DATA =====
const APP_STATE = {
  deliveryMode: 'delivery',
  activeCategory: 'All',
  cart: [],
  rating: 0,
  currentScreen: 'home',
  selectedProduct: null,
  selectedVol: '750ml',
  selectedQty: 1,
  selectedPayment: 'card',
  modalStep: 1, // 1 = product detail, 2 = order confirm, 3 = success
};

const CATEGORIES = [
  { name: 'Red Wine',   img: 'https://cdn-icons-png.flaticon.com/512/324/324297.png' },
  { name: 'White Wine', img: 'https://cdn-icons-png.flaticon.com/512/324/324299.png' },
  { name: 'Pink Wine',  img: 'https://cdn-icons-png.flaticon.com/512/324/324298.png' },
  { name: 'Tequila',   img: 'https://cdn-icons-png.flaticon.com/512/2997/2997577.png' },
  { name: 'Vodka',     img: 'https://cdn-icons-png.flaticon.com/512/2997/2997566.png' },
  { name: 'Cider',     img: 'https://cdn-icons-png.flaticon.com/512/324/324306.png' },
  { name: 'Liqueur',   img: 'https://cdn-icons-png.flaticon.com/512/2997/2997573.png' },
  { name: 'Whiskey',   img: 'https://cdn-icons-png.flaticon.com/512/2997/2997572.png' },
];

const PRODUCTS = [
  { id: 1,  name: 'Merlot Reserve',   category: 'Red Wine',   price: 14.00, badge: '10%', dist: '2.5km', outlet: 'SHARIN LIQUOR OUTLET', desc: 'A beautifully structured Merlot aged 18 months in French oak barrels. Notes of ripe plum, dark cherry, and a hint of vanilla on the finish.', vol: '750ml', vols: ['375ml', '750ml', '1.5L'], isTrending: true,  img: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop' },
  { id: 2,  name: 'Cabernet Classic', category: 'Red Wine',   price: 14.00, badge: '10%', dist: '2.9km', outlet: 'SHARIN LIQUOR OUTLET', desc: 'Bold, structured Cabernet Sauvignon with dark fruit, cedar, and firm tannins. Exceptional with red meats and aged cheeses.', vol: '750ml', vols: ['750ml', '1.5L'], isTrending: false, img: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop' },
  { id: 3,  name: 'Shiraz Bold',      category: 'Red Wine',   price: 14.00, badge: '10%', dist: '2.5km', outlet: 'SHARIN LIQUOR OUTLET', desc: 'Rich, full-bodied Shiraz with a seductive peppery finish. Aromas of blackberry, spice, and smoked meat. Unapologetically bold.', vol: '750ml', vols: ['375ml', '750ml'], isTrending: true,  img: 'https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop' },
  { id: 4,  name: 'Chardonnay Gold',  category: 'White Wine', price: 18.00, badge: '5%',  dist: '1.8km', outlet: 'PRIME SPIRITS',         desc: 'Crisp and mineral Chardonnay with elegant citrus character. Light oak influence preserves the freshness of lemon zest and green apple.', vol: '750ml', vols: ['375ml', '750ml', '1.5L'], isTrending: true,  img: 'https://images.pexels.com/photos/1283218/pexels-photo-1283218.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop' },
  { id: 5,  name: 'Belvedere Vodka',  category: 'Vodka',      price: 45.00, badge: '15%', dist: '3.1km', outlet: 'SHARIN LIQUOR OUTLET', desc: 'Premium Polish rye vodka with a silky, ultra-smooth finish. Quadruple-distilled for exceptional purity and a subtly creamy character.', vol: '750ml', vols: ['200ml', '375ml', '750ml', '1L'], isTrending: false, img: 'https://images.pexels.com/photos/5947015/pexels-photo-5947015.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop' },
  { id: 6,  name: 'Patrón Silver',    category: 'Tequila',    price: 55.00, badge: '8%',  dist: '2.2km', outlet: 'PRIME SPIRITS',         desc: 'Artisan blue agave tequila, perfectly balanced for sipping or craft cocktails. Clean, smooth, with a natural sweetness and fresh agave finish.', vol: '750ml', vols: ['375ml', '750ml', '1L'], isTrending: true,  img: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=500&auto=format&fit=crop&q=60' },
  { id: 7,  name: 'Jameson Irish',    category: 'Whiskey',    price: 38.00, badge: '12%', dist: '1.5km', outlet: 'SHARIN LIQUOR OUTLET', desc: 'Triple distilled Irish whiskey renowned for its exceptional smoothness. A perfect balance of spicy, nutty, and vanilla tones with a hint of sweetness.', vol: '750ml', vols: ['200ml', '750ml', '1L'], isTrending: false, img: 'https://images.unsplash.com/photo-1595505467869-8cb257b13be2?w=500&auto=format&fit=crop&q=60' },
  { id: 8,  name: 'Rosé Garden',      category: 'Pink Wine',  price: 16.00, badge: '20%', dist: '2.0km', outlet: 'WINE CELLAR CO.',       desc: 'Delicate Provençal-style rosé bursting with strawberry, peach blossom, and rose petal aromas. Crisp, refreshing, and endlessly elegant.', vol: '750ml', vols: ['375ml', '750ml', '1.5L'], isTrending: true,  img: 'https://images.unsplash.com/photo-1561150169-371f366b828a?w=500&auto=format&fit=crop&q=60' },
  { id: 9,  name: 'Glenfiddich 12',   category: 'Whiskey',    price: 65.00, badge: '18%', dist: '2.8km', outlet: 'PRIME SPIRITS',         desc: 'World-renowned 12-year single malt Scotch. Sweet and fruity with a fresh pear, subtle oak, and creamy toffee finish. The benchmark Speyside malt.', vol: '750ml', vols: ['200ml', '375ml', '750ml'], isTrending: true,  img: 'https://images.unsplash.com/photo-1681040900989-645cecfd8ea4?w=500&auto=format&fit=crop&q=60' },
  { id: 10, name: 'Grey Goose',       category: 'Vodka',      price: 52.00, badge: '10%', dist: '3.0km', outlet: 'SHARIN LIQUOR OUTLET', desc: 'French wheat vodka distilled in Cognac with pristine spring water. Velvety texture, clean finish with a pleasantly soft mouthfeel.', vol: '750ml', vols: ['200ml', '375ml', '750ml', '1.75L'], isTrending: false, img: 'https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop' },
];

const TRACKING_STEPS = [
  { label: 'Order Received',    status: 'done',    icon: '✦' },
  { label: 'Payment Confirmed', status: 'done',    icon: '✦' },
  { label: 'Order Confirmed',   status: 'done',    icon: '✦' },
  { label: 'Driver Assigned',   status: 'current', icon: '◎' },
  { label: 'Dispatched',        status: 'pending', icon: '○' },
  { label: 'Delivered',         status: 'pending', icon: '○' },
];

// ===== BANNER CAROUSEL =====
let currentBanner = 0;
let bannerInterval;
let bannerSlides = [];
let bannerTrack = null;
let dotsContainer = null;

function updateBannerCarousel() {
  if (!bannerTrack) return;
  bannerTrack.style.transform = `translateX(-${currentBanner * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentBanner);
  });
}

function nextBanner() {
  if (!bannerSlides.length) return;
  currentBanner = (currentBanner + 1) % bannerSlides.length;
  updateBannerCarousel();
  resetBannerInterval();
}

function prevBanner() {
  if (!bannerSlides.length) return;
  currentBanner = (currentBanner - 1 + bannerSlides.length) % bannerSlides.length;
  updateBannerCarousel();
  resetBannerInterval();
}

function resetBannerInterval() {
  if (bannerInterval) clearInterval(bannerInterval);
  bannerInterval = setInterval(nextBanner, 5000);
}

function createBannerDots() {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  bannerSlides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => { currentBanner = i; updateBannerCarousel(); resetBannerInterval(); });
    dotsContainer.appendChild(dot);
  });
}

// ===== RENDER =====
function renderCategories() {
  const grid = document.getElementById('catGrid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(cat => `
    <div class="cat-card" onclick="filterByCategory('${cat.name}')">
      <img src="${cat.img}" alt="${cat.name}" class="cat-img" onerror="this.style.display='none'">
      <span class="cat-name">${cat.name}</span>
    </div>
  `).join('');
}

function renderTrending() {
  const row = document.getElementById('trendingRow');
  if (!row) return;
  const items = PRODUCTS.filter(p => p.isTrending);
  if (!items.length) { row.innerHTML = '<div style="padding:20px;color:var(--text-muted)">No items</div>'; return; }
  row.innerHTML = items.map(p => `
    <div class="trend-card" onclick="openProductModal(${p.id})">
      <img src="${p.img}" alt="${p.name}" class="trend-img" onerror="this.src='https://cdn-icons-png.flaticon.com/512/324/324297.png'">
      <div class="trend-info">
        <div class="trend-name">${p.name}</div>
        <div class="trend-price">R ${p.price.toFixed(2)}</div>
        <div class="trend-badge">◆ Featured</div>
      </div>
    </div>
  `).join('');
}

function renderProducts(list) {
  const grid = document.getElementById('prodGrid');
  if (!grid) return;
  if (!list || !list.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted);letter-spacing:2px;font-size:12px;text-transform:uppercase;">No spirits found</div>`;
    return;
  }
  grid.innerHTML = list.map(p => `
    <div class="product-card" onclick="openProductModal(${p.id})">
      ${p.badge ? `<span class="product-badge">${p.badge} OFF</span>` : ''}
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" class="product-img" onerror="this.src='https://cdn-icons-png.flaticon.com/512/324/324297.png'">
      </div>
      <div class="price-row">
        <span class="product-price">R ${p.price.toFixed(2)}</span>
        <span class="product-dist">· ${p.dist}</span>
      </div>
      <div class="product-outlet">${p.outlet}</div>
      <div class="product-desc">${p.desc}</div>
      <div class="product-vol">${p.vol}</div>
      <button class="add-btn" onclick="addToCartDirect(${p.id}, event)">+</button>
    </div>
  `).join('');
}

function renderTracking() {
  const tl = document.getElementById('timeline');
  if (!tl) return;
  tl.innerHTML = TRACKING_STEPS.map((step, i) => {
    const isLast = i === TRACKING_STEPS.length - 1;
    return `
      <div class="tl-step">
        <div class="tl-left">
          <div class="tl-dot ${step.status === 'done' ? 'done' : step.status === 'current' ? 'current' : ''}"></div>
          ${!isLast ? `<div class="tl-line ${step.status === 'done' ? 'done' : ''}"></div>` : ''}
        </div>
        <span class="tl-label ${step.status}">${step.icon}&nbsp; ${step.label}</span>
      </div>
    `;
  }).join('');
}

// ===== PRODUCT MODAL =====
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  APP_STATE.selectedProduct = product;
  APP_STATE.selectedVol = product.vol;
  APP_STATE.selectedQty = 1;
  APP_STATE.selectedPayment = 'card';
  APP_STATE.modalStep = 1;
  renderProductModalContent();
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    APP_STATE.selectedProduct = null;
    APP_STATE.modalStep = 1;
  }, 400);
}

function getVolPrice(product, vol) {
  const volMultipliers = { '200ml': 0.27, '375ml': 0.5, '750ml': 1, '1L': 1.35, '1.5L': 2, '1.75L': 2.33 };
  return product.price * (volMultipliers[vol] || 1);
}

function calcTotal() {
  const p = APP_STATE.selectedProduct;
  if (!p) return 0;
  return getVolPrice(p, APP_STATE.selectedVol) * APP_STATE.selectedQty;
}

function renderProductModalContent() {
  const sheet = document.getElementById('modalSheet');
  const p = APP_STATE.selectedProduct;
  if (!p || !sheet) return;

  if (APP_STATE.modalStep === 1) {
    sheet.innerHTML = `
      <div class="modal-handle"></div>
      <button class="modal-close" onclick="closeModal()">✕</button>

      <div class="modal-product-img-wrap">
        ${p.badge ? `<div class="modal-product-badge">${p.badge} OFF</div>` : ''}
        <img src="${p.img}" alt="${p.name}" class="modal-product-img" onerror="this.src='https://cdn-icons-png.flaticon.com/512/324/324297.png'">
      </div>

      <div class="modal-body">
        <div class="modal-outlet-tag">${p.outlet}</div>
        <h2 class="modal-product-name">${p.name}</h2>
        <p class="modal-product-desc">${p.desc}</p>

        <div class="modal-price-row">
          <div class="modal-price" id="modalPrice">R ${getVolPrice(p, APP_STATE.selectedVol).toFixed(2)}</div>
          <div class="modal-dist-chip">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${p.dist}
          </div>
        </div>

        <div class="modal-section-label">Select Size</div>
        <div class="vol-selector" id="volSelector">
          ${p.vols.map(v => `
            <button class="vol-btn ${v === APP_STATE.selectedVol ? 'selected' : ''}" onclick="selectVol('${v}')">${v}</button>
          `).join('')}
        </div>

        <div class="modal-section-label">Quantity</div>
        <div class="qty-row">
          <div class="qty-ctrl">
            <button class="qty-btn" onclick="changeQty(-1)">−</button>
            <div class="qty-val" id="qtyVal">${APP_STATE.selectedQty}</div>
            <button class="qty-btn" onclick="changeQty(1)">+</button>
          </div>
          <div class="modal-total">Total: <strong id="modalTotal">R ${calcTotal().toFixed(2)}</strong></div>
        </div>

        <button class="buy-now-btn" onclick="goToOrderStep()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          Buy Now
        </button>
        <button class="add-cart-secondary" onclick="addToCartFromModal()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
          Add to Cart
        </button>
      </div>
    `;
  } else if (APP_STATE.modalStep === 2) {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit' });
    const p = APP_STATE.selectedProduct;

    sheet.innerHTML = `
      <div class="modal-handle"></div>
      <button class="modal-close" onclick="closeModal()">✕</button>
      <div class="order-modal-wrap">
        <div class="order-modal-header">
          <div class="order-check-icon">📋</div>
          <div class="order-title">Confirm Order</div>
          <div class="order-sub">Please review your order details before placing.</div>
        </div>

        <div class="order-item-summary">
          <img src="${p.img}" alt="${p.name}" class="order-item-img" onerror="this.src='https://cdn-icons-png.flaticon.com/512/324/324297.png'">
          <div>
            <div class="order-item-name">${p.name}</div>
            <div class="order-item-meta">${APP_STATE.selectedVol} · Qty ${APP_STATE.selectedQty}</div>
          </div>
          <div class="order-item-price">R ${calcTotal().toFixed(2)}</div>
        </div>

        <div class="order-detail-group">
          <div class="order-detail-row">
            <div class="order-detail-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <div class="order-detail-content">
              <div class="order-detail-label">Customer</div>
              <div class="order-detail-value">Alex Morgan</div>
            </div>
          </div>
          <div class="order-detail-row">
            <div class="order-detail-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div class="order-detail-content">
              <div class="order-detail-label">Delivery Location</div>
              <div class="order-detail-value">75 Firehouse Rd, Woodbourne</div>
            </div>
          </div>
          <div class="order-detail-row">
            <div class="order-detail-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
            </div>
            <div class="order-detail-content">
              <div class="order-detail-label">Date & Time</div>
              <div class="order-detail-value">${dateStr} · ${timeStr}</div>
            </div>
          </div>
        </div>

        <div class="modal-section-label">Payment Method</div>
        <div class="payment-methods-grid" id="payMethodGrid">
          <button class="pay-method-btn ${APP_STATE.selectedPayment === 'card' ? 'selected' : ''}" onclick="selectPayment('card')">
            <span class="pay-icon">💳</span>
            <span class="pay-label">Card</span>
          </button>
          <button class="pay-method-btn ${APP_STATE.selectedPayment === 'cash' ? 'selected' : ''}" onclick="selectPayment('cash')">
            <span class="pay-icon">💵</span>
            <span class="pay-label">Cash</span>
          </button>
          <button class="pay-method-btn ${APP_STATE.selectedPayment === 'wallet' ? 'selected' : ''}" onclick="selectPayment('wallet')">
            <span class="pay-icon">📱</span>
            <span class="pay-label">Wallet</span>
          </button>
          <button class="pay-method-btn ${APP_STATE.selectedPayment === 'eft' ? 'selected' : ''}" onclick="selectPayment('eft')">
            <span class="pay-icon">🏦</span>
            <span class="pay-label">EFT</span>
          </button>
        </div>

        <button class="place-order-btn" onclick="placeOrder()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>
          Place Order · R ${calcTotal().toFixed(2)}
        </button>
        <button class="back-to-product-btn" onclick="goBackToProduct()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15,18 9,12 15,6"/></svg>
          Back
        </button>
      </div>
    `;
  } else if (APP_STATE.modalStep === 3) {
    const orderId = 'MSN-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    sheet.innerHTML = `
      <div class="order-success-wrap">
        <div class="success-icon">✓</div>
        <div class="success-title">Order Placed!</div>
        <div class="success-sub">Your ${APP_STATE.selectedProduct?.name} is being prepared.<br>Estimated delivery in <strong>20 minutes</strong>.</div>
        <div class="order-id-chip">Order #${orderId}</div>
        <button class="track-order-btn" onclick="closeModal(); navTo('tracking');">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88 16.24,7.76"/></svg>
          Track My Order
        </button>
        <button class="back-to-product-btn" style="margin-top:10px" onclick="closeModal()">
          Continue Shopping
        </button>
      </div>
    `;
  }
}

function selectVol(vol) {
  APP_STATE.selectedVol = vol;
  // Update buttons
  document.querySelectorAll('.vol-btn').forEach(btn => {
    btn.classList.toggle('selected', btn.textContent.trim() === vol);
  });
  // Update price
  const p = APP_STATE.selectedProduct;
  const priceEl = document.getElementById('modalPrice');
  const totalEl = document.getElementById('modalTotal');
  if (priceEl) priceEl.textContent = `R ${getVolPrice(p, vol).toFixed(2)}`;
  if (totalEl) totalEl.textContent = `R ${calcTotal().toFixed(2)}`;
}

function changeQty(delta) {
  APP_STATE.selectedQty = Math.max(1, Math.min(99, APP_STATE.selectedQty + delta));
  const qtyEl = document.getElementById('qtyVal');
  const totalEl = document.getElementById('modalTotal');
  if (qtyEl) qtyEl.textContent = APP_STATE.selectedQty;
  if (totalEl) totalEl.textContent = `R ${calcTotal().toFixed(2)}`;
}

function goToOrderStep() {
  APP_STATE.modalStep = 2;
  renderProductModalContent();
}

function goBackToProduct() {
  APP_STATE.modalStep = 1;
  renderProductModalContent();
}

function selectPayment(method) {
  APP_STATE.selectedPayment = method;
  document.querySelectorAll('.pay-method-btn').forEach(btn => {
    btn.classList.remove('selected');
    btn.querySelector('.pay-icon')?.classList?.remove('selected');
  });
  const grid = document.getElementById('payMethodGrid');
  if (grid) {
    const btns = grid.querySelectorAll('.pay-method-btn');
    const methods = ['card', 'cash', 'wallet', 'eft'];
    methods.forEach((m, i) => { if (m === method) btns[i]?.classList.add('selected'); });
  }
}

function placeOrder() {
  APP_STATE.modalStep = 3;
  renderProductModalContent();
}

function addToCartFromModal() {
  const p = APP_STATE.selectedProduct;
  if (!p) return;
  const existing = APP_STATE.cart.find(c => c.id === p.id && c.vol === APP_STATE.selectedVol);
  if (existing) existing.qty += APP_STATE.selectedQty;
  else APP_STATE.cart.push({ ...p, vol: APP_STATE.selectedVol, qty: APP_STATE.selectedQty });
  closeModal();
  showToast(`${p.name} (${APP_STATE.selectedVol} × ${APP_STATE.selectedQty}) added`);
}

function addToCartDirect(id, e) {
  e.stopPropagation();
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = APP_STATE.cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else APP_STATE.cart.push({ ...product, qty: 1 });
  showToast(`${product.name} added to cart`);
}

// ===== NAVIGATION =====
function navTo(name) {
  APP_STATE.currentScreen = name;
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  const target = document.getElementById('screen-' + name);
  if (target) target.classList.remove('hidden');
  document.querySelectorAll('.snav').forEach(n => n.classList.toggle('active', n.dataset.screen === name));
  document.querySelectorAll('.bnav-btn').forEach(b => b.classList.toggle('active', b.dataset.screen === name));
  if (name === 'products') {
    renderProducts(PRODUCTS);
    const title = document.getElementById('prodTitle');
    if (title) title.textContent = APP_STATE.activeCategory === 'All' ? 'Collection' : APP_STATE.activeCategory;
  }
  if (name === 'tracking') renderTracking();
  window.scrollTo(0, 0);
}

function filterByCategory(catName) {
  APP_STATE.activeCategory = catName;
  navTo('products');
  const filtered = PRODUCTS.filter(p => p.category === catName);
  renderProducts(filtered.length ? filtered : PRODUCTS);
  const title = document.getElementById('prodTitle');
  if (title) title.textContent = catName;
}

// ===== SEARCH =====
function onSearch(val) {
  const deskClear = document.getElementById('deskClear');
  if (deskClear) deskClear.style.display = val ? 'flex' : 'none';
  if (val.length > 0) {
    const results = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(val.toLowerCase()) ||
      p.category.toLowerCase().includes(val.toLowerCase())
    );
    navTo('products');
    renderProducts(results);
    const title = document.getElementById('prodTitle');
    if (title) title.textContent = `"${val}"`;
  } else {
    navTo('home');
  }
}

function filterProds(val) {
  const list = val ? PRODUCTS.filter(p => p.name.toLowerCase().includes(val.toLowerCase())) : PRODUCTS;
  renderProducts(list);
}

function clearSearch() {
  ['deskSearch', 'mobSearch'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const deskClear = document.getElementById('deskClear');
  if (deskClear) deskClear.style.display = 'none';
  navTo('home');
}

// ===== TOGGLE =====
function setDel(mode) {
  APP_STATE.deliveryMode = mode;
  document.getElementById('togDel')?.classList.toggle('active', mode === 'delivery');
  document.getElementById('togPick')?.classList.toggle('active', mode === 'pickup');
  showToast(mode === 'delivery' ? 'Delivery selected' : 'Collection selected');
}

// ===== RATING =====
function doRate(val) {
  APP_STATE.rating = val;
  document.querySelectorAll('.star').forEach((s, i) => s.classList.toggle('lit', i < val));
  if (val > 0) {
    setTimeout(() => {
      const card = document.getElementById('rateCard');
      if (card) card.style.opacity = '0';
      showToast('Thank you for your rating ★');
    }, 600);
  }
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  bannerSlides = document.querySelectorAll('.banner-slide');
  bannerTrack = document.getElementById('bannerTrack');
  dotsContainer = document.getElementById('bannerDots');

  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'modalOverlay';
  overlay.innerHTML = `<div class="modal-sheet" id="modalSheet"></div>`;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.body.appendChild(overlay);

  renderCategories();
  renderTrending();
  renderTracking();

  if (bannerSlides.length) { createBannerDots(); resetBannerInterval(); }

  document.getElementById('prevBanner')?.addEventListener('click', prevBanner);
  document.getElementById('nextBanner')?.addEventListener('click', nextBanner);

  document.getElementById('deskSearch')?.addEventListener('input', e => onSearch(e.target.value));
  document.getElementById('mobSearch')?.addEventListener('input', e => onSearch(e.target.value));
  document.getElementById('prodSearch')?.addEventListener('input', e => filterProds(e.target.value));
  document.getElementById('clearProdSearch')?.addEventListener('click', () => {
    const inp = document.getElementById('prodSearch');
    if (inp) inp.value = '';
    filterProds('');
  });

  document.getElementById('togDel')?.addEventListener('click', () => setDel('delivery'));
  document.getElementById('togPick')?.addEventListener('click', () => setDel('pickup'));
  document.getElementById('seeAllCat')?.addEventListener('click', () => navTo('products'));
  document.getElementById('seeAllTrending')?.addEventListener('click', () => navTo('products'));
  document.getElementById('backFromProducts')?.addEventListener('click', () => navTo('home'));
  document.getElementById('backFromTracking')?.addEventListener('click', () => navTo('home'));
  document.getElementById('backFromAccount')?.addEventListener('click', () => navTo('home'));
  document.getElementById('deskClear')?.addEventListener('click', clearSearch);
  document.getElementById('viewOrderHistory')?.addEventListener('click', () => showToast('Order history coming soon'));
  document.getElementById('manageAddress')?.addEventListener('click', () => showToast('Address management coming soon'));
  document.getElementById('paymentMethods')?.addEventListener('click', () => showToast('Payment methods coming soon'));
  document.getElementById('logoutBtn')?.addEventListener('click', () => showToast('Signed out successfully'));

  document.querySelectorAll('.snav').forEach(btn => btn.addEventListener('click', () => navTo(btn.dataset.screen)));
  document.querySelectorAll('.bnav-btn').forEach(btn => btn.addEventListener('click', () => navTo(btn.dataset.screen)));
  document.querySelectorAll('.star').forEach(star => star.addEventListener('click', () => doRate(parseInt(star.dataset.rate))));

  // Escape key closes modal
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  navTo('home');
});

// Make functions global for inline onclick handlers
window.openProductModal = openProductModal;
window.closeModal = closeModal;
window.selectVol = selectVol;
window.changeQty = changeQty;
window.goToOrderStep = goToOrderStep;
window.goBackToProduct = goBackToProduct;
window.selectPayment = selectPayment;
window.placeOrder = placeOrder;
window.addToCartFromModal = addToCartFromModal;
window.addToCartDirect = addToCartDirect;
window.filterByCategory = filterByCategory;
window.navTo = navTo;
