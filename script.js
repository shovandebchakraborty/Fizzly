// ===== DATA =====
const APP_STATE = {
  deliveryMode: 'delivery',
  activeCategory: 'All',
  cart: [],
  favorites: [],
  currentScreen: 'home',
  selectedProduct: null,
  selectedVol: '750ml',
  selectedQty: 1,
  selectedPayment: 'card',
  modalStep: 1,
};

// Categories with real product images
const CATEGORIES = [
  { name: 'Beer',       img: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
  { name: 'Brandy',     img: 'https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
  { name: 'Whiskey',    img: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
  { name: 'Rum',        img: 'https://images.pexels.com/photos/4051386/pexels-photo-4051386.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
  { name: 'Vodka',      img: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
  { name: 'Wine',       img: 'https://images.pexels.com/photos/618990/pexels-photo-618990.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
  { name: 'Gin',        img: 'https://images.pexels.com/photos/4061609/pexels-photo-4061609.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
  { name: 'More',       img: 'https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop' },
];

const PRODUCTS = [
  { id: 1,  name: 'Merlot Reserve',    category: 'Wine',    price: 14.00, badge: '10%', dist: '2.5km', outlet: 'SHARIN LIQUOR OUTLET', desc: 'Beautifully structured Merlot aged 18 months in French oak. Ripe plum, dark cherry, and vanilla finish.', vol: '750ml', vols: ['375ml','750ml','1.5L'], rating: 4.3, stock: 10, isTrending: true,  img: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop' },
  { id: 2,  name: 'Cabernet Classic',  category: 'Wine',    price: 14.00, badge: '10%', dist: '2.9km', outlet: 'SHARIN LIQUOR OUTLET', desc: 'Bold, structured Cabernet with dark fruit, cedar, and firm tannins. Exceptional with red meats.', vol: '750ml', vols: ['750ml','1.5L'], rating: 4.1, stock: 15, isTrending: false, img: 'https://d323g1xugy1rkz.cloudfront.net/wp-content/uploads/sites/25/2020/08/14132318/FY23_Bacardi_Global_Our_Rums_Bacardi_Mango-1-1200x1348.jpg' },
  { id: 3,  name: 'Shiraz Bold',       category: 'Wine',    price: 16.00, badge: '10%', dist: '2.5km', outlet: 'SHARIN LIQUOR OUTLET', desc: 'Rich, full-bodied Shiraz with peppery finish. Aromas of blackberry, spice, and smoked meat.', vol: '750ml', vols: ['375ml','750ml'], rating: 4.5, stock: 8, isTrending: true,  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQeVH7DXdgKfu9PZRVXOlYhqQNcClcO4FxQ&s' },
  { id: 4,  name: 'Chardonnay Gold',   category: 'Wine',    price: 18.00, badge: '5%',  dist: '1.8km', outlet: 'PRIME SPIRITS',         desc: 'Crisp and mineral Chardonnay with citrus character. Light oak, lemon zest and green apple.', vol: '750ml', vols: ['375ml','750ml','1.5L'], rating: 4.2, stock: 20, isTrending: true,  img: 'https://images.pexels.com/photos/1283218/pexels-photo-1283218.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop' },
  { id: 5,  name: 'Belvedere Vodka',   category: 'Vodka',   price: 45.00, badge: '15%', dist: '3.1km', outlet: 'SHARIN LIQUOR OUTLET', desc: 'Premium Polish rye vodka. Silky, ultra-smooth finish. Quadruple-distilled for purity.', vol: '750ml', vols: ['200ml','375ml','750ml','1L'], rating: 4.6, stock: 6, isTrending: false, img: 'https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop' },
  { id: 6,  name: 'Patrón Silver',     category: 'Gin',     price: 55.00, badge: '8%',  dist: '2.2km', outlet: 'PRIME SPIRITS',         desc: 'Artisan blue agave spirit, perfectly balanced. Clean, smooth, with natural sweetness.', vol: '750ml', vols: ['375ml','750ml','1L'], rating: 4.7, stock: 5, isTrending: true,  img: 'https://liquidembassy.com//tej_img/wines_first/mcd_no.01_luxury_whisky.jpg' },
  { id: 7,  name: 'Jameson Irish',     category: 'Whiskey', price: 38.00, badge: '12%', dist: '1.5km', outlet: 'SHARIN LIQUOR OUTLET', desc: 'Triple distilled Irish whiskey. Perfect balance of spicy, nutty, and vanilla tones.', vol: '750ml', vols: ['200ml','750ml','1L'], rating: 4.4, stock: 12, isTrending: false, img: 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop' },
  { id: 8,  name: 'Rosé Garden',       category: 'Wine',    price: 16.00, badge: '20%', dist: '2.0km', outlet: 'WINE CELLAR CO.',       desc: 'Provençal-style rosé bursting with strawberry, peach blossom and rose petal aromas.', vol: '750ml', vols: ['375ml','750ml','1.5L'], rating: 4.3, stock: 18, isTrending: true,  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzeGIk8wImwACL_GMvhyN8uO-ruFIiSyQIEw&s' },
  { id: 9,  name: 'Glenfiddich 12',    category: 'Whiskey', price: 65.00, badge: '18%', dist: '2.8km', outlet: 'PRIME SPIRITS',         desc: 'World-renowned 12-year single malt Scotch. Sweet, fruity with fresh pear and creamy toffee.', vol: '750ml', vols: ['200ml','375ml','750ml'], rating: 4.8, stock: 4, isTrending: true,  img: 'https://delhidutyfree.co.in/media/catalog/product/cache/c3073cf0652b87af145d4aff9d92466d/2/0/2002602.webp' },
  { id: 10, name: 'Grey Goose',        category: 'Vodka',   price: 52.00, badge: '10%', dist: '3.0km', outlet: 'SHARIN LIQUOR OUTLET', desc: 'French wheat vodka distilled in Cognac. Velvety texture with a pleasantly soft mouthfeel.', vol: '750ml', vols: ['200ml','375ml','750ml','1.75L'], rating: 4.5, stock: 9, isTrending: false, img: 'https://images.pexels.com/photos/339696/pexels-photo-339696.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop' },
  { id: 11, name: 'Baileys Irish Cream',category: 'Rum',    price: 26.00, badge: '5%',  dist: '2.1km', outlet: 'WINE CELLAR CO.',       desc: 'Rich, creamy Irish whiskey liqueur with chocolate and vanilla. Perfect over ice.', vol: '750ml', vols: ['375ml','750ml','1L'], rating: 4.5, stock: 14, isTrending: true,  img: 'https://delhidutyfree.co.in/media/catalog/product/cache/c3073cf0652b87af145d4aff9d92466d/2/0/2000012.webp' },
  { id: 12, name: 'Jack Daniel\'s',    category: 'Whiskey', price: 32.00, badge: '8%',  dist: '1.9km', outlet: 'SHARIN LIQUOR OUTLET', desc: 'Tennessee whiskey charcoal mellowed drop by drop through 10 feet of sugar maple charcoal.', vol: '750ml', vols: ['200ml','750ml','1L'], rating: 4.3, stock: 22, isTrending: false, img: 'https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop' },
];

// ===== BADGE UPDATES =====
function updateBadges() {
  const cartCount = APP_STATE.cart.reduce((sum, c) => sum + c.qty, 0);
  const favCount = APP_STATE.favorites.length;

  // All cart badges
  document.querySelectorAll('.cart-badge').forEach(el => {
    el.textContent = cartCount;
    el.style.display = cartCount > 0 ? 'inline-flex' : 'none';
  });
  document.querySelectorAll('.bnav-cart-badge').forEach(el => {
    el.textContent = cartCount;
    el.style.display = cartCount > 0 ? 'flex' : 'none';
  });

  // All fav badges
  document.querySelectorAll('.fav-badge').forEach(el => {
    el.textContent = favCount;
    el.style.display = favCount > 0 ? 'inline-flex' : 'none';
  });

  // Account stat
  const statFavs = document.getElementById('statFavs');
  if (statFavs) statFavs.textContent = favCount;
}

// ===== BANNER CAROUSEL =====
let currentBanner = 0;
let bannerInterval;
let bannerSlidesCount = 0;

function updateBannerCarousel() {
  const track = document.getElementById('bannerTrack');
  if (!track) return;
  track.style.transform = `translateX(-${currentBanner * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentBanner);
  });
}

function nextBanner() {
  currentBanner = (currentBanner + 1) % bannerSlidesCount;
  updateBannerCarousel();
  resetBannerInterval();
}

function prevBanner() {
  currentBanner = (currentBanner - 1 + bannerSlidesCount) % bannerSlidesCount;
  updateBannerCarousel();
  resetBannerInterval();
}

function resetBannerInterval() {
  if (bannerInterval) clearInterval(bannerInterval);
  bannerInterval = setInterval(nextBanner, 5000);
}

function createBannerDots() {
  const dotsContainer = document.getElementById('bannerDots');
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  for (let i = 0; i < bannerSlidesCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => { currentBanner = i; updateBannerCarousel(); resetBannerInterval(); });
    dotsContainer.appendChild(dot);
  }
}

// ===== STAR RATING HTML =====
function starHTML(rating) {
  return `<span class="trend-rating-badge">★ ${rating.toFixed(1)}</span>`;
}

// ===== RENDER CATEGORIES =====
function renderCategories() {
  const grid = document.getElementById('catGrid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(cat => `
    <div class="cat-card" onclick="filterByCategory('${cat.name}')">
      <div class="cat-img-wrap">
        <img src="${cat.img}" alt="${cat.name}" class="cat-img" loading="lazy">
      </div>
      <span class="cat-name">${cat.name}</span>
    </div>
  `).join('');
}

// ===== RENDER TRENDING =====
function renderTrending() {
  const row = document.getElementById('trendingRow');
  if (!row) return;
  const items = PRODUCTS.filter(p => p.isTrending);
  if (!items.length) { row.innerHTML = '<div style="padding:20px;color:var(--text-muted)">No items</div>'; return; }
  row.innerHTML = items.map(p => {
    const isFav = APP_STATE.favorites.includes(p.id);
    return `
      <div class="trend-card" onclick="openProductModal(${p.id})">
        <img src="${p.img}" alt="${p.name}" class="trend-img" loading="lazy">
        <button class="trend-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav(${p.id}, event)" title="Favorite">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </button>
        <div class="trend-info">
          <div class="trend-name">${p.name}</div>
          <div class="trend-price">R ${p.price.toFixed(2)}</div>
          <div class="trend-rating">${starHTML(p.rating)}</div>
          <div class="trend-stock">${p.stock} left in stock</div>
        </div>
      </div>
    `;
  }).join('');
}

// ===== RENDER PRODUCTS =====
function renderProducts(list) {
  const grid = document.getElementById('prodGrid');
  if (!grid) return;
  if (!list || !list.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--text-muted);letter-spacing:2px;font-size:12px;text-transform:uppercase;">No spirits found</div>`;
    return;
  }
  grid.innerHTML = list.map(p => {
    const isFav = APP_STATE.favorites.includes(p.id);
    return `
      <div class="product-card" onclick="openProductModal(${p.id})">
        ${p.badge ? `<span class="product-badge">${p.badge} OFF</span>` : ''}
        <button class="product-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFav(${p.id}, event)" title="Favorite">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </button>
        <div class="product-img-wrap">
          <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy">
        </div>
        <div class="product-name">${p.name}</div>
        <div class="price-row">
          <span class="product-price">R ${p.price.toFixed(2)}</span>
          <span class="product-dist">· ${p.dist}</span>
        </div>
        <div class="product-outlet">${p.outlet}</div>
        <div class="prod-rating">${starHTML(p.rating)}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-vol">${p.vol}</div>
        <button class="add-btn" onclick="addToCartDirect(${p.id}, event)" title="Add to cart">+</button>
      </div>
    `;
  }).join('');
}

// ===== RENDER CART =====
function renderCart() {
  const body = document.getElementById('cartBody');
  if (!body) return;
  if (!APP_STATE.cart.length) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <div class="cart-empty-title">Your cart is empty</div>
        <div class="cart-empty-sub">Add some fine spirits to get started</div>
        <button class="cart-empty-btn" onclick="navTo('products')">Browse Collection</button>
      </div>`;
    return;
  }
  const subtotal = APP_STATE.cart.reduce((s, c) => s + c.price * c.qty, 0);
  const delivery = 5.00;
  const total = subtotal + delivery;
  body.innerHTML = `
    <div class="cart-items">
      ${APP_STATE.cart.map(item => `
        <div class="cart-item" id="cart-item-${item.id}">
          <img src="${item.img}" alt="${item.name}" class="cart-item-img" loading="lazy">
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-meta">${item.vol} · ${item.outlet}</div>
            <div class="cart-item-price">R ${(item.price * item.qty).toFixed(2)}</div>
          </div>
          <div class="cart-item-ctrl">
            <div class="qty-ctrl-sm">
              <button class="qty-btn-sm" onclick="updateCartQty(${item.id}, -1)">−</button>
              <span class="qty-val-sm">${item.qty}</span>
              <button class="qty-btn-sm" onclick="updateCartQty(${item.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">REMOVE</button>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="cart-footer">
      <div class="cart-footer-row">
        <span class="cart-footer-label">Subtotal</span>
        <span class="cart-footer-val">R ${subtotal.toFixed(2)}</span>
      </div>
      <div class="cart-footer-row">
        <span class="cart-footer-label">Delivery fee</span>
        <span class="cart-footer-val">R ${delivery.toFixed(2)}</span>
      </div>
      <div class="cart-total-row">
        <span class="cart-total-label">Total</span>
        <span class="cart-total-val">R ${total.toFixed(2)}</span>
      </div>
      <button class="checkout-btn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        Checkout · R ${total.toFixed(2)}
      </button>
    </div>
  `;
}

// ===== RENDER FAVORITES =====
function renderFavorites() {
  const body = document.getElementById('favBody');
  if (!body) return;
  if (!APP_STATE.favorites.length) {
    body.innerHTML = `
      <div class="fav-empty">
        <div class="fav-empty-icon">♡</div>
        <div class="fav-empty-title">No favorites yet</div>
        <div class="fav-empty-sub">Tap the heart icon on any product to save it here</div>
      </div>`;
    return;
  }
  const favProducts = PRODUCTS.filter(p => APP_STATE.favorites.includes(p.id));
  body.innerHTML = `
    <div class="fav-grid">
      ${favProducts.map(p => `
        <div class="fav-card" onclick="openProductModal(${p.id})">
          <img src="${p.img}" alt="${p.name}" class="fav-card-img" loading="lazy">
          <button class="fav-remove-btn" onclick="toggleFav(${p.id}, event)" title="Remove favorite">✕</button>
          <div class="fav-card-body">
            <div class="fav-card-name">${p.name}</div>
            <div class="fav-card-price">R ${p.price.toFixed(2)}</div>
          </div>
          <button class="fav-add-cart-btn" onclick="addToCartDirect(${p.id}, event)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
            Add to Cart
          </button>
        </div>
      `).join('')}
    </div>`;
}

// ===== CART ACTIONS =====
function updateCartQty(id, delta) {
  const item = APP_STATE.cart.find(c => c.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  renderCart();
  updateBadges();
}

function removeFromCart(id) {
  APP_STATE.cart = APP_STATE.cart.filter(c => c.id !== id);
  renderCart();
  updateBadges();
  showToast('Item removed from cart');
}

function clearCart() {
  if (!APP_STATE.cart.length) return;
  APP_STATE.cart = [];
  renderCart();
  updateBadges();
  showToast('Cart cleared');
}

// ===== FAVORITES =====
function toggleFav(id, e) {
  if (e) e.stopPropagation();
  const idx = APP_STATE.favorites.indexOf(id);
  if (idx === -1) {
    APP_STATE.favorites.push(id);
    const p = PRODUCTS.find(p => p.id === id);
    showToast(`${p ? p.name : 'Item'} added to favorites ♥`);
  } else {
    APP_STATE.favorites.splice(idx, 1);
    showToast('Removed from favorites');
  }
  updateBadges();
  // Re-render current screen to update heart icons
  if (APP_STATE.currentScreen === 'products') renderProducts(PRODUCTS);
  else if (APP_STATE.currentScreen === 'favorites') renderFavorites();
  else renderTrending();
  // Update modal fav button if open
  const modalFavBtn = document.getElementById('modalFavBtn');
  if (modalFavBtn && APP_STATE.selectedProduct) {
    const isFav = APP_STATE.favorites.includes(APP_STATE.selectedProduct.id);
    modalFavBtn.classList.toggle('active', isFav);
    const svg = modalFavBtn.querySelector('svg');
    if (svg) svg.setAttribute('fill', isFav ? 'currentColor' : 'none');
  }
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
  setTimeout(() => { APP_STATE.selectedProduct = null; APP_STATE.modalStep = 1; }, 400);
}

function getVolPrice(product, vol) {
  const m = { '200ml': 0.27, '375ml': 0.5, '750ml': 1, '1L': 1.35, '1.5L': 2, '1.75L': 2.33 };
  return product.price * (m[vol] || 1);
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
    const isFav = APP_STATE.favorites.includes(p.id);
    sheet.innerHTML = `
      <div class="modal-handle"></div>
      <button class="modal-close" onclick="closeModal()">✕</button>
      <div class="modal-product-img-wrap">
        ${p.badge ? `<div class="modal-product-badge">${p.badge} OFF</div>` : ''}
        <button class="modal-fav-btn ${isFav ? 'active' : ''}" id="modalFavBtn" onclick="toggleFav(${p.id}, event)" title="Favorite">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </button>
        <img src="${p.img}" alt="${p.name}" class="modal-product-img">
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
          ${starHTML(p.rating)}
        </div>
        <div class="modal-section-label">Select Size</div>
        <div class="vol-selector" id="volSelector">
          ${p.vols.map(v => `<button class="vol-btn ${v === APP_STATE.selectedVol ? 'selected' : ''}" onclick="selectVol('${v}')">${v}</button>`).join('')}
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
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          Buy Now
        </button>
        <button class="add-cart-secondary" onclick="addToCartFromModal()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
          Add to Cart
        </button>
      </div>`;
  } else if (APP_STATE.modalStep === 2) {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-ZA', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const timeStr = now.toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit' });
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
          <img src="${p.img}" alt="${p.name}" class="order-item-img">
          <div>
            <div class="order-item-name">${p.name}</div>
            <div class="order-item-meta">${APP_STATE.selectedVol} · Qty ${APP_STATE.selectedQty}</div>
          </div>
          <div class="order-item-price">R ${calcTotal().toFixed(2)}</div>
        </div>
        <div class="order-detail-group">
          <div class="order-detail-row">
            <div class="order-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
            <div class="order-detail-content"><div class="order-detail-label">Customer</div><div class="order-detail-value">Alex Morgan</div></div>
          </div>
          <div class="order-detail-row">
            <div class="order-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <div class="order-detail-content"><div class="order-detail-label">Delivery Location</div><div class="order-detail-value">75 Firehouse Rd, Woodbourne</div></div>
          </div>
          <div class="order-detail-row">
            <div class="order-detail-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg></div>
            <div class="order-detail-content"><div class="order-detail-label">Date &amp; Time</div><div class="order-detail-value">${dateStr} · ${timeStr}</div></div>
          </div>
        </div>
        <div class="modal-section-label">Payment Method</div>
        <div class="payment-methods-grid" id="payMethodGrid">
          ${['card','cash','wallet','eft'].map(m => `
            <button class="pay-method-btn ${APP_STATE.selectedPayment === m ? 'selected' : ''}" onclick="selectPayment('${m}')">
              <span class="pay-icon">${m==='card'?'💳':m==='cash'?'💵':m==='wallet'?'📱':'🏦'}</span>
              <span class="pay-label">${m.charAt(0).toUpperCase()+m.slice(1)}</span>
            </button>`).join('')}
        </div>
        <button class="place-order-btn" onclick="placeOrder()">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20,6 9,17 4,12"/></svg>
          Place Order · R ${calcTotal().toFixed(2)}
        </button>
        <button class="back-to-product-btn" onclick="goBackToProduct()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15,18 9,12 15,6"/></svg>
          Back
        </button>
      </div>`;
  } else if (APP_STATE.modalStep === 3) {
    const orderId = 'MSN-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    sheet.innerHTML = `
      <div class="order-success-wrap">
        <div class="success-icon">✓</div>
        <div class="success-title">Order Placed!</div>
        <div class="success-sub">Your ${APP_STATE.selectedProduct?.name} is being prepared.<br>Estimated delivery in <strong>20 minutes</strong>.</div>
        <div class="order-id-chip">Order #${orderId}</div>
        <button class="track-order-btn" onclick="closeModal(); navTo('cart');">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
          View Cart
        </button>
        <button class="back-to-product-btn" style="margin-top:10px" onclick="closeModal()">Continue Shopping</button>
      </div>`;
  }
}

function selectVol(vol) {
  APP_STATE.selectedVol = vol;
  document.querySelectorAll('.vol-btn').forEach(btn => {
    btn.classList.toggle('selected', btn.textContent.trim() === vol);
  });
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

function goToOrderStep() { APP_STATE.modalStep = 2; renderProductModalContent(); }
function goBackToProduct() { APP_STATE.modalStep = 1; renderProductModalContent(); }

function selectPayment(method) {
  APP_STATE.selectedPayment = method;
  document.querySelectorAll('.pay-method-btn').forEach(btn => btn.classList.remove('selected'));
  const methods = ['card','cash','wallet','eft'];
  const btns = document.querySelectorAll('.pay-method-btn');
  methods.forEach((m, i) => { if (m === method && btns[i]) btns[i].classList.add('selected'); });
}

function placeOrder() {
  APP_STATE.cart = [];
  updateBadges();
  APP_STATE.modalStep = 3;
  renderProductModalContent();
}

function addToCartFromModal() {
  const p = APP_STATE.selectedProduct;
  if (!p) return;
  const existing = APP_STATE.cart.find(c => c.id === p.id && c.vol === APP_STATE.selectedVol);
  if (existing) existing.qty += APP_STATE.selectedQty;
  else APP_STATE.cart.push({ ...p, vol: APP_STATE.selectedVol, qty: APP_STATE.selectedQty });
  updateBadges();
  closeModal();
  showToast(`${p.name} added to cart`);
}

function addToCartDirect(id, e) {
  if (e) e.stopPropagation();
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = APP_STATE.cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else APP_STATE.cart.push({ ...product, qty: 1 });
  updateBadges();
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
  if (name === 'cart') renderCart();
  if (name === 'favorites') renderFavorites();
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
  } else { navTo('home'); }
}

function filterProds(val) {
  const clearBtn = document.getElementById('clearProdSearch');
  if (clearBtn) clearBtn.style.display = val ? 'flex' : 'none';
  const list = val ? PRODUCTS.filter(p => p.name.toLowerCase().includes(val.toLowerCase()) || p.category.toLowerCase().includes(val.toLowerCase())) : PRODUCTS;
  renderProducts(list);
}

function clearSearch() {
  ['deskSearch','mobSearch'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  const deskClear = document.getElementById('deskClear');
  if (deskClear) deskClear.style.display = 'none';
  navTo('home');
}

// ===== FULFILLMENT TOGGLE =====
function setDel(mode) {
  APP_STATE.deliveryMode = mode;
  document.getElementById('togDel')?.classList.toggle('active', mode === 'delivery');
  document.getElementById('togPick')?.classList.toggle('active', mode === 'pickup');
  showToast(mode === 'delivery' ? 'Delivery selected' : 'Collection selected');
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
  // Banner
  const slides = document.querySelectorAll('.banner-slide');
  bannerSlidesCount = slides.length;
  if (bannerSlidesCount) { createBannerDots(); resetBannerInterval(); }

  // Modal overlay
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'modalOverlay';
  overlay.innerHTML = `<div class="modal-sheet" id="modalSheet"></div>`;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.body.appendChild(overlay);

  // Render initial content
  renderCategories();
  renderTrending();
  updateBadges();

  // Banner controls
  document.getElementById('prevBanner')?.addEventListener('click', prevBanner);
  document.getElementById('nextBanner')?.addEventListener('click', nextBanner);

  // Search
  document.getElementById('deskSearch')?.addEventListener('input', e => onSearch(e.target.value));
  document.getElementById('mobSearch')?.addEventListener('input', e => onSearch(e.target.value));
  document.getElementById('prodSearch')?.addEventListener('input', e => filterProds(e.target.value));
  document.getElementById('clearProdSearch')?.addEventListener('click', () => {
    const inp = document.getElementById('prodSearch');
    if (inp) inp.value = '';
    filterProds('');
  });
  document.getElementById('deskClear')?.addEventListener('click', clearSearch);

  // Fulfillment
  document.getElementById('togDel')?.addEventListener('click', () => setDel('delivery'));
  document.getElementById('togPick')?.addEventListener('click', () => setDel('pickup'));

  // Nav links
  document.getElementById('seeAllCat')?.addEventListener('click', () => navTo('products'));
  document.getElementById('seeAllTrending')?.addEventListener('click', () => navTo('products'));
  document.getElementById('backFromProducts')?.addEventListener('click', () => navTo('home'));
  document.getElementById('backFromCart')?.addEventListener('click', () => navTo('home'));
  document.getElementById('backFromFavorites')?.addEventListener('click', () => navTo('home'));
  document.getElementById('backFromAccount')?.addEventListener('click', () => navTo('home'));
  document.getElementById('clearCartBtn')?.addEventListener('click', clearCart);

  // Mobile header nav buttons
  document.getElementById('mobFavBtn')?.addEventListener('click', () => navTo('favorites'));
  document.getElementById('mobCartBtn')?.addEventListener('click', () => navTo('cart'));

  // Account
  document.getElementById('viewOrderHistory')?.addEventListener('click', () => showToast('Order history coming soon'));
  document.getElementById('manageAddress')?.addEventListener('click', () => showToast('Address management coming soon'));
  document.getElementById('paymentMethods')?.addEventListener('click', () => showToast('Payment methods coming soon'));
  document.getElementById('logoutBtn')?.addEventListener('click', () => showToast('Signed out successfully'));

  // Sidebar & bottom nav — unified
  document.querySelectorAll('.snav, .bnav-btn, [data-screen]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const screen = btn.dataset.screen;
      if (screen) navTo(screen);
    });
  });

  // Escape key
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // Touch swipe on banner
  let touchStartX = 0;
  const bannerCarousel = document.querySelector('.banner-carousel');
  if (bannerCarousel) {
    bannerCarousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    bannerCarousel.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) { diff > 0 ? nextBanner() : prevBanner(); }
    }, { passive: true });
  }

  navTo('home');
});

// Globals for inline handlers
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
window.toggleFav = toggleFav;
window.updateCartQty = updateCartQty;
window.removeFromCart = removeFromCart;
