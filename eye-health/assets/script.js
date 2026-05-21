/**
 * Eye Lens - About Page Interactive Features
 * Optional JavaScript enhancements for the About page
 */

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {

  // Add smooth scrolling to all links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Animate elements on scroll (intersection observer)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all feature cards and FAQ items
  const animatedElements = document.querySelectorAll('.feature-card, .test-item, .faq-item, .support-card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // FAQ accordion functionality (optional)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.style.cursor = 'pointer';

    const answer = item.querySelector('p');
    const originalHeight = answer.scrollHeight;

    // Make FAQ items collapsible (optional - currently all expanded)
    // Uncomment below to enable accordion functionality
    /*
    answer.style.maxHeight = originalHeight + 'px';
    answer.style.overflow = 'hidden';
    answer.style.transition = 'max-height 0.3s ease';

    item.addEventListener('click', function() {
      const isOpen = answer.style.maxHeight !== '0px';

      if (isOpen) {
        answer.style.maxHeight = '0px';
      } else {
        answer.style.maxHeight = originalHeight + 'px';
      }
    });
    */
  });

  // Track scroll depth for analytics (optional)
  let maxScroll = 0;
  window.addEventListener('scroll', function() {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;

      // You can send this to analytics
      if (maxScroll >= 25 && maxScroll < 26) {
        console.log('User scrolled 25% of the page');
      }
      if (maxScroll >= 50 && maxScroll < 51) {
        console.log('User scrolled 50% of the page');
      }
      if (maxScroll >= 75 && maxScroll < 76) {
        console.log('User scrolled 75% of the page');
      }
      if (maxScroll >= 90) {
        console.log('User scrolled to bottom');
      }
    }
  });

  // Add copy-to-clipboard functionality for support email (optional)
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const email = this.href.replace('mailto:', '');

      // Optional: Copy email to clipboard
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          console.log('Email copied to clipboard:', email);
        });
      }
    });
  });

  // Add loading animation for external links
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  externalLinks.forEach(link => {
    link.addEventListener('click', function() {
      console.log('Opening external link:', this.href);
    });
  });

  console.log('Eye Lens About page initialized');
});

// Add parallax effect to hero section (optional)
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');

  if (hero && scrolled < hero.offsetHeight) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Detect dark mode preference (future enhancement)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  console.log('User prefers dark mode - dark theme could be implemented here');
}

// Handle print styles
window.addEventListener('beforeprint', function() {
  console.log('Page is being printed');
});

window.addEventListener('afterprint', function() {
  console.log('Page print completed');
});