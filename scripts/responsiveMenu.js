$(window).ready(function(){
	if ($(window).width() <= 500) {	
		$("nav.full").hide();
		$("nav.mobile").show();
	}

	if ($(window).width() >= 500) {
		$("nav.full").show();
		$("nav.mobile").hide();
	}
}); 

$(window).resize(function(){
	if ($(window).width() <= 500) {	
		$("nav.full").hide();
		$("nav.mobile").show();
	}

	if ($(window).width() >= 500) {
		$("nav.full").show();
		$("nav.mobile").hide();
	}
}); 
