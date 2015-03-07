$(window).ready(function(){
	if ($(window).width() <= 500) {	
		$("nav.full").hide();
	}

	if ($(window).width() >= 500) {
		$("nav.full").show();
	}
}); 

$(window).resize(function(){
	if ($(window).width() <= 500) {	
		$("nav.full").hide();
	}

	if ($(window).width() >= 500) {
		$("nav.full").show();
	}
}); 
