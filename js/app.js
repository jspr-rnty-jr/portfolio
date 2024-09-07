import initParticles from './particlesJs/particles.js'
import { defaultProps, targetElements } from './scrollRevealJs/data/scrollRevealConfig.js'
import initScrollReveal from './scrollRevealJs/initScrollReveal.js';
// import navbarToggleJS from './navbarToggle/navbarToggle.js';
import backToTop from './backToTop/backToTop.js';

// PARTICLES
initParticles();

// Scroll reveal
initScrollReveal(targetElements, defaultProps);

// Navbar Toggle
// navbarToggleJS();

// Back to Top
backToTop();