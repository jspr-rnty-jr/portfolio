export const defaultProps = {
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        distance: "30px",
        duration: 1000,
        desktop: true,
        mobile: true,
      };
    
export const targetElements = [
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
    element: ".hero-heading",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
    element: ".hero-subheading",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    },
  },
  {
      element: ".hero-tagline",
      animation: {
        delay: 1000,
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
    element: ".about-profile__image",
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
    element: ".about-profile__socials",
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
    element: ".project-header",
    animation: {
      delay: 500,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    }
  },
  {
    element: ".projects-card",
    animation: {
      delay: 1000,
      origin: window.innerWidth > 768 ? "left" : "bottom",
    }
  }
];