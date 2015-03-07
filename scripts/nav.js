$(window).ready(function(){
	if ($(window).width() <= 500) {	
		$("nav.full section").hide();
	}

	if ($(window).width() >= 500) {
		$("nav.full section").show();
	}
}); 

$(window).resize(function(){
	if ($(window).width() <= 500) {	
		$("nav.full section").hide();
	}

	if ($(window).width() >= 500) {
		$("nav.full section").show();
	}
}); 
