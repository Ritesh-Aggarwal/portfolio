$("#hi").hide().fadeIn(1500);
$("#name").hide().fadeIn(2000);

setTimeout(function () { 
	$("#imgi").removeClass('shadow-soft');
	setTimeout(function() {
		$("#imgi").addClass('shadow-inset');
	}, 200);
	setTimeout(function() {
		$("#imgi").removeClass('shadow-inset');
	}, 500);
	setTimeout(function() {
		$("#imgi").addClass('shadow-soft');
	}, 600);
 },2000);



