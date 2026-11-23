const images = document.querySelectorAll('.image, .content2');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

}, {
    threshold: 0.2
});

images.forEach((image) => {
    observer.observe(image);
});