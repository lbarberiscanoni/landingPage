$(window).ready(function(){
	if ($(window).width() <= 500) {
		$("#video source").hide();
		$("#video img").show();
	}

	if ($(window).width() >= 500) {
		$("#video img").hide();
		$("#video source").show();
	}
}

$(window).resize(function(){
	if ($(window).width() <= 500) {
		$("#video source").hide();
		$("#video img").show();
	}

	if ($(window).width() >= 500) {
		$("#video img").hide();
		$("#video source").show();
	}
}
