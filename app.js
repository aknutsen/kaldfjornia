document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('products-grid');

  if (productsGrid && typeof products !== 'undefined') {
    products.forEach(product => {
      // Create card element
      const card = document.createElement('div');
      card.className = 'product-card';
      
      // Inject HTML content
      card.innerHTML = `
        <div class="product-img-wrapper">
          <img src="${product.image}" alt="${product.name}" class="product-img">
        </div>
        <div class="product-info">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.description}</p>
          <div class="product-footer">
            <span class="product-price">${product.price}</span>
            <a href="#" class="btn btn-primary" style="padding: 0.5rem 1.2rem; font-size: 0.9rem;">Ta penga mine</a>
          </div>
        </div>
      `;
      
      productsGrid.appendChild(card);
    });
  }

  // Smooth appearance observation (Micro-animations)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.product-card, .feature-card, .about-text').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });
});
