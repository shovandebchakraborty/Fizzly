/* ===== SHARED DATA ===== */
const APP_STATE = {
  deliveryMode: 'delivery',
  activeCategory: 'All',
  cart: [],
  rating: 0,
  currentScreen: 'home',
};

const CATEGORIES = [
  { name: 'Red Wine',     emoji: '🍷', img: 'https://png.pngitem.com/pimgs/s/159-1595066_red-wine-bottle-png-transparent-png.png' },
  { name: 'White wine',   emoji: '🥂', img: 'https://png.pngitem.com/pimgs/s/4-40594_white-wine-bottle-png-transparent-png.png' },
  { name: 'Pink wine',    emoji: '🌸', img: 'https://png.pngitem.com/pimgs/s/92-920467_rose-wine-bottle-png-transparent-png.png' },
  { name: 'Tequila',      emoji: '🌵', img: 'https://png.pngitem.com/pimgs/s/28-280300_tequila-bottle-png-transparent-png.png' },
  { name: 'Vodka',        emoji: '❄️', img: 'https://png.pngitem.com/pimgs/s/6-67861_vodka-bottle-png-transparent-png.png' },
  { name: 'Cider',        emoji: '🍺', img: 'https://png.pngitem.com/pimgs/s/87-879750_beer-bottle-png-transparent-png.png' },
  { name: 'Sweet Liquor', emoji: '🍯', img: 'https://png.pngitem.com/pimgs/s/35-354958_liquor-bottle-png-transparent-png.png' },
  { name: 'Whiskey',      emoji: '🥃', img: 'https://png.pngitem.com/pimgs/s/16-164397_whiskey-bottle-png-transparent-png.png' },
];

const PRODUCTS = [
  {
    id: 1, name: 'Merlot Reserve', category: 'Red Wine',
    price: 'R 14.00', badge: '10%', dist: '2.5km',
    outlet: 'SHARIN LIQUOR OUTLET',
    desc: 'Best quality wine available at your place.',
    vol: '750ml',
    img: 'https://www.pngarts.com/files/3/Wine-Bottle-PNG-Image-Background.png',
  },
  {
    id: 2, name: 'Cabernet Classic', category: 'Red Wine',
    price: 'R 14.00', badge: '10%', dist: '2.9km',
    outlet: 'SHARIN LIQUOR OUTLET',
    desc: 'Best quality wine available at your place.',
    vol: '750ml',
    img: 'https://www.pngarts.com/files/3/Wine-Bottle-Transparent-Images.png',
  },
  {
    id: 3, name: 'Shiraz Bold', category: 'Red Wine',
    price: 'R 14.00', badge: '10%', dist: '2.5km',
    outlet: 'SHARIN LIQUOR OUTLET',
    desc: 'Best quality wine available at your place.',
    vol: '750ml',
    img: 'https://www.pngarts.com/files/3/Wine-Bottle-PNG-Transparent-Image.png',
  },
  {
    id: 4, name: 'Chardonnay Gold', category: 'White wine',
    price: 'R 18.00', badge: '5%', dist: '1.8km',
    outlet: 'PRIME SPIRITS',
    desc: 'Crisp white wine with citrus notes.',
    vol: '750ml',
    img: 'https://www.pngarts.com/files/3/White-Wine-Bottle-PNG-Image.png',
  },
  {
    id: 5, name: 'Belvedere Vodka', category: 'Vodka',
    price: 'R 45.00', badge: '15%', dist: '3.1km',
    outlet: 'SHARIN LIQUOR OUTLET',
    desc: 'Premium Polish vodka, ultra smooth.',
    vol: '750ml',
    img: 'https://www.pngarts.com/files/3/Vodka-Bottle-PNG-Transparent-Image.png',
  },
  {
    id: 6, name: 'Patron Silver', category: 'Tequila',
    price: 'R 55.00', badge: '8%', dist: '2.2km',
    outlet: 'PRIME SPIRITS',
    desc: 'Smooth agave tequila for shots & cocktails.',
    vol: '750ml',
    img: 'https://www.pngarts.com/files/3/Tequila-Bottle-PNG-Transparent-Image.png',
  },
  {
    id: 7, name: 'Jameson Irish', category: 'Whiskey',
    price: 'R 38.00', badge: '12%', dist: '1.5km',
    outlet: 'SHARIN LIQUOR OUTLET',
    desc: 'Classic Irish whiskey, triple distilled.',
    vol: '750ml',
    img: 'https://www.pngarts.com/files/3/Whiskey-Bottle-PNG-Image.png',
  },
  {
    id: 8, name: 'Rosé Garden', category: 'Pink wine',
    price: 'R 16.00', badge: '20%', dist: '2.0km',
    outlet: 'WINE CELLAR CO.',
    desc: 'Light and fruity rosé, perfect for summer.',
    vol: '750ml',
    img: 'https://www.pngarts.com/files/3/Rose-Wine-PNG-Background.png',
  },
];

const OUTLETS = [
  {
    name: 'Sharin Liquor Outlet',
    meta: '2.5km • Open until 10 PM',
    img: 'https://images.unsplash.com/photo-1567529692333-de9fd6772897?w=600&q=80',
  },
  {
    name: 'Prime Spirits',
    meta: '3.1km • Open until 11 PM',
    img: 'https://images.unsplash.com/photo-1594727431869-83bde0ce9ad4?w=600&q=80',
  },
  {
    name: 'Wine Cellar Co.',
    meta: '1.8km • Open until 9 PM',
    img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
  },
];

const TRACKING_STEPS = [
  { label: 'Order Acceptance', status: 'done',    icon: '✅' },
  { label: 'Payment',          status: 'done',    icon: '💳' },
  { label: 'Order Confirmed',  status: 'done',    icon: '📋' },
  { label: 'Driver Assigned',  status: 'current', icon: '🏍️' },
  { label: 'Dispatched',       status: 'pending', icon: '📦' },
  { label: 'Delivered',        status: 'pending', icon: '🏠' },
];

/* ===== RENDER CATEGORIES =====
   HTML target: <div class="cat-grid" id="catGrid">
*/
function renderCategories() {
  const grid = document.getElementById('catGrid'); // fixed: was 'categoriesGrid'
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map((cat, i) => `
    <div class="cat-card${i === CATEGORIES.length - 1 ? ' has-arrow' : ''}"
         onclick="filterByCategory('${cat.name}')">
      <img src="${cat.img}" alt="${cat.name}" class="cat-img"
           onerror="this.style.display='none';this.nextElementSibling.style.display='block';" />
      <span style="display:none;font-size:32px">${cat.emoji}</span>
      <span class="cat-name">${cat.name}</span>
    </div>
  `).join('');
}

/* ===== RENDER PRODUCTS =====
   HTML target: <div class="prod-grid" id="prodGrid">
*/
function renderProducts(list) {
  const grid = document.getElementById('prodGrid'); // fixed: was 'productsGrid'
  if (!grid) return;
  if (!list || list.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-light);font-weight:700;">No products found 🍷</div>`;
    return;
  }
  grid.innerHTML = list.map(p => `
    <div class="product-card">
      ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" class="product-img"
             onerror="this.alt='🍷';" />
      </div>
      <div class="price-row">
        <span class="product-price">${p.price}</span>
        <span class="product-dist">📍 ${p.dist}</span>
      </div>
      <div class="product-outlet">${p.outlet}</div>
      <div class="product-desc">${p.desc}</div>
      <div class="product-vol">${p.vol}</div>
      <button class="add-btn" onclick="addToCart(${p.id}, event)">+</button>
    </div>
  `).join('');
}

/* ===== RENDER OUTLETS =====
   HTML target: <div class="outlet-scrl" id="outletRow">
*/
function renderOutlets() {
  const row = document.getElementById('outletRow'); // fixed: was 'outletsRow'
  if (!row) return;
  row.innerHTML = OUTLETS.map(o => `
    <div class="outlet-card">
      <img src="${o.img}" alt="${o.name}" class="outlet-img"
           onerror="this.style.background='#F0F0F0';" />
      <div class="outlet-info">
        <div class="outlet-name">${o.name}</div>
        <div class="outlet-meta">${o.meta}</div>
      </div>
    </div>
  `).join('');
}

/* ===== RENDER TRACKING =====
   HTML target: <div class="timeline" id="timeline">
*/
function renderTracking() {
  const tl = document.getElementById('timeline'); // fixed: was 'trackingTimeline'
  if (!tl) return;
  tl.innerHTML = TRACKING_STEPS.map((step, i) => {
    const isLast = i === TRACKING_STEPS.length - 1;
    return `
      <div class="tl-step">
        <div class="tl-left">
          <div class="tl-dot ${step.status === 'done' ? 'done' : step.status === 'current' ? 'current' : ''}"></div>
          ${!isLast ? `<div class="tl-line ${step.status === 'done' ? 'done' : ''}"></div>` : ''}
        </div>
        <span class="tl-label ${step.status}">${step.icon} ${step.label}</span>
      </div>
    `;
  }).join('');
}

/* ===== NAVIGATION =====
   HTML sidebar buttons: data-screen="home/products/tracking/account" + onclick="navTo(...)"
   HTML bottom nav buttons: onclick="navTo('home');bnavSet(this)"
*/
function navTo(name) {
  APP_STATE.currentScreen = name;
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  const target = document.getElementById('screen-' + name);
  if (target) target.classList.remove('hidden');

  // Sync sidebar active state
  document.querySelectorAll('.snav').forEach(n => {
    n.classList.toggle('active', n.dataset.screen === name);
  });

  if (name === 'products') {
    renderProducts(PRODUCTS);
    // HTML uses: id="prodTitle" inside products screen mob-hdr
    const title = document.getElementById('prodTitle');
    if (title) title.textContent = APP_STATE.activeCategory || 'All Products';
  }
  if (name === 'tracking') renderTracking();
  window.scrollTo(0, 0);
}

/* ===== BOTTOM NAV SET =====
   HTML uses: <button class="bnav-btn active">
*/
function bnavSet(btn) {
  document.querySelectorAll('.bnav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ===== CATEGORY FILTER ===== */
function filterByCategory(catName) {
  APP_STATE.activeCategory = catName;
  navTo('products');
  const filtered = PRODUCTS.filter(p => p.category === catName);
  renderProducts(filtered.length ? filtered : PRODUCTS);
  const title = document.getElementById('prodTitle');
  if (title) title.textContent = catName;
}

/* ===== SEARCH (HOME SCREEN) =====
   HTML uses: id="deskSearch" (desktop) and id="mobSearch" (mobile)
   Both call oninput="onSearch(this.value)"
   Desktop clear btn: id="deskClear" onclick="clearSearch()"
*/
function onSearch(val) {
  // Show/hide desktop clear button
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
    if (title) title.textContent = `Results for "${val}"`;
  } else {
    navTo('home');
  }
}

function clearSearch() {
  // fixed: was targeting id="searchInput" which doesn't exist; correct IDs are deskSearch / mobSearch
  const deskInp = document.getElementById('deskSearch');
  if (deskInp) deskInp.value = '';
  const mobInp = document.getElementById('mobSearch');
  if (mobInp) mobInp.value = '';
  const deskClear = document.getElementById('deskClear');
  if (deskClear) deskClear.style.display = 'none';
  navTo('home');
}

/* ===== PRODUCTS SCREEN SEARCH =====
   HTML uses: id="prodSearch" with oninput="filterProds(this.value)"
   (fixed: was filterProducts)
*/
function filterProds(val) { // fixed: was filterProducts(), HTML calls filterProds()
  const list = val
    ? PRODUCTS.filter(p => p.name.toLowerCase().includes(val.toLowerCase()))
    : PRODUCTS;
  renderProducts(list);
}

/* ===== DELIVERY TOGGLE =====
   HTML uses: <button class="tog on" id="togDel" onclick="setDel('delivery')">
              <button class="tog" id="togPick" onclick="setDel('pickup')">
   (fixed: was setToggle(), IDs were 'btnDelivery'/'btnPickup')
*/
function setDel(mode) { // fixed: was setToggle()
  APP_STATE.deliveryMode = mode;
  const del = document.getElementById('togDel');   // fixed: was 'btnDelivery'
  const pick = document.getElementById('togPick'); // fixed: was 'btnPickup'
  if (del)  del.classList.toggle('on', mode === 'delivery');
  if (pick) pick.classList.toggle('on', mode === 'pickup');
}

/* ===== RATING =====
   HTML uses: <button class="star" onclick="doRate(1..5)">
   (fixed: was setRating(), HTML calls doRate())
   CSS active class for stars is now 'lit' in CSS (was .active conflicting with nav)
*/
function doRate(val) { // fixed: was setRating(), HTML calls doRate()
  APP_STATE.rating = val;
  document.querySelectorAll('.star').forEach((s, i) => {
    s.classList.toggle('lit', i < val); // fixed: was '.active'
  });
  if (val > 0) {
    setTimeout(() => {
      const card = document.getElementById('rateCard'); // fixed: was 'ratingPopup'
      if (card) card.style.opacity = '0';
      showToast('Thanks for your rating! ⭐');
    }, 600);
  }
}

/* ===== CART ===== */
function addToCart(id, e) {
  e.stopPropagation();
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = APP_STATE.cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else APP_STATE.cart.push({ ...product, qty: 1 });
  showToast(`${product.name} added to cart 🛒`);
}

/* ===== TOAST =====
   HTML uses: <div class="toast" id="toast">
*/
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderOutlets();
  renderTracking();
  // Start on home screen
  navTo('home');
});