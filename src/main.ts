import './style.css';

// Centralized URL configuration
const URLS = {
  // External links
  whitepaper: 'https://github.com/Open-Store-Foundation/whitepaper/blob/main/open-store-whitepaper-en.pdf',
  docs: 'https://docs.openstore.foundation',
  github: 'https://github.com/Open-Store-Foundation',
  studio: 'https://studio.openstore.foundation',
  
  // Community links
  telegram: 'https://t.me/openstore_community',
  discord: 'https://discord.gg/CPmjuPNt',
  twitter: 'https://x.com/openstorefndn',
  linktree: 'https://linktr.ee/openstore_foundation',
  
  // Legal links
  termsOfService: 'https://docs.openstore.foundation/terms-of-service',
  privacyPolicy: 'https://docs.openstore.foundation/privacy-policy',
  
  // Internal links
  download: 'download.html',
  home: 'index.html'
};

// Function to set up navbar links
const setupNavbarLinks = () => {
  const navbarLinks = document.querySelectorAll('.navbar-link');
  navbarLinks.forEach(link => {
    const text = link.textContent?.toLowerCase();
    switch (text) {
      case 'whitepaper':
        link.setAttribute('href', URLS.whitepaper);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        break;
      case 'docs':
        link.setAttribute('href', URLS.docs);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        break;
      case 'github':
        link.setAttribute('href', URLS.github);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        break;
      case 'community':
        link.setAttribute('href', URLS.linktree);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        break;
    }
  });
};

// Function to set up social media links
const setupSocialLinks = () => {
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    const title = link.getAttribute('title')?.toLowerCase();
    switch (title) {
      case 'telegram':
        link.setAttribute('href', URLS.telegram);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        break;
      case 'discord':
        link.setAttribute('href', URLS.discord);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        break;
      case 'x (twitter)':
        link.setAttribute('href', URLS.twitter);
        if (URLS.twitter !== '#') {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
        break;
      case 'github':
        link.setAttribute('href', URLS.github);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        break;
    }
  });
};

// Function to set up footer links
const setupFooterLinks = () => {
  const footerLinks = document.querySelectorAll('.footer-links a');
  footerLinks.forEach(link => {
    const text = link.textContent?.toLowerCase();
    switch (text) {
      case 'docs':
        link.setAttribute('href', URLS.docs);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        break;
      case 'github':
        link.setAttribute('href', URLS.github);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        break;
      case 'whitepaper':
        link.setAttribute('href', URLS.whitepaper);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        break;
      case 'terms of service':
        link.setAttribute('href', URLS.termsOfService);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        break;
      case 'privacy policy':
        link.setAttribute('href', URLS.privacyPolicy);
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        break;
      case 'download':
        link.setAttribute('href', URLS.download);
        break;
      case 'home':
        link.setAttribute('href', URLS.home);
        break;
    }
  });
};

// Function to set up publish app buttons
const setupPublishButtons = () => {
  const publishButtons = document.querySelectorAll('.btn');
  publishButtons.forEach(button => {
    if (button.textContent?.toLowerCase().includes('publish app')) {
      button.setAttribute('href', URLS.studio);
      button.setAttribute('target', '_blank');
      button.setAttribute('rel', 'noopener noreferrer');
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  // Set up all links from centralized URLs
  setupNavbarLinks();
  setupSocialLinks(); 
  setupFooterLinks();
  setupPublishButtons();
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle') as HTMLButtonElement;
  const navbarMenu = document.querySelector('.navbar-menu') as HTMLUListElement;
  const navbarLinks = document.querySelectorAll('.navbar-link');
  const avoirButtons = document.querySelectorAll('.avoir-buttons .btn');
  const navbarBrand = document.querySelector('.navbar-brand') as HTMLElement;
  const logo = document.querySelector('.logo') as HTMLImageElement;
  const brandName = document.querySelector('.brand-name') as HTMLElement;

  const animatedText = document.querySelector('.animated-text') as HTMLElement;
  if (animatedText) {
    const words = animatedText.getAttribute('data-words')?.split(',') || ['Decentralized'];
    let currentWordIndex = 0;
    
    const typeWriter = (text: string, callback?: () => void) => {
      let i = 0;
      animatedText.textContent = '';
      
      const typing = () => {
        if (i < text.length) {
          animatedText.textContent = text.substring(0, i + 1);
          i++;
          setTimeout(typing, 100);
        } else if (callback) {
          setTimeout(callback, 2000);
        }
      };
      typing();
    };
    
    const eraseText = (callback?: () => void) => {
      const text = animatedText.textContent || '';
      let i = text.length;
      
      const erasing = () => {
        if (i > 0) {
          animatedText.textContent = text.substring(0, i - 1);
          i--;
          setTimeout(erasing, 50);
        } else if (callback) {
          setTimeout(callback, 500);
        }
      };
      erasing();
    };
    
    const cycleWords = () => {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      eraseText(() => {
        typeWriter(words[currentWordIndex], cycleWords);
      });
    };
    
    setTimeout(() => {
      typeWriter(words[0], cycleWords);
    }, 1500);
  }

  const navbar = document.querySelector('.navbar') as HTMLElement;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  let isMenuOpen = false;

  if (mobileMenuToggle && navbarMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      
      if (isMenuOpen) {
        navbarMenu.style.display = 'flex';
        navbarMenu.style.flexDirection = 'column';
        navbarMenu.style.position = 'absolute';
        navbarMenu.style.top = '100%';
        navbarMenu.style.left = '0';
        navbarMenu.style.right = '0';
        navbarMenu.style.background = '#000000';
        navbarMenu.style.backdropFilter = 'none';
        navbarMenu.style.padding = '1rem 2rem';
        navbarMenu.style.boxShadow = 'none';
        navbarMenu.style.zIndex = '1000';
        mobileMenuToggle.textContent = '✕';
      } else {
        navbarMenu.style.display = 'none';
        mobileMenuToggle.textContent = '☰';
      }
    });

    const closeMobileMenu = () => {
      if (window.innerWidth <= 768 && isMenuOpen) {
        isMenuOpen = false;
        navbarMenu.style.display = 'none';
        mobileMenuToggle.textContent = '☰';
      }
    };

    navbarLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', (e) => {
      if (isMenuOpen && !navbar.contains(e.target as Node)) {
        closeMobileMenu();
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navbarMenu) {
      navbarMenu.style.display = 'flex';
      navbarMenu.style.flexDirection = 'row';
      navbarMenu.style.position = 'static';
      navbarMenu.style.background = 'transparent';
      navbarMenu.style.backdropFilter = 'none';
      navbarMenu.style.padding = '0';
      navbarMenu.style.boxShadow = 'none';
      isMenuOpen = false;
      if (mobileMenuToggle) {
        mobileMenuToggle.textContent = '☰';
      }
    } else if (window.innerWidth <= 768 && navbarMenu && !isMenuOpen) {
      navbarMenu.style.display = 'none';
    }
  });

  navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      // Close mobile menu
      if (window.innerWidth <= 768 && isMenuOpen && mobileMenuToggle && navbarMenu) {
        isMenuOpen = false;
        navbarMenu.style.display = 'none';
        mobileMenuToggle.textContent = '☰';
      }
      
      // Only prevent default for anchor links, allow external links to work normally
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar')?.clientHeight || 80;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
      
      // Remove focus from the clicked link to prevent persistent hover background
      (link as HTMLElement).blur();
    });
  });

  avoirButtons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonId = button.id;
      
      if (buttonId === 'publisher-btn') {
        const publisherElement = document.querySelector('.publisher-case');
        if (publisherElement) {
          window.scrollTo({
            top: publisherElement.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        }
      } else if (buttonId === 'user-btn') {
        const userElement = document.querySelector('.user-case');
        if (userElement) {
          window.scrollTo({
            top: userElement.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll('.mobile-screenshot, .console-screenshot, .stat-card');
  animateElements.forEach(el => observer.observe(el));

  const phoneFrames = document.querySelectorAll('.phone-frame') as NodeListOf<HTMLElement>;
  phoneFrames.forEach((frame) => {
    if (frame.closest('.mobile-showcase')) return;
    frame.addEventListener('mouseenter', () => {
      frame.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1.05)';
    });
    frame.addEventListener('mouseleave', () => {
      frame.style.transform = window.innerWidth > 768
        ? 'rotateY(-5deg) rotateX(5deg) scale(1)'
        : 'rotateY(0deg) rotateX(0deg) scale(1)';
    });
  });



  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  const redirectToHome = () => {
    window.location.href = 'index.html';
  };

  if (navbarBrand) {
    navbarBrand.addEventListener('click', redirectToHome);
    navbarBrand.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        redirectToHome();
      }
    });
  }

  if (logo) {
    logo.addEventListener('click', redirectToHome);
  }

  if (brandName) {
    brandName.addEventListener('click', redirectToHome);
  }

  const downloadMainBtn = document.querySelector('.download-main') as HTMLButtonElement;
  const formatDropdownBtn = document.getElementById('format-dropdown-btn');
  const formatDropdown = document.getElementById('format-dropdown');
  
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (downloadMainBtn) {
    downloadMainBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const downloadUrl = 'https://assets.openstore.foundation/0.0.1.apk';
      
      if (isMobile) {
        window.location.href = downloadUrl;
      } else {
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'openstore-0.0.1.apk';
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  }
  
  if (formatDropdownBtn && formatDropdown) {
    formatDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = formatDropdown.classList.contains('open');
      
      if (isOpen) {
        formatDropdown.classList.remove('open');
        formatDropdownBtn.classList.remove('open');
      } else {
        formatDropdown.classList.add('open');
        formatDropdownBtn.classList.add('open');
      }
    });

    const formatOptions = formatDropdown.querySelectorAll('.format-option');
    formatOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        
        formatOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        const formatName = option.querySelector('.format-name')?.textContent;
        if (formatName) {
          formatDropdownBtn.firstChild!.textContent = formatName;
        }
        
        formatDropdown.classList.remove('open');
        formatDropdownBtn.classList.remove('open');
      });
    });

    document.addEventListener('click', () => {
      formatDropdown.classList.remove('open');
      formatDropdownBtn.classList.remove('open');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        formatDropdown.classList.remove('open');
        formatDropdownBtn.classList.remove('open');
      }
    });
  }

});
