// ========================================
// E-SHOPPING - Professional JavaScript
// ========================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoader();
    initHeroSlider();
    initCountdown();
    initCart();
    initProductTabs();
    initBackToTop();
    initNewsletter();
    initProductData();
});

// ========================================
// Loader
// ========================================
function initLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }, 1000);
    }
}

// ========================================
// Hero Slider
// ========================================
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    const dotsContainer = document.getElementById('sliderDots');
    
    if (!slides.length) return;
    
    let currentSlide = 0;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        slides[index].classList.add('active');
        document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
        document.querySelectorAll('.dot')[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) newIndex = 0;
        goToSlide(newIndex);
    }
    
    function prevSlide() {
        let newIndex = currentSlide - 1;
        if (newIndex < 0) newIndex = slides.length - 1;
        goToSlide(newIndex);
    }
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Auto slide every 5 seconds
    let autoSlide = setInterval(nextSlide, 5000);
    
    // Pause auto slide on hover
    const slider = document.getElementById('heroSlider');
    if (slider) {
        slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
        slider.addEventListener('mouseleave', () => {
            autoSlide = setInterval(nextSlide, 5000);
        });
    }
}

// ========================================
// Countdown Timer
// ========================================
function initCountdown() {
    // Set target date (7 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(23, 59, 59, 999);
    
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            document.querySelector('.countdown').innerHTML = '<div class="countdown-item">Offer Ended!</div>';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const daysEl = document.querySelector('.countdown .days');
        const hoursEl = document.querySelector('.countdown .hours');
        const minutesEl = document.querySelector('.countdown .minutes');
        const secondsEl = document.querySelector('.countdown .seconds');
        
        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ========================================
// Product Data
// ========================================
const products = [
    {
        id: 1,
        name: "Classic Denim Jacket",
        category: "Fashion",
        price: 89.99,
        oldPrice: 129.99,
        rating: 4.5,
        reviews: 128,
        image: "https://placehold.co/300x300/2563eb/white?text=Denim+Jacket",
        badge: "sale",
        tag: "sale"
    },
    {
        id: 2,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 149.99,
        oldPrice: 199.99,
        rating: 4.8,
        reviews: 256,
        image: "https://placehold.co/300x300/3b82f6/white?text=Headphones",
        badge: "bestseller",
        tag: "bestseller"
    },
    {
        id: 3,
        name: "Smart Watch Ultra",
        category: "Electronics",
        price: 299.99,
        oldPrice: 399.99,
        rating: 4.7,
        reviews: 89,
        image: "https://placehold.co/300x300/10b981/white?text=Smart+Watch",
        badge: "new",
        tag: "new"
    },
    {
        id: 4,
        name: "Leather Crossbody Bag",
        category: "Accessories",
        price: 59.99,
        oldPrice: 89.99,
        rating: 4.6,
        reviews: 45,
        image: "https://placehold.co/300x300/f59e0b/white?text=Leather+Bag",
        badge: "sale",
        tag: "sale"
    },
    {
        id: 5,
        name: "Running Shoes",
        category: "Sports",
        price: 79.99,
        oldPrice: 119.99,
        rating: 4.4,
        reviews: 312,
        image: "https://placehold.co/300x300/ef4444/white?text=Running+Shoes",
        badge: "bestseller",
        tag: "bestseller"
    },
    {
        id: 6,
        name: "Sunglasses",
        category: "Accessories",
        price: 39.99,
        oldPrice: 69.99,
        rating: 4.3,
        reviews: 67,
        image: "https://placehold.co/300x300/8b5cf6/white?text=Sunglasses",
        badge: "new",
        tag: "new"
    },
    {
        id: 7,
        name: "Laptop Backpack",
        category: "Accessories",
        price: 49.99,
        oldPrice: 79.99,
        rating: 4.7,
        reviews: 178,
        image: "https://placehold.co/300x300/ec4899/white?text=Backpack",
        badge: "sale",
        tag: "sale"
    },
    {
        id: 8,
        name: "Smartphone Pro",
        category: "Electronics",
        price: 899.99,
        oldPrice: 1099.99,
        rating: 4.9,
        reviews: 523,
        image: "https://placehold.co/300x300/06b6d4/white?text=Smartphone",
        badge: "bestseller",
        tag: "bestseller"
    }
];

// ========================================
// Display Products
// ========================================
function displayProducts(productsToShow = products, limit = 8) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    const productsToDisplay = productsToShow.slice(0, limit);
    
    productsGrid.innerHTML = productsToDisplay.map(product => `
        <div class="product-card" data-id="${product.id}">
            ${product.badge ? `<div class="product-badge ${product.badge}">${product.badge.toUpperCase()}</div>` : ''}
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}"><i class="fas fa-shopping-cart"></i></button>
                    <button class="add-to-wishlist" data-id="${product.id}"><i class="fas fa-heart"></i></button>
                    <button class="quick-view" data-id="${product.id}"><i class="fas fa-eye"></i></button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    ${generateRatingStars(product.rating)}
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price}</span>
                    ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.dataset.id);
            addToCart(productId);
        });
    });
}

function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// ========================================
// Product Tabs
// ========================================
function initProductTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (!tabBtns.length) return;
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active tab
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter products
            const tab = btn.dataset.tab;
            let filteredProducts = [...products];
            
            switch(tab) {
                case 'new':
                    filteredProducts = products.filter(p => p.tag === 'new');
                    break;
                case 'bestseller':
                    filteredProducts = products.filter(p => p.tag === 'bestseller');
                    break;
                case 'sale':
                    filteredProducts = products.filter(p => p.tag === 'sale');
                    break;
                default:
                    filteredProducts = [...products];
            }
            
            displayProducts(filteredProducts);
        });
    });
    
    // Initial display
    displayProducts();
}

// ========================================
// Cart Functionality
// ========================================
let cart = [];

function initCart() {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('eShoppingCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
    
    // Cart button
    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            cartSidebar.classList.add('active');
        });
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
        });
    }
    
    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
        if (cartSidebar && cartSidebar.classList.contains('active')) {
            if (!cartSidebar.contains(e.target) && !cartBtn.contains(e.target)) {
                cartSidebar.classList.remove('active');
            }
        }
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    updateCartUI();
    showNotification(`${product.name} added to cart!`);
}

function updateCartUI() {
    // Save to localStorage
    localStorage.setItem('eShoppingCart', JSON.stringify(cart));
    
    // Update cart badge
    const cartBadges = document.querySelectorAll('#cartBtn .badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadges.forEach(badge => {
        badge.textContent = totalItems;
    });
    
    // Update cart sidebar
    const cartItemsContainer = document.getElementById('cartItems');
    const totalAmountEl = document.querySelector('.total-amount');
    
    if (cartItemsContainer) {
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>$${item.price}</p>
                        <div class="cart-item-quantity">
                            <button class="qty-decrease" data-id="${item.id}">-</button>
                            <span>${item.quantity}</span>
                            <button class="qty-increase" data-id="${item.id}">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" data-id="${item.id}"><i class="fas fa-trash"></i></button>
                </div>
            `).join('');
        }
        
        const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (totalAmountEl) totalAmountEl.textContent = `$${totalAmount.toFixed(2)}`;
        
        // Add event listeners for quantity buttons
        document.querySelectorAll('.qty-decrease').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                updateQuantity(id, -1);
            });
        });
        
        document.querySelectorAll('.qty-increase').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                updateQuantity(id, 1);
            });
        });
        
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.dataset.id);
                removeFromCart(id);
            });
        });
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
        updateCartUI();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    showNotification('Item removed from cart');
}

// ========================================
// Wishlist Functionality
// ========================================
function initWishlist() {
    const wishlistBtn = document.getElementById('wishlistBtn');
    let wishlist = JSON.parse(localStorage.getItem('eShoppingWishlist') || '[]');
    
    function updateWishlistBadge() {
        const badge = document.querySelector('#wishlistBtn .badge');
        if (badge) badge.textContent = wishlist.length;
    }
    
    updateWishlistBadge();
    
    // Add to wishlist from product cards
    document.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-wishlist')) {
            const btn = e.target.closest('.add-to-wishlist');
            const productId = parseInt(btn.dataset.id);
            const product = products.find(p => p.id === productId);
            
            if (!wishlist.find(w => w.id === productId)) {
                wishlist.push(product);
                localStorage.setItem('eShoppingWishlist', JSON.stringify(wishlist));
                updateWishlistBadge();
                showNotification(`${product.name} added to wishlist!`);
                btn.innerHTML = '<i class="fas fa-heart" style="color: #ef4444;"></i>';
            }
        }
    });
}

// ========================================
// Back to Top Button
// ========================================
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// Newsletter Subscription
// ========================================
function initNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            if (email) {
                showNotification('Thank you for subscribing!');
                newsletterForm.reset();
            }
        });
    }
}

// ========================================
// Search Functionality
// ========================================
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query === '') {
            displayProducts(products);
            return;
        }
        
        const filtered = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
        
        displayProducts(filtered);
        
        if (filtered.length === 0) {
            const productsGrid = document.getElementById('productsGrid');
            if (productsGrid) {
                productsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No products found matching your search.</p>';
            }
        }
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }
}

// ========================================
// Notification System
// ========================================
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ========================================
// Currency Converter (Demo)
// ========================================
function initCurrencyConverter() {
    const currencySelect = document.getElementById('currencySelect');
    const exchangeRates = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.73
    };
    
    function convertPrice(price, currency) {
        const rate = exchangeRates[currency] || 1;
        return (price * rate).toFixed(2);
    }
    
    if (currencySelect) {
        currencySelect.addEventListener('change', (e) => {
            const currency = e.target.value;
            const prices = document.querySelectorAll('.current-price, .old-price');
            
            prices.forEach(priceEl => {
                const originalPrice = parseFloat(priceEl.dataset.original || priceEl.textContent.replace('$', ''));
                if (!priceEl.dataset.original) {
                    priceEl.dataset.original = originalPrice;
                }
                const convertedPrice = convertPrice(originalPrice, currency);
                const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
                priceEl.textContent = `${symbol}${convertedPrice}`;
            });
        });
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .cart-item {
        display: flex;
        gap: 15px;
        padding: 15px 0;
        border-bottom: 1px solid #e5e7eb;
    }
    
    .cart-item img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 8px;
    }
    
    .cart-item-info {
        flex: 1;
    }
    
    .cart-item-info h4 {
        font-size: 14px;
        margin-bottom: 5px;
    }
    
    .cart-item-info p {
        font-size: 14px;
        font-weight: 600;
        color: #2563eb;
        margin-bottom: 8px;
    }
    
    .cart-item-quantity {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .cart-item-quantity button {
        width: 25px;
        height: 25px;
        border-radius: 4px;
        border: 1px solid #e5e7eb;
        background: white;
        cursor: pointer;
    }
    
    .cart-item-remove {
        background: none;
        border: none;
        color: #ef4444;
        cursor: pointer;
        font-size: 16px;
    }
`;

document.head.appendChild(style);

// Initialize remaining features
initWishlist();
initSearch();
initCurrencyConverter();

// Load more products
const loadMoreBtn = document.getElementById('loadMoreBtn');
let currentLimit = 8;

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        currentLimit += 4;
        displayProducts(products, currentLimit);
        
        if (currentLimit >= products.length) {
            loadMoreBtn.style.display = 'none';
        }
    });
}