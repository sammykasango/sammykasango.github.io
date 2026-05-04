'use strict';

// ─── DOM Ready ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Mark that JS is ready (for CSS fallback)
  document.documentElement.classList.add('js-ready');

  initNavbar();
  initTypingAnimation();
  initScrollAnimations();
  initSkillBars();
  initProjectFilter();
  initHamburger();
  initDarkMode();
  initContactForm();
  initSmoothScroll();

});

// ─── 1. Navbar scroll effect ─────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

// ─── 2. Typing animation ──────────────────────────────────────
function initTypingAnimation() {
  const el = document.getElementById('typingText');
  if (!el) return;

  const phrases = [
    'System Software & Network Engineer',
    'Digital Infrastructure Architect',
    'Powering Digital Growth',
    'Crafting Scalable Digital Solutions',
    'East Africa\'s Tech Builder',
  ];

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;
  let pauseTimer  = null;

  const type = () => {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    el.textContent = current.substring(0, charIndex);

    let delay = isDeleting ? 45 : 80;

    if (!isDeleting && charIndex === current.length) {
      delay = 2000; // pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 400;
    }

    pauseTimer = setTimeout(type, delay);
  };

  type();
}

// ─── 3. Scroll-triggered animations ──────────────────────────
function initScrollAnimations() {
  const targets = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

  if (!targets.length) return;

  // Function to check if element is in viewport
  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    );
  };

  // Immediately animate elements that are already in viewport
  targets.forEach(t => {
    if (isElementInViewport(t)) {
      t.classList.add('animated');
    }
  });

  // If IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    });

    targets.forEach(t => {
      if (!t.classList.contains('animated')) {
        observer.observe(t);
      }
    });
  } else {
    // Fallback: show all immediately
    targets.forEach(t => t.classList.add('animated'));
  }
}

// ─── 4. Animated skill bars ──────────────────────────────────
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');
  if (!fills.length) return;

  const animateBars = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.getAttribute('data-width') || '0';
        // Slight delay for stagger effect
        setTimeout(() => {
          bar.style.width = width + '%';
        }, 200);
        observer.unobserve(bar);
      }
    });
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(animateBars, {
      threshold: 0.3,
    });
    fills.forEach(bar => observer.observe(bar));
  } else {
    fills.forEach(bar => {
      bar.style.width = (bar.getAttribute('data-width') || '0') + '%';
    });
  }
}

// ─── 5. Project filter ───────────────────────────────────────
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const show = filter === 'all' || category === filter;
        card.classList.toggle('hidden', !show);
      });
    });
  });
}

// ─── 6. Hamburger menu ───────────────────────────────────────
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

// ─── 7. Dark mode toggle ─────────────────────────────────────
function initDarkMode() {
  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const html = document.documentElement;

  // Load saved preference
  const saved = localStorage.getItem('theme');
  if (saved) {
    html.setAttribute('data-theme', saved);
    updateThemeIcon(toggle, saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
    updateThemeIcon(toggle, 'dark');
  }

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateThemeIcon(toggle, next);
  });
}

function updateThemeIcon(btn, theme) {
  const icon = btn.querySelector('.theme-icon');
  if (icon) {
    icon.textContent = theme === 'dark' ? '☀' : '◐';
  }
}

// ─── 8. Contact form ─────────────────────────────────────────
function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  if (!form) {
    console.warn('Contact form not found');
    return;
  }

  const serviceId = 'service_1y7rphm';
  const templateId = 'template_rn6nmas';
  const publicKey = 'MqCfQKZ5Os3mP29aV';

  let emailJsReady = false;

  if (window.emailjs && typeof window.emailjs.init === 'function') {
    try {
      emailjs.init(publicKey);
      emailJsReady = true;
      console.log('EmailJS initialized successfully');
    } catch (e) {
      console.error('EmailJS initialization failed:', e);
    }
  } else {
    console.error('EmailJS library is not loaded or is unavailable on this page.');
  }

  const restoreButton = (btn, originalText) => {
    if (!btn) return;
    btn.innerHTML = originalText;
    btn.disabled = false;
    btn.removeAttribute('aria-busy');
  };

  const showMessage = (message, isError = false) => {
    if (!success) return;
    success.textContent = message;
    success.style.background = isError ? 'rgba(239, 68, 68, 0.12)' : '';
    success.style.borderLeftColor = isError ? '#ef4444' : '';
    success.classList.add('show');
    setTimeout(() => success.classList.remove('show'), 4000);
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;

    const originalText = btn.innerHTML;
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite">
        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0"/>
        <path d="M3 12a9 9 0 019-9"/>
      </svg>
      Sending…
    `;
    btn.disabled = true;
    btn.setAttribute('aria-busy', 'true');

    const senderEmail = form.querySelector('#email')?.value.trim();
    const messageText = form.querySelector('#message')?.value.trim();

    if (!senderEmail || !messageText) {
      restoreButton(btn, originalText);
      showMessage('✗ Email and message are required.', true);
      return;
    }

    if (!emailJsReady) {
      restoreButton(btn, originalText);
      showMessage('✗ EmailJS is not ready. Please refresh the page or check console errors.', true);
      return;
    }

    const sendPromise = emailjs.sendForm(serviceId, templateId, form);
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Email request timed out')), 10000)
    );

    Promise.race([sendPromise, timeoutPromise])
      .then(() => {
        restoreButton(btn, originalText);
        form.reset();
        showMessage('✓ Message sent! I\'ll get back to you within 24 hours.');
      })
      .catch((error) => {
        console.error('EmailJS submission failed:', error);
        restoreButton(btn, originalText);
        showMessage(`✗ Failed to send: ${error?.message || 'Please try again.'}`, true);
      });
  });
}

// ─── 9. Smooth scroll offset (for fixed navbar) ──────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();

      const offset = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h') || '68'
      );

      const top = target.getBoundingClientRect().top + window.scrollY - offset - 12;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ─── Utility: active nav link highlight ──────────────────────
(function highlightActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');

  if (!sections.length || !links.length) return;

  const navH = 80;

  const onScroll = () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
      const top    = section.offsetTop - navH - 20;
      const bottom = top + section.offsetHeight;
      const id     = section.getAttribute('id');

      if (scrollY >= top && scrollY < bottom) {
        links.forEach(l => {
          l.classList.toggle(
            'active-link',
            l.getAttribute('href') === `#${id}`
          );
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
})();

// ─── Add active-link style dynamically ───────────────────────
const style = document.createElement('style');
style.textContent = `.nav-link.active-link { color: var(--cyan) !important; }`;
document.head.appendChild(style);