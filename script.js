// onload animation
setTimeout(function(){
	var app = document.getElementById('app');

var typewriter = new Typewriter(app,{delay:90,cursor:'|'});

typewriter
.typeString("Hi")
.pauseFor(1000)
.deleteAll()
.typeString("My name is Ritesh Aggarwal")
.start();
},100);

// scroll Animation

var slideUp = {
    distance: '100px',
    origin: 'bottom',
    opacity: null,
	easing : "ease-in"
};
ScrollReveal().reveal("#skills",slideUp);
ScrollReveal().reveal("#projects",slideUp);




