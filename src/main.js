import './style.css'

// Debugging
console.log('Sior App Starting...');
try {

  // Base URL for assets
  const BASE_URL = import.meta.env.BASE_URL;
  console.log('Base URL:', BASE_URL);

  function getAssetPath(path) {
    return path.startsWith('/') ? BASE_URL + path.slice(1) : BASE_URL + path;
  }

  document.querySelector('#app').innerHTML = `
  <!-- Top Bar -->
  <div class="top-bar">
    <div class="top-bar-content">
      <span class="top-bar-arrow">❮</span>
      <span>✨ Lifetime Stone Warranty ✨</span>
      <span class="top-bar-arrow">❯</span>
    </div>
  </div>

  <header>
    <div class="header-left">
      <div class="logo-container" id="header-logo" style="cursor: pointer;">
        <div class="sior-logo">
          <span class="logo-text">Sior</span>
          <span class="logo-subtitle">Elite Craftsmanship</span>
        </div>
      </div>
      <nav id="main-nav">
        <ul>
          <li><a href="#" data-view="home">Home</a></li>
          <li><a href="#" data-view="collection">Under 100 AED</a></li>
          <li><a href="#" data-view="Rings">Rings</a></li>
          <li><a href="#" data-view="Necklaces">Necklaces</a></li>
          <li><a href="#" data-view="Earrings">Earrings</a></li>
          <li><a href="#" data-view="Bracelets">Bracelets</a></li>
          <li><a href="#" data-view="contact">Contact</a></li>
        </ul>
      </nav>
    </div>

    <div class="header-right">
      <div class="search-container">
        <input type="text" id="inline-search" class="inline-search-input" placeholder="Search... ">
        <button id="search-btn" class="icon-btn" aria-label="Search">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
      </div>
      <div class="currency-selector" id="currency-selector">
        <span class="current-currency">USD</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg>
        <div class="currency-dropdown">
          <div class="currency-option" data-value="AED">AED</div>
          <div class="currency-option" data-value="USD">USD</div>
          <div class="currency-option" data-value="EUR">EUR</div>
        </div>
      </div>
      <button id="cart-btn" class="icon-btn" aria-label="Cart">
        <div class="cart-icon-wrapper">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          <span id="cart-count" class="cart-badge" style="display: none;">0</span>
        </div>
      </button>
      <button id="menu-toggle" class="icon-btn mobile-only" aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
  </header>

  <div class="discount-ribbon">
    <span>10% OFF!</span>
    <button class="ribbon-close">&times;</button>
  </div>

  <main id="main-content">
    <!-- Content dynamically injected here -->
  </main>

  <footer>
    <div class="footer-top">
      <div class="slogan">Stay in the Glow</div>
      <h2>Join the Insider List</h2>
      <p>Early launches, private flash deals & care tips — straight to your inbox.</p>
      <form class="insider-form">
        <input type="email" placeholder="E-mail" required>
        <button type="submit">SUBSCRIBE</button>
      </form>
    </div>
    <div class="footer-main">
      <div class="footer-col footer-promise">
        <h4>Our Promise</h4>
        <p>Bellorra creates lab-grown moissanite jewelry that rivals a diamond's fire, yet leaves the planet — and your wallet — at peace. Ethical. Attainable. Crafted to shine on you, always.</p>
        <a href="mailto:support@bellorra.com">support@bellorra.com</a>
      </div>
      <div class="footer-col">
        <h4>ABOUT</h4>
        <ul>
          <li><a href="#" id="contact-link-footer" data-view="contact">Contact Us</a></li>
          <li><a href="#" data-view="faq" class="view-link">FAQ</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>INFORMATION</h4>
        <ul>
          <li><a href="#" data-view="shipping" class="view-link">Shipping Info</a></li>
          <li><a href="#" data-view="terms" class="view-link">Terms of Use</a></li>
          <li><a href="#" data-view="privacy" class="view-link">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>JEWELRY</h4>
        <ul>
          <li><a href="#" data-view="Rings" class="view-link">Rings</a></li>
          <li><a href="#" data-view="Necklaces" class="view-link">Necklaces</a></li>
          <li><a href="#" data-view="Earrings" class="view-link">Earrings</a></li>
          <li><a href="#" data-view="Bracelets" class="view-link">Bracelets</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="payment-icons">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Maestro">
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" alt="Apple Pay">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Google_Pay_Logo.svg" alt="Google Pay">
      </div>
      <div class="copyright">
        &copy; ${new Date().getFullYear()} Sior Heritage Group. All Rights Reserved.
      </div>
    </div>
  </footer>

  <!-- Cart Modal -->
  <div id="cart-modal" class="modal-overlay">
    <div class="modal-content cart-modal-content">
      <div class="modal-header">
        <h2>Your Shopping Bag</h2>
        <span class="modal-close" data-target="cart-modal">&times;</span>
      </div>
      <div id="cart-items" class="cart-items-container">
        <!-- Cart Items Injected Here -->
        <div class="empty-cart-message">Your bag is empty.</div>
      </div>
      <div class="cart-footer">
        <div class="cart-total">
          <span>Total</span>
          <span id="cart-total-price">0 AED</span>
        </div>
        <button id="checkout-btn" class="btn-primary full-width">Proceed to Checkout</button>
      </div>
    </div>
  </div>

  <!-- Checkout Modal -->
  <div id="checkout-modal" class="modal-overlay">
    <div class="modal-content checkout-modal-content">
      <span class="modal-close" data-target="checkout-modal">&times;</span>
      <h2>Secure Checkout</h2>
      <form class="modal-form" id="checkout-form">
        <div class="form-group">
          <label>Contact Information</label>
          <input type="email" placeholder="Email Address" required>
        </div>
        <div class="form-group">
          <label>Shipping Address</label>
          <input type="text" placeholder="Full Name" required>
          <input type="text" placeholder="Address" required>
          <div class="form-row">
            <input type="text" placeholder="City" required>
            <input type="text" placeholder="Zip Code" required>
          </div>
        </div>
        <div class="form-group">
          <label>Payment Details</label>
          <div class="fake-card-input">
            <span class="icon">💳</span>
            <input type="text" placeholder="Card Number" required>
          </div>
          <div class="form-row">
            <input type="text" placeholder="MM/YY" required>
            <input type="text" placeholder="CVC" required>
          </div>
        </div>
        <button type="submit" class="btn-primary full-width">Pay Now <span id="checkout-btn-price"></span></button>
      </form>
    </div>
  </div>

  <!-- Appointment Modal -->
  <div id="appointment-modal" class="modal-overlay">
    <div class="modal-content">
      <span class="modal-close" data-target="appointment-modal">&times;</span>
      <h2>Boutique Appointment</h2>
      <p>Reserve your private viewing at our flagship boutique.</p>
      <form class="modal-form" id="appointment-form">
        <input type="text" placeholder="Full Name" required>
        <input type="email" placeholder="Email Address" required>
        <input type="tel" placeholder="Phone Number" required>
        <button type="submit">Request Appointment</button>
      </form>
    </div>
  </div>
`;

  // Product & Order Storage Management (localStorage)
  const defaultProducts = [
    { id: 1, name: 'Eternal Sparkle Ring', category: 'Rings', price: '18,500 AED', material: '18k White Gold | VVS Diamonds', image: getAssetPath('/ring.png'), style: '', stock: 12 },
    { id: 2, name: 'Golden Dawn Solitaire', category: 'Rings', price: '22,400 AED', material: 'Rose Gold | Rare Pink Diamond', image: getAssetPath('/ring.png'), style: '', stock: 8 },
    { id: 3, name: 'Midnight Noir Band', category: 'Rings', price: '9,800 AED', material: 'Black Gold | Polished Onyx', image: getAssetPath('/ring.png'), style: '', stock: 15 },
    { id: 4, name: 'Celestial Halo Emerald', category: 'Rings', price: '28,900 AED', material: 'Platinum | Colombian Emerald', image: getAssetPath('/ring.png'), style: '', stock: 5 },
    { id: 5, name: 'Elite Diamond Choker', category: 'Necklaces', price: '45,000 AED', material: 'Platinum | 5ct Round Diamonds', image: getAssetPath('/ring.png'), style: '', stock: 3 },
    { id: 6, name: 'Royal Sapphire Pendant', category: 'Necklaces', price: '32,000 AED', material: '18k White Gold | Ceylon Sapphire', image: getAssetPath('/ring.png'), style: '', stock: 7 },
    { id: 7, name: 'Masterpiece Chrono', category: 'Timepieces', price: '120,000 AED', material: 'Titanium | Diamond Bezel', image: getAssetPath('/ring.png'), style: '', stock: 2 },
  ];

  function getProducts() {
    const stored = localStorage.getItem('sior_products');
    if (stored) {
      try { return JSON.parse(stored); } catch (e) {}
    }
    localStorage.setItem('sior_products', JSON.stringify(defaultProducts));
    return defaultProducts;
  }

  function saveProducts(prods) {
    localStorage.setItem('sior_products', JSON.stringify(prods));
  }

  const defaultOrders = [
    { id: 'ORD-9021', customer: 'Sophia Laurent', items: 'Eternal Sparkle Ring (1)', total: '18,500 AED', status: 'Delivered', date: '2026-08-28' },
    { id: 'ORD-9022', customer: 'Alexander Wright', items: 'Masterpiece Chrono (1)', total: '120,000 AED', status: 'Processing', date: '2026-08-29' },
    { id: 'ORD-9023', customer: 'Elena Rostova', items: 'Elite Diamond Choker (1)', total: '45,000 AED', status: 'Shipped', date: '2026-08-29' }
  ];

  function getOrders() {
    const stored = localStorage.getItem('sior_orders');
    if (stored) {
      try { return JSON.parse(stored); } catch (e) {}
    }
    localStorage.setItem('sior_orders', JSON.stringify(defaultOrders));
    return defaultOrders;
  }

  function saveOrders(orders) {
    localStorage.setItem('sior_orders', JSON.stringify(orders));
  }

  function renderProducts(category = 'All', targetId = 'product-grid') {
    const grid = document.getElementById(targetId) || document.querySelector('.product-grid');
    if (!grid) return;
    const currentProds = getProducts();
    const filtered = category === 'All' ? currentProds : currentProds.filter(p => p.category === category);

    grid.innerHTML = filtered.map(p => `
    <div class="product-card reveal">
      <div class="product-image">
        <img src="${p.image}" alt="${p.name}" style="${p.style}">
        <button class="quick-add-btn" data-id="${p.id}">ADD TO BAG</button>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.material}</p>
        <div class="product-price">${p.price}</div>
      </div>
    </div>
  `).join('');

    initReveal();
    const countEl = document.getElementById('product-count');
    if (countEl) countEl.textContent = filtered.length;
  }

  window.navigateToView = navigateToView;
  window.navigateToCategory = (category) => {
    navigateToView(category);
  };
  window.switchCategoryTab = (category, btn) => {
    // Legacy stub
  };

  // Admin State & Functions
  let adminCurrentTab = 'dashboard';

  window.switchAdminTab = (tab) => {
    adminCurrentTab = tab;
    renderAdminPortal();
  };

  window.logoutAdmin = () => {
    sessionStorage.removeItem('sior_admin_logged_in');
    renderAdminPortal();
  };

  window.openAddProductModal = (id = null) => {
    let modal = document.getElementById('product-modal');
    if (!modal) {
      renderAdminPortal();
      modal = document.getElementById('product-modal');
    }
    const title = document.getElementById('product-modal-title');
    const form = document.getElementById('product-form');

    form.reset();
    document.getElementById('prod-id-edit').value = '';

    if (id) {
      title.textContent = 'Edit Product';
      const prods = getProducts();
      const p = prods.find(item => item.id == id);
      if (p) {
        document.getElementById('prod-id-edit').value = p.id;
        document.getElementById('prod-name').value = p.name;
        document.getElementById('prod-category').value = p.category;
        document.getElementById('prod-price').value = p.price;
        document.getElementById('prod-material').value = p.material;
        document.getElementById('prod-image-url').value = p.image;
      }
    } else {
      title.textContent = 'Add New Product';
    }

    modal.classList.add('active');
  };

  window.closeProductModal = () => {
    const modal = document.getElementById('product-modal');
    if (modal) modal.classList.remove('active');
  };

  window.deleteProduct = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      let prods = getProducts();
      prods = prods.filter(p => p.id != id);
      saveProducts(prods);
      renderAdminPortal();
    }
  };

  window.updateOrderStatus = (orderId, newStatus) => {
    let orders = getOrders();
    const o = orders.find(item => item.id === orderId);
    if (o) {
      o.status = newStatus;
      saveOrders(orders);
      renderAdminPortal();
    }
  };

  function renderAdminPortal() {
    const mainContent = document.getElementById('main-content');
    const isLoggedIn = sessionStorage.getItem('sior_admin_logged_in') === 'true';

    if (!isLoggedIn) {
      mainContent.innerHTML = `
      <section class="admin-page" style="display: flex; align-items: center; justify-content: center; min-height: 80vh;">
        <div style="background: white; padding: 40px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.08); width: 100%; max-width: 420px; text-align: center;">
          <div style="width: 50px; height: 50px; background: #008060; color: white; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px; font-weight: bold; margin: 0 auto 20px;">🛍️</div>
          <h2 style="font-size: 22px; margin-bottom: 8px; color: #1a1c1d;">Shopify Admin Portal</h2>
          <p style="color: #6d7175; font-size: 14px; margin-bottom: 30px;">Sign in to manage Sior products, orders & analytics</p>
          
          <form id="admin-login-form" style="display: flex; flex-direction: column; gap: 16px; text-align: left;">
            <div>
              <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px; color: #202223;">ADMIN USERNAME</label>
              <input type="text" value="admin" style="width: 100%; padding: 12px; border: 1px solid #c9cccf; border-radius: 6px; font-size: 14px; box-sizing: border-box;" required>
            </div>
            <div>
              <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 6px; color: #202223;">PASSWORD</label>
              <input type="password" value="admin123" style="width: 100%; padding: 12px; border: 1px solid #c9cccf; border-radius: 6px; font-size: 14px; box-sizing: border-box;" required>
            </div>
            <button type="submit" class="btn-shopify" style="width: 100%; justify-content: center; padding: 14px; font-size: 14px; margin-top: 10px;">Log In to Admin</button>
            <button type="button" id="quick-demo-btn" class="btn-shopify-secondary" style="width: 100%; justify-content: center; padding: 12px; font-size: 13px;">⚡ One-Click Demo Access</button>
          </form>
        </div>
      </section>
      `;

      document.getElementById('admin-login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        sessionStorage.setItem('sior_admin_logged_in', 'true');
        renderAdminPortal();
      });

      document.getElementById('quick-demo-btn').addEventListener('click', () => {
        sessionStorage.setItem('sior_admin_logged_in', 'true');
        renderAdminPortal();
      });
      return;
    }

    const prods = getProducts();
    const orders = getOrders();
    const totalSalesNum = orders.reduce((sum, o) => {
      const val = parseInt(o.total.replace(/[^0-9]/g, '')) || 0;
      return sum + val;
    }, 0);

    mainContent.innerHTML = `
    <section class="admin-page">
      <div class="admin-layout">
        <!-- Sidebar -->
        <aside class="admin-sidebar">
          <div class="admin-brand">
            <div class="admin-brand-logo">🛍️</div>
            <div>
              <div class="admin-brand-title">Sior Admin</div>
              <small style="color: #6d7175; font-size: 11px;">Shopify Enterprise</small>
            </div>
          </div>
          <ul class="admin-menu">
            <li class="admin-menu-item"><button class="${adminCurrentTab === 'dashboard' ? 'active' : ''}" onclick="switchAdminTab('dashboard')">📊 Dashboard</button></li>
            <li class="admin-menu-item"><button class="${adminCurrentTab === 'products' ? 'active' : ''}" onclick="switchAdminTab('products')">🛍️ Products (${prods.length})</button></li>
            <li class="admin-menu-item"><button class="${adminCurrentTab === 'orders' ? 'active' : ''}" onclick="switchAdminTab('orders')">📦 Orders (${orders.length})</button></li>
            <li class="admin-menu-item"><button class="${adminCurrentTab === 'customers' ? 'active' : ''}" onclick="switchAdminTab('customers')">👥 Customers</button></li>
            <li class="admin-menu-item"><button class="${adminCurrentTab === 'settings' ? 'active' : ''}" onclick="switchAdminTab('settings')">⚙️ Settings</button></li>
          </ul>
        </aside>

        <!-- Main Body -->
        <main class="admin-main">
          <div class="admin-header-bar">
            <h2>${adminCurrentTab.toUpperCase()} OVERVIEW</h2>
            <div class="admin-actions">
              ${adminCurrentTab === 'products' ? '<button class="btn-shopify" onclick="openAddProductModal()">+ Add Product</button>' : ''}
              <button class="btn-shopify-secondary" onclick="navigateToView('home')">🌐 View Storefront</button>
              <button class="btn-shopify-secondary" onclick="logoutAdmin()">Logout</button>
            </div>
          </div>

          <div id="admin-tab-content">
            <!-- Tab specific body -->
          </div>
        </main>
      </div>
    </section>

    <!-- Product Modal -->
    <div id="product-modal" class="modal-overlay">
      <div class="modal-content admin-modal-content">
        <div class="modal-header" style="padding-bottom: 15px; border-bottom: 1px solid #eee;">
          <h3 id="product-modal-title" style="margin:0; font-size: 18px;">Add New Product</h3>
          <span class="modal-close" onclick="closeProductModal()">&times;</span>
        </div>
        <form id="product-form" style="padding-top: 20px;">
          <input type="hidden" id="prod-id-edit">
          <div class="admin-form-group">
            <label>Product Name</label>
            <input type="text" id="prod-name" placeholder="e.g. Royal Diamond Solitaire" required>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div class="admin-form-group">
              <label>Category</label>
              <select id="prod-category" required>
                <option value="Rings">Rings</option>
                <option value="Necklaces">Necklaces</option>
                <option value="Earrings">Earrings</option>
                <option value="Bracelets">Bracelets</option>
                <option value="Timepieces">Timepieces</option>
              </select>
            </div>
            <div class="admin-form-group">
              <label>Price (AED)</label>
              <input type="text" id="prod-price" placeholder="e.g. 19,500 AED" required>
            </div>
          </div>
          <div class="admin-form-group">
            <label>Material & Gemstone Info</label>
            <input type="text" id="prod-material" placeholder="e.g. 18k White Gold | VVS Moissanite" required>
          </div>
          <div class="admin-form-group">
            <label>Image Upload or Image URL</label>
            <input type="file" id="prod-file-upload" accept="image/*" style="margin-bottom: 8px;">
            <input type="text" id="prod-image-url" placeholder="OR enter image URL e.g. /ring.png">
          </div>
          <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 20px;">
            <button type="button" class="btn-shopify-secondary" onclick="closeProductModal()">Cancel</button>
            <button type="submit" class="btn-shopify">Save Product</button>
          </div>
        </form>
      </div>
    </div>
    `;

    // Render inner content tab
    const tabContainer = document.getElementById('admin-tab-content');
    if (!tabContainer) return;

    if (adminCurrentTab === 'dashboard') {
      tabContainer.innerHTML = `
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-card-title">Total Revenue</div>
          <div class="stat-card-value">${totalSalesNum.toLocaleString()} AED</div>
          <div class="stat-card-badge">▲ +14.2% from last month</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-title">Total Orders</div>
          <div class="stat-card-value">${orders.length}</div>
          <div class="stat-card-badge">▲ +8.0% conversion</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-title">Live Store Visitors</div>
          <div class="stat-card-value" id="live-visitors-val">18</div>
          <div class="stat-card-badge live-pulse">Active Online Right Now</div>
        </div>
        <div class="stat-card">
          <div class="stat-card-title">Total Products in Store</div>
          <div class="stat-card-value">${prods.length}</div>
          <div class="stat-card-badge">● Active Inventory</div>
        </div>
      </div>

      <div class="admin-card" style="margin-top: 24px;">
        <div class="admin-card-header">
          <h3>Recent Orders</h3>
        </div>
        <table class="shopify-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items Purchased</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            ${orders.map(o => `
              <tr>
                <td><strong>${o.id}</strong></td>
                <td>${o.customer}</td>
                <td>${o.items}</td>
                <td>${o.total}</td>
                <td><span class="status-badge ${o.status.toLowerCase()}">${o.status}</span></td>
                <td>${o.date}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      `;

      // Live visitor ticker simulation
      const interval = setInterval(() => {
        const el = document.getElementById('live-visitors-val');
        if (el) {
          el.textContent = Math.floor(14 + Math.random() * 9);
        } else {
          clearInterval(interval);
        }
      }, 3000);

    } else if (adminCurrentTab === 'products') {
      tabContainer.innerHTML = `
      <div class="admin-card">
        <div class="admin-card-header">
          <h3>All Products Inventory (${prods.length})</h3>
          <button class="btn-shopify" onclick="openAddProductModal()">+ Add Product</button>
        </div>
        <table class="shopify-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Material</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${prods.map(p => `
              <tr>
                <td><img src="${p.image}" alt="${p.name}" class="table-product-img"></td>
                <td><strong>${p.name}</strong></td>
                <td><span class="status-badge shipped">${p.category}</span></td>
                <td>${p.material}</td>
                <td><strong>${p.price}</strong></td>
                <td>${p.stock || 10} in stock</td>
                <td>
                  <button class="btn-shopify-secondary" style="padding: 4px 10px; font-size: 12px;" onclick="openAddProductModal(${p.id})">Edit</button>
                  <button class="btn-shopify-danger" onclick="deleteProduct(${p.id})">Delete</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      `;
    } else if (adminCurrentTab === 'orders') {
      tabContainer.innerHTML = `
      <div class="admin-card">
        <div class="admin-card-header">
          <h3>Customer Orders (${orders.length})</h3>
        </div>
        <table class="shopify-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Items Purchased</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>
            ${orders.map(o => `
              <tr>
                <td><strong>${o.id}</strong></td>
                <td>${o.customer}</td>
                <td>${o.items}</td>
                <td><strong>${o.total}</strong></td>
                <td><span class="status-badge ${o.status.toLowerCase()}">${o.status}</span></td>
                <td>
                  <select style="padding: 6px 10px; border-radius: 4px; border: 1px solid #ccc;" onchange="updateOrderStatus('${o.id}', this.value)">
                    <option value="Pending" ${o.status === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option value="Processing" ${o.status === 'Processing' ? 'selected' : ''}>Processing</option>
                    <option value="Shipped" ${o.status === 'Shipped' ? 'selected' : ''}>Shipped</option>
                    <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                  </select>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      `;
    } else if (adminCurrentTab === 'customers') {
      tabContainer.innerHTML = `
      <div class="admin-card">
        <div class="admin-card-header">
          <h3>Customer Directory & Insider List</h3>
        </div>
        <table class="shopify-table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Email Address</th>
              <th>Orders Count</th>
              <th>Total Spent</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Sophia Laurent</strong></td>
              <td>sophia.laurent@paris.fr</td>
              <td>2 Orders</td>
              <td>36,900 AED</td>
              <td><span class="status-badge delivered">VIP Member</span></td>
            </tr>
            <tr>
              <td><strong>Alexander Wright</strong></td>
              <td>a.wright@lux.co.uk</td>
              <td>1 Order</td>
              <td>120,000 AED</td>
              <td><span class="status-badge delivered">VIP Member</span></td>
            </tr>
            <tr>
              <td><strong>Elena Rostova</strong></td>
              <td>elena.r@monaco.mc</td>
              <td>1 Order</td>
              <td>45,000 AED</td>
              <td><span class="status-badge delivered">Subscriber</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      `;
    } else if (adminCurrentTab === 'settings') {
      tabContainer.innerHTML = `
      <div class="admin-card">
        <div class="admin-card-header">
          <h3>Store & Shopify Settings</h3>
        </div>
        <form style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;" onsubmit="event.preventDefault(); alert('Settings saved successfully!');">
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px;">STORE NAME</label>
            <input type="text" value="Sior Luxury Jewelry" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px;">
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px;">PRIMARY CURRENCY</label>
            <select style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px;">
              <option value="AED">AED - United Arab Emirates Dirham</option>
              <option value="USD">USD - United States Dollar</option>
              <option value="EUR">EUR - Euro</option>
            </select>
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px;">TOP ANNOUNCEMENT BAR TEXT</label>
            <input type="text" value="✨ Lifetime Stone Warranty ✨" style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 6px;">
          </div>
          <button type="submit" class="btn-shopify" style="width: fit-content;">Save Settings</button>
        </form>
      </div>
      `;
    }

    // Modal Form Handler for Adding/Editing Product
    const form = document.getElementById('product-form');
    if (form && !form.dataset.bound) {
      form.dataset.bound = 'true';
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const editId = document.getElementById('prod-id-edit').value;
        const name = document.getElementById('prod-name').value;
        const category = document.getElementById('prod-category').value;
        let price = document.getElementById('prod-price').value;
        if (!price.includes('AED') && !price.includes('$') && !price.includes('€')) {
          price += ' AED';
        }
        const material = document.getElementById('prod-material').value;
        const urlInput = document.getElementById('prod-image-url').value;
        const fileInput = document.getElementById('prod-file-upload');

        const saveHandler = (imgSrc) => {
          let prods = getProducts();
          if (editId) {
            const index = prods.findIndex(p => p.id == editId);
            if (index !== -1) {
              prods[index] = {
                ...prods[index],
                name,
                category,
                price,
                material,
                image: imgSrc || prods[index].image
              };
            }
          } else {
            const newId = prods.length ? Math.max(...prods.map(p => p.id)) + 1 : 1;
            prods.unshift({
              id: newId,
              name,
              category,
              price,
              material,
              image: imgSrc || getAssetPath('/ring.png'),
              style: '',
              stock: 10
            });
          }
          saveProducts(prods);
          closeProductModal();
          renderAdminPortal();
        };

        if (fileInput && fileInput.files && fileInput.files[0]) {
          const reader = new FileReader();
          reader.onload = function (evt) {
            saveHandler(evt.target.result);
          };
          reader.readAsDataURL(fileInput.files[0]);
        } else {
          saveHandler(urlInput);
        }
      });
    }
  }

  // Navigation logic & URL Route Detection for secret /admin access
  function checkURLRoute() {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    const search = window.location.search.toLowerCase();

    if (path.endsWith('/admin') || path.endsWith('/admin/') || hash === '#admin' || hash === '#/admin' || search.includes('admin')) {
      navigateToView('admin');
    }
  }

  function navigateToView(viewId) {
    const mainContent = document.getElementById('main-content');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (viewId === 'admin') {
      if (window.location.hash !== '#admin') {
        history.replaceState(null, '', '#admin');
      }
    } else {
      if (window.location.hash === '#admin') {
        history.replaceState(null, '', window.location.pathname);
      }
    }

    if (viewId === 'home') {
      mainContent.innerHTML = `
      <section class="hero" id="home">
        <div class="hero-bg"></div>
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-sior-logo">Sior</div>
          <p>The Epitome of Modern Prestige & Timeless Elegance</p>
        </div>
      </section>

      <section class="message-section">
        <h2>A Legacy of Fine Craftsmanship</h2>
        <p>Elevating the art of jewelry for generations. Defined by perfection, worn by legends.</p>
        <div style="margin-top: 30px;">
           <button class="btn-outline" style="border-color: #FDE8C4; color: #FDE8C4;" onclick="navigateToView('collection')">FIND YOUR PERFECT FIT</button>
        </div>
      </section>

      <section class="visual-categories">
        <div class="visual-category-card" onclick="navigateToView('Rings')">
          <img src="${getAssetPath('/rings-category.jpg')}" alt="Rings">
          <div class="category-overlay">
            <h3>Rings</h3>
          </div>
        </div>
        <div class="visual-category-card" onclick="navigateToView('Necklaces')">
          <img src="${getAssetPath('/necklaces-category.jpg')}" alt="Necklaces">
          <div class="category-overlay">
            <h3>Necklaces</h3>
          </div>
        </div>
        <div class="visual-category-card" onclick="navigateToView('Earrings')">
          <img src="${getAssetPath('/earrings-category.jpg')}" alt="Earrings">
          <div class="category-overlay">
            <h3>Earrings</h3>
          </div>
        </div>
        <div class="visual-category-card" onclick="navigateToView('Bracelets')">
          <img src="${getAssetPath('/bracelets-category.jpg')}" alt="Bracelets">
          <div class="category-overlay">
            <h3>Bracelets</h3>
          </div>
        </div>
      </section>

      <section class="sior-promise">
        <div class="promise-header">
           <div class="uncover-badge">UNCOVER THE BRILLIANCE</div>
           <h2>The Sior Promise</h2>
        </div>
        <div class="promise-grid">
          <div class="promise-item">
            <div class="promise-icon">↺</div>
            <h3>30-Day Easy Returns</h3>
          </div>
          <div class="promise-item">
            <div class="promise-icon">✈</div>
            <h3>Free Insured Express Shipping</h3>
          </div>
          <div class="promise-item">
            <div class="promise-icon">▤</div>
            <h3>GIA Authenticity Card</h3>
          </div>
          <div class="promise-item">
            <div class="promise-icon">💎</div>
            <h3>Lifetime Stone Warranty</h3>
          </div>
        </div>
        <div class="promise-banner">
          <p>Build the jewellery wardrobe you've always wanted: lab-grown brilliance that's kind to your budget and kinder to the Earth, so you can indulge in more than one piece—guilt-free.</p>
        </div>
      </section>
    `;
      initReveal();
    } else if (viewId === 'contact') {
      mainContent.innerHTML = `
      <section class="contact-page">
        <div class="contact-header">
          <h1>Connect with Our Concierge</h1>
          <p>Our private advisors are available for bespoke creations, ring sizing, and personal style consultations.</p>
        </div>
        
        <div class="contact-container">
          <div class="contact-info-panel">
            <div>
              <h3>Private Atelier</h3>
              
              <div class="contact-detail-item">
                <div class="contact-detail-icon">📍</div>
                <div class="contact-detail-text">
                  <h4>Flagship Boutique</h4>
                  <p>Level 44, Sior Vault Tower<br>Financial Center, Downtown Dubai, UAE</p>
                </div>
              </div>

              <div class="contact-detail-item">
                <div class="contact-detail-icon">📞</div>
                <div class="contact-detail-text">
                  <h4>Private Concierge Line</h4>
                  <p>+971 4 800 SIOR (7467)<br>Mon - Sat: 10:00 AM - 10:00 PM GST</p>
                </div>
              </div>

              <div class="contact-detail-item">
                <div class="contact-detail-icon">✉️</div>
                <div class="contact-detail-text">
                  <h4>Electronic Enquiries</h4>
                  <p>concierge@sior-jewels.com<br>vip@sior-jewels.com</p>
                </div>
              </div>
            </div>

            <div style="background: rgba(197, 160, 89, 0.08); padding: 15px; border-radius: 6px; text-align: center;">
              <small style="color: var(--primary-navy); letter-spacing: 0.1em; font-weight: 600; text-transform: uppercase;">✨ Appointments By Invitation & Request</small>
            </div>
          </div>

          <div class="contact-form-container">
            <form id="contact-form-main" class="luxury-form">
              <div class="form-row">
                <div>
                  <label>First Name</label>
                  <input type="text" placeholder="e.g. Elizabeth" required>
                </div>
                <div>
                  <label>Last Name</label>
                  <input type="text" placeholder="e.g. Vance" required>
                </div>
              </div>
              <div>
                <label>Email Address</label>
                <input type="email" placeholder="elizabeth@domain.com" required>
              </div>
              <div>
                <label>Subject of Inquiry</label>
                <select required>
                  <option value="">Select Topic...</option>
                  <option value="bespoke">Bespoke Custom Design</option>
                  <option value="appointment">Private Atelier Appointment</option>
                  <option value="sizing">Ring Sizing & Stone Advice</option>
                  <option value="order">Existing Order Status</option>
                </select>
              </div>
              <div>
                <label>Message</label>
                <textarea placeholder="Describe your request or stone preference in detail..." rows="4" required></textarea>
              </div>
              <button type="submit">SUBMIT INQUIRY</button>
            </form>
          </div>
        </div>
      </section>
    `;
      document.getElementById('contact-form-main').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('✨ Thank you. A Sior Senior Concierge advisor will review your request and reply within 4 business hours.');
        e.target.reset();
      });
    } else if (viewId === 'admin') {
      renderAdminPortal();
    } else if (viewId === 'faq') {
      mainContent.innerHTML = `
      <section class="info-page">
        <div class="category-header">
          <h1>Frequently Asked Questions</h1>
          <div class="category-divider"></div>
        </div>
        <div class="info-content">
          <h3>Are Sior stones real diamonds or moissanites?</h3>
          <p>Sior specializes in premium lab-grown moissanite and ethical lab diamonds engineered to match and exceed natural diamond brilliance.</p>
          
          <h3>What warranty do you provide?</h3>
          <p>Every Sior piece comes with a Lifetime Stone Warranty and a GIA/IGI Authenticity Card guaranteeing color, clarity, and precision cut.</p>
          
          <h3>How long does international shipping take?</h3>
          <p>We provide Free Express Insured Shipping worldwide via DHL/FedEx. Delivery typically takes 3–5 business days.</p>
          
          <h3>What is your return policy?</h3>
          <p>We offer a hassle-free 30-day return & exchange window for all unworn creations in original packaging.</p>
        </div>
      </section>
      `;
    } else if (viewId === 'shipping') {
      mainContent.innerHTML = `
      <section class="info-page">
        <div class="category-header">
          <h1>Shipping & Delivery</h1>
          <div class="category-divider"></div>
        </div>
        <div class="info-content">
          <h3>Worldwide Insured Express Delivery</h3>
          <p>All Sior orders are packaged in discrete, tamper-proof luxury cases and shipped with full insurance coverage.</p>
          <ul>
            <li><strong>GCC Countries:</strong> 1 - 2 Business Days (Complimentary)</li>
            <li><strong>US & Europe:</strong> 3 - 5 Business Days (Complimentary)</li>
            <li><strong>Rest of World:</strong> 4 - 7 Business Days</li>
          </ul>
        </div>
      </section>
      `;
    } else if (viewId === 'terms') {
      mainContent.innerHTML = `
      <section class="info-page">
        <div class="category-header">
          <h1>Terms of Service</h1>
          <div class="category-divider"></div>
        </div>
        <div class="info-content">
          <p>Welcome to Sior. By accessing or purchasing from our platform, you agree to our terms of fine jewelry sales, warranty coverage, and ethical sourcing standards.</p>
          <p>All prices are displayed transparently in your selected currency. Custom boutique orders are final upon client sign-off.</p>
        </div>
      </section>
      `;
    } else if (viewId === 'privacy') {
      mainContent.innerHTML = `
      <section class="info-page">
        <div class="category-header">
          <h1>Privacy Policy</h1>
          <div class="category-divider"></div>
        </div>
        <div class="info-content">
          <p>Your privacy is paramount. Sior employs end-to-end 256-bit SSL encryption to safeguard your personal details and payment transactions.</p>
          <p>We never share or sell client data to third parties.</p>
        </div>
      </section>
      `;
    } else {
      // Category Pages
      const displayCategory = viewId === 'collection' ? 'Elite Collection' : viewId;
      mainContent.innerHTML = `
      <section class="category-page">
        <div class="category-header">
          <h1 class="fade-in">${displayCategory}</h1>
          <div class="category-divider"></div>
        </div>
        <div class="category-filters">
           <div class="filter-count"><span id="product-count">0</span> Creations</div>
           <div class="filter-controls">
             <button class="filter-toggle">Sort By <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg></button>
           </div>
        </div>
        <div class="product-grid" id="category-grid">
          <!-- Products will be rendered here -->
        </div>
      </section>
    `;
      const filterCat = viewId === 'collection' ? 'All' : viewId;
      renderProducts(filterCat, 'category-grid');
    }
  }

  // Initial Render & URL Route Check
  navigateToView('home');
  window.addEventListener('hashchange', checkURLRoute);
  window.addEventListener('popstate', checkURLRoute);
  checkURLRoute();

  // Interactivity logic - Event Delegation for view navigation
  document.addEventListener('click', (e) => {
    const viewLink = e.target.closest('[data-view]');
    if (viewLink) {
      e.preventDefault();
      const viewId = viewLink.getAttribute('data-view');
      navigateToView(viewId);

      document.querySelectorAll('#main-nav a').forEach(a => a.classList.remove('active'));
      const mainNavMatch = document.querySelector(`#main-nav a[data-view="${viewId}"]`);
      if (mainNavMatch) {
        mainNavMatch.classList.add('active');
      }
    }
  });

  // Footer Contact Link
  document.addEventListener('click', (e) => {
    const logo = e.target.closest('#header-logo');
    if (logo) {
      e.preventDefault();
      navigateToView('home');
      return;
    }

    if (e.target.id === 'contact-link-footer') {
      e.preventDefault();
      navigateToView('contact');
    }
  });

  // Modal Logic
  const modal = document.getElementById('appointment-modal');
  const closeBtn = document.querySelector('.modal-close');
  const appointmentBtns = ['appointment-btn', 'subscribe-btn'];

  appointmentBtns.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
      });
    }
  });

  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  window.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

  document.getElementById('appointment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you. A Sior concierge will contact you within 24 hours.');
    modal.classList.remove('active');
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      const isOpened = mainNav.classList.contains('active');
      menuToggle.innerHTML = isOpened
        ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
        : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    });

    // Close menu when clicking links
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
      });
    });
  }

  // Discount Ribbon Close
  const ribbonClose = document.querySelector('.ribbon-close');
  if (ribbonClose) {
    ribbonClose.addEventListener('click', () => {
      document.querySelector('.discount-ribbon').style.display = 'none';
    });
  }

  // Cart State
  let cart = [];

  function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('cart-total-price');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<div class="empty-cart-message">Your bag is empty.</div>';
      totalPriceDisplay.textContent = '0 AED';
      return;
    }

    cartItemsContainer.innerHTML = cart.map(item => {
      const p = products.find(prod => prod.id === item.id);
      return `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}">
        <div class="cart-item-details">
          <h4>${p.name}</h4>
          <span class="cart-item-price">${p.price}</span>
          <div class="cart-controls">
            <div class="quantity-control">
              <button class="quantity-btn" onclick="updateQty(${item.id}, -1)">-</button>
              <span class="quantity-display">${item.quantity}</span>
              <button class="quantity-btn" onclick="updateQty(${item.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        </div>
      </div>
    `;
    }).join('');

    const total = cart.reduce((sum, item) => {
      const p = products.find(prod => prod.id === item.id);
      const priceNum = parseInt(p.price.replace(/[^0-9]/g, ''));
      return sum + (priceNum * item.quantity);
    }, 0);

    totalPriceDisplay.textContent = `${total.toLocaleString()} AED`;
  }

  window.updateQty = (id, delta) => {
    const item = cart.find(i => i.id === id);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== id);
      }
      updateCartUI();
    }
  };

  window.removeFromCart = (id) => {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
  };

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('quick-add-btn')) {
      const id = parseInt(e.target.dataset.id);
      const product = products.find(p => p.id === id);
      if (product) {
        showProductDetail(product);
      }
    }
  });

  // Cart and Checkout Modal Logic
  const cartModal = document.getElementById('cart-modal');
  const cartBtn = document.getElementById('cart-btn');
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutBtn = document.getElementById('checkout-btn');

  if (cartBtn) cartBtn.addEventListener('click', () => cartModal.classList.add('active'));
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      cartModal.classList.remove('active');
      checkoutModal.classList.add('active');
    });
  }

  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      document.getElementById(target).classList.remove('active');
    });
  });

  // Category Filtering
  const categoryMap = {
    'All Creations': 'All',
    'Boutique Rings': 'Rings',
    'Elite Necklaces': 'Necklaces',
    'Diamond Timepieces': 'Timepieces',
    'Masterpiece Sets': 'Sets'
  };

  document.querySelectorAll('.category-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.category-nav a').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      renderProducts(categoryMap[link.innerText] || 'All');
    });
  });

  // Initial Render removed from here as it's now inside navigateToView call chain

  // Reveal on Scroll
  function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
  }

  // Parallax Effect
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxImgs = document.querySelectorAll('.parallax-img');
    parallaxImgs.forEach(img => {
      const speed = 0.4;
      img.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  initReveal();

  // Header scroll behavior
  let lastScrollY = window.scrollY;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }

    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      // Scrolling down
      header.classList.add('header-hidden');
    } else {
      // Scrolling up or at top
      header.classList.remove('header-hidden');
    }

    lastScrollY = currentScrollY;
  });

  // Currency Selector Logic
  const currencySelector = document.getElementById('currency-selector');
  const currentCurrencySpan = currencySelector.querySelector('.current-currency');

  currencySelector.addEventListener('click', (e) => {
    currencySelector.classList.toggle('active');

    if (e.target.classList.contains('currency-option')) {
      const newVal = e.target.dataset.value;
      currentCurrencySpan.textContent = newVal;
      currencySelector.classList.remove('active');
      // Here you could update prices based on exchange rates
    }
  });

  document.addEventListener('click', (e) => {
    if (!currencySelector.contains(e.target)) {
      currencySelector.classList.remove('active');
    }
  });

  // Search functionality
  const searchBtn = document.getElementById('search-btn');
  const inlineSearch = document.getElementById('inline-search');

  searchBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    inlineSearch.classList.toggle('active');
    if (inlineSearch.classList.contains('active')) {
      inlineSearch.focus();
    }
  });

  inlineSearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const query = inlineSearch.value;
      if (query) {
        alert(`Searching for: ${query}`);
        inlineSearch.classList.remove('active');
        inlineSearch.value = '';
      }
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      inlineSearch.classList.remove('active');
    }
  });

  // Product detail selection UI logic
  // We will replace the quick-add behavior with a detail modal
  document.addEventListener('click', (e) => {
    const productCard = e.target.closest('.product-card');
    if (productCard && !e.target.classList.contains('quick-add-btn')) {
      const productId = productCard.querySelector('.quick-add-btn').dataset.id;
      const product = products.find(p => p.id == productId);
      showProductDetail(product);
    }
  });

  function showProductDetail(product) {
    // Create a detail modal on the fly or reuse one
    let detailModal = document.getElementById('product-detail-modal');
    if (!detailModal) {
      detailModal = document.createElement('div');
      detailModal.id = 'product-detail-modal';
      detailModal.className = 'modal-overlay';
      document.body.appendChild(detailModal);
    }

    detailModal.innerHTML = `
    <div class="modal-content product-detail-content">
      <span class="modal-close" onclick="document.getElementById('product-detail-modal').classList.remove('active')">&times;</span>
      <div class="detail-grid">
        <div class="detail-image">
          <img src="${product.image}" alt="${product.name}" style="${product.style}">
        </div>
        <div class="detail-info">
          <h2>${product.name}</h2>
          <div class="detail-price">${product.price}</div>
          <p class="detail-description">${product.material}. A masterpiece of elite craftsmanship, designed for those who define excellence.</p>
          
          <div class="selection-group">
            <label>Ring Size</label>
            <div class="size-options">
              ${[5, 5.5, 6, 6.5, 7, 7.5, 8].map(s => `<button class="option-btn">${s}</button>`).join('')}
            </div>
          </div>

          <div class="selection-group">
            <label>Material</label>
            <div class="material-options">
              <button class="option-btn active">18K White Gold</button>
              <button class="option-btn">Platinum</button>
              <button class="option-btn">Rose Gold</button>
            </div>
          </div>

          <div class="detail-actions">
            <button class="btn-primary" onclick="addToBagFromDetail(${product.id})">ADD TO BAG</button>
            <button class="btn-primary buy-now" onclick="buyItNow(${product.id})">BUY IT NOW</button>
          </div>
        </div>
      </div>
    </div>
  `;

    detailModal.classList.add('active');

    // Add option button logic
    detailModal.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        this.parentElement.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }

  window.addToBagFromDetail = (id) => {
    const existing = cart.find(i => i.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id, quantity: 1 });
    }
    updateCartUI();
    document.getElementById('product-detail-modal').classList.remove('active');
    document.getElementById('cart-modal').classList.add('active');
  };

  window.buyItNow = (id) => {
    addToBagFromDetail(id);
    document.getElementById('cart-modal').classList.remove('active');
    document.getElementById('checkout-modal').classList.add('active');
  };

  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = checkoutForm.querySelectorAll('input');
      const email = inputs[0]?.value || 'client@sior.com';
      const name = inputs[1]?.value || 'Valued Client';
      const orderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;

      const currentProds = getProducts();
      const itemsSummary = cart.map(i => {
        const p = currentProds.find(item => item.id === i.id);
        return p ? `${p.name} (${i.quantity})` : `Item #${i.id}`;
      }).join(', ') || 'Custom Jewelry';

      const totalFormatted = document.getElementById('cart-total-price')?.textContent || '18,500 AED';

      let orders = getOrders();
      orders.unshift({
        id: orderId,
        customer: name,
        items: itemsSummary,
        total: totalFormatted,
        status: 'Pending',
        date: new Date().toISOString().split('T')[0]
      });
      saveOrders(orders);

      alert(`🎉 Thank you ${name}! Your order #${orderId} has been successfully submitted.\nOur Concierge team will dispatch your insured package shortly.`);
      cart = [];
      updateCartUI();
      document.getElementById('checkout-modal').classList.remove('active');
      checkoutForm.reset();
    });
  }

} catch (error) {
  console.error('Critical App Error:', error);
  alert('Critical Error: ' + error.message);
  document.querySelector('#app').innerHTML = '<div style="padding: 20px; color: red;"><h1>Failed to load app</h1><pre>' + error.stack + '</pre></div>';
}
