/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/data/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// Scroll reveal
const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    duration: 1000,
    desktop: true,
    mobile: true,
  };

  const targetElements = [
    {
        element: ".logo-img",
        animation: {
            delay: 200,
            distance: "0px"
        }
    },
    {
      element: ".section-title",
      animation: {
        delay: 300,
        distance: "0px",
        origin: "bottom",
      },
    },
    {
      element: ".hero-title",
      animation: {
        delay: 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
    },
    {
        element: ".hero-tagline",
        animation: {
          delay: 750,
          origin: window.innerWidth > 768 ? "left" : "bottom",
        },
    },
    {
      element: ".hero-cta",
      animation: {
        delay: 1000,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
    },
    {
      element: ".about-profile-image",
      animation: {
        delay: 600,
        origin: "left",
      },
    },
    {
      element: ".about-profile-summary",
      animation: {
        delay: 1000,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
    },
    {
      element: ".about-profile-socials",
      animation: {
        delay: window.innerWidth > 768 ? 1200 : 500,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      },
    },
    {
      element: ".about-profile-skills",
      animation: {
        delay: window.innerWidth > 768 ? 1150 : 1000,
        origin: window.innerWidth > 768 ? "right" : "bottom",
      },
    },
    {
      element: ".projects-card",
      animation: {
        delay: window.innerWidth > 1000,
        origin: window.innerWidth > 768 ? "left" : "bottom",
      }
    }
    // {
    //   element: ".contact-wrapper",
    //   animation: {
    //     delay: 800,
    //     origin: "bottom",
    //   },
    // },
  ];

const initScrollReveal = (targetElements, defaultProps) => {
    if (!targetElements.length) return;

    ScrollReveal({ reset: false });

    targetElements.forEach(({ element, animation }) => {
        ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
    });
}

initScrollReveal(targetElements, defaultProps);

// ScrollReveal({ reset: true });
// ScrollReveal().reveal('.about-wrapper__image, .section-title, .hero-content', { duration: 2000 });


const navbarToggle = navbar.querySelector('#navbar-toggle');
let isNavbarExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute('aria-expanded', isNavbarExpanded);
};

navbarToggle.addEventListener('click', toggleNavbarVisibility);

const navbarMenu = document.querySelector('#navbar-menu');
const navbarLinksContainer = navbarMenu.querySelector('.navbar-links');

navbarLinksContainer.addEventListener('click', (e) => e.stopPropagation());
navbarMenu.addEventListener('click', toggleNavbarVisibility);