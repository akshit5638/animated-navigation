let menu = document.querySelector('.left i');
let close = document.querySelector('.nav i');
menu.addEventListener('click', () => {
    tl.play();
})
close.addEventListener('click', () => {
    tl.reverse();
})
let tl = gsap.timeline();
tl.to('.nav', {
    right: 0,
    duration: 1
})
tl.from('.nav h1', {
    x: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})
tl.from('.nav i', {
    opacity: 0
})
tl.pause();