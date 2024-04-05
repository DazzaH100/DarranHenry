// script.js
document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ['#000000', '#6A82FB', '#A4EBF3', '#ffe']
            },
            // ...additional configurations...
        },
        /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles-js config loaded');
  });
        // ...other particles.js settings...
    });
});

