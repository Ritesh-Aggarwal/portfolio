// onload animation

$("#hi").hide().fadeIn(1000);
$("#name").hide().fadeIn(1500);

// scroll Animation

var slideUp = {
    distance: '100px',
    origin: 'bottom',
    opacity: null,
};
ScrollReveal().reveal("#skills",slideUp);
ScrollReveal().reveal("#projects",slideUp);




