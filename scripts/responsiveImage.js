$(window).ready(function(){
	if ($(window).width() <= 500) {	
		$("#video").hide();
		$(".fallback").show();
	}

	if ($(window).width() >= 500) {
		$("#video").show();
		$(".fallback").hide();
	}
}); 

$(window).resize(function(){
	if ($(window).width() <= 500) {	
		$("#video").hide();
		$(".fallback").show();
	}

	if ($(window).width() >= 500) {
		$("#video").show();
		$(".fallback").hide();
	}
}); 
