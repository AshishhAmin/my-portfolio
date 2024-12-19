document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(el) {
        el.style.opacity = 0;
        window.addEventListener('scroll', function() {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                el.style.transition = 'opacity 1s ease-in';
                el.style.opacity = 1;
            }
        });
    });
});
