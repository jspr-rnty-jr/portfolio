import initParticles from './particlesJs/particles.js'
import { defaultProps, targetElements } from './scrollRevealJs/data/scrollRevealConfig.js'
import initScrollReveal from './scrollRevealJs/initScrollReveal.js';
// import navbarToggleJS from './navbarToggle/navbarToggle.js';
import backToTop from './backToTop/backToTop.js';
import handleLinkAvailability from './utils/handleLinkAvailability.js';

// PARTICLES
initParticles();

// Scroll reveal
initScrollReveal(targetElements, defaultProps);

// Back to Top
backToTop();

// link available?
handleLinkAvailability();

// Navbar Toggle
// navbarToggleJS();