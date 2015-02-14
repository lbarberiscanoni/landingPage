//Simple social sharing
jQuery(document).ready(function($){
	$(".share-button").click(function(event){
		event.preventDefault();
		var window_size = "";
		var url = this.href;
		var domain = url.split("/")[2];
		switch(domain) {
			case "www.facebook.com":
			window_size = "width=585,height=368";
			break;
			case "www.twitter.com":
			window_size = "width=585,height=261";
			break;
			default:
			window_size = "width=585,height=511";
		}
		window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' + window_size);
	});
});
