import initParticles from './particlesJs/particles.js'
import { defaultProps, targetElements } from './scrollRevealJs/data/scrollRevealConfig.js'
import initScrollReveal from './scrollRevealJs/initScrollReveal.js';
// import navbarToggleJS from './navbarToggle/navbarToggle.js';

// PARTICLES
initParticles();

// Scroll reveal
initScrollReveal(targetElements, defaultProps);

// Navbar Toggle
// navbarToggleJS();