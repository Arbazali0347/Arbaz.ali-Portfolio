


document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress-container");
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let container = entry.target;
                let percentageText = container.querySelector(".percentage").textContent.trim();
                let percentage = parseInt(percentageText.replace("%", ""));
                let circle = container.querySelector(".progress");
                let circleLength = 283;
                let offset = circleLength - (percentage / 100) * circleLength;
                circle.style.transition = "stroke-dashoffset 1.5s ease-in-out"; // Smooth animation
                circle.style.strokeDasharray = circleLength;
                circle.style.strokeDashoffset = offset;

                observer.unobserve(container); // Animate only once
            }
        });
    }, { threshold: 0.6 });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
});



gsap.from(".page1 h1",{
    y:100,
    opacity:0,
    delay: 0.3,
    duration:0.9,
    stagger:0.4
});
gsap.from(".sec-heading p",{
    y:100,
    opacity:0,
    delay: 0.3,
    duration:0.9,
    stagger:0.4
});
gsap.from(".image-container",{
    y:100,
    opacity:0,
    delay: 0.9,
    duration:0.9,
    stagger:0.4
});
gsap.from(".nav-bar",{
    y:100,
    opacity:0,
    delay: 1.0,
    duration:0.9,
    stagger:0
});

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smoothMobile: true, // Mobile par bhi smooth scrolling enable
    multiplier: window.innerWidth < 768 ? 5 : 1 // Mobile par scroll speed 2x ho jayegi
});

