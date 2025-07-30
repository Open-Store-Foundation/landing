import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle') as HTMLButtonElement;
  const navbarMenu = document.querySelector('.navbar-menu') as HTMLUListElement;
  const navbarLinks = document.querySelectorAll('.navbar-link');
  const avoirButtons = document.querySelectorAll('.avoir-buttons .btn');
  const sectionButtons = document.querySelectorAll('.section-container .btn');

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

    navbarLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          isMenuOpen = false;
          navbarMenu.style.display = 'none';
          mobileMenuToggle.textContent = '☰';
        }
      });
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
      e.preventDefault();
      const targetId = link.getAttribute('href');
      
      if (targetId && targetId.startsWith('#')) {
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
    });
  });

  avoirButtons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = button.textContent?.toLowerCase();
      
      if (buttonText?.includes('creator')) {
        const publisherElement = document.querySelector('.publisher-case');
        if (publisherElement) {
          window.scrollTo({
            top: publisherElement.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: 'smooth'
          });
        }
      } else if (buttonText?.includes('user')) {
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

  sectionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const buttonText = button.textContent?.toLowerCase();
      
      if (buttonText?.includes('download')) {
        console.log('Download app clicked');
        alert('Download functionality will be implemented soon!');
      } else if (buttonText?.includes('create')) {
        console.log('Create app clicked');
        alert('Create app functionality will be implemented soon!');
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
    frame.addEventListener('mouseenter', () => {
      frame.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1.05)';
    });
    
    frame.addEventListener('mouseleave', () => {
      frame.style.transform = window.innerWidth > 768 
        ? 'rotateY(-5deg) rotateX(5deg) scale(1)' 
        : 'rotateY(0deg) rotateX(0deg) scale(1)';
    });
  });

  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const platform = link.getAttribute('title')?.toLowerCase();
      
      switch (platform) {
        case 'linkedin':
          console.log('LinkedIn clicked');
          break;
        case 'telegram':
          console.log('Telegram clicked');
          break;
        case 'x (twitter)':
          console.log('X (Twitter) clicked');
          break;
        case 'discord':
          console.log('Discord clicked');
          break;
        default:
          console.log(`${platform} clicked`);
      }
      
      alert(`${platform?.charAt(0).toUpperCase()}${platform?.slice(1)} link will be implemented soon!`);
    });
  });

  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });


});
