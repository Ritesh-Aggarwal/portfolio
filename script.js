// onload animation
setTimeout(function(){
	var app = document.getElementById('rite');

var typewriter = new Typewriter(rite,{delay:90,cursor:'|'});

typewriter
.typeString("Hi")
.pauseFor(1000)
.deleteAll()
.typeString("My name is Ritesh Aggarwal")
.start();
},800);

// scroll Animation

var slideUp = {
    distance: '100px',
    origin: 'bottom',
    opacity: null,
	easing : "ease-in"
};
ScrollReveal().reveal("#skills",slideUp);
ScrollReveal().reveal("#projects",slideUp);




