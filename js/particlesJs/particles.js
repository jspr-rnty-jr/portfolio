/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
export default function initParticles () {
    particlesJS.load('particles-js', 'assets/data/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });    
}


