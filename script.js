// Subtle scale hover effect for cards and status pill
// Minimal motion, professional feel.
(function() {
    const selector = [
        '.card',
        '.status-pill'
    ].join(',');

    const elements = document.querySelectorAll(selector);
    const scaleOnHover = 1.03; // ~3%

    elements.forEach((el) => {
        el.style.transformOrigin = 'center';
        el.style.transition = 'transform 160ms ease, box-shadow 160ms ease';

        function onEnter() {
            el.style.transform = `scale(${scaleOnHover})`;
        }

        function onLeave() {
            el.style.transform = 'scale(1)';
        }

        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
    });
})();