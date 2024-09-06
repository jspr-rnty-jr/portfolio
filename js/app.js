import initParticles from './particlesJs/particles.js'
import { defaultProps, targetElements } from './scrollRevealJs/data/scrollRevealConfig.js'
import initScrollReveal from './scrollRevealJs/initScrollReveal.js';
import navbarToggleJS from './navbarToggle/navbarToggle.js';

// PARTICLES
initParticles();

// Scroll reveal
initScrollReveal(targetElements, defaultProps);

// Navbar Toggle
// navbarToggleJS();

const backToTopPointer = document.querySelector('.back-to-top');
document.addEventListener('scrollend', () => {
    backToTopPointer.classList.remove('hidden');

    if(!backToTopPointer.classList.contains('hidden') && window.scrollY){
        setTimeout(() => {
            backToTopPointer.classList.add('hidden');
            console.log('wuo')
        }, 3000)
    }
})