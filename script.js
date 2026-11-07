
const progressBars = document.querySelectorAll(".progress");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const bar = entry.target;
            const targetWidth = bar.getAttribute("data-width");

            bar.style.width = targetWidth;

            observer.unobserve(bar);
        }

    });

}, {
    threshold: 0.3
});

progressBars.forEach(bar => {
    observer.observe(bar);
});
