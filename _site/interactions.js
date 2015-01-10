$(document).ready(function(){
	$('.col-md-2#gallery').on('click', function(event){
		event.preventDefault();
		event.stopPropagation();
		window.open('https://www.flickr.com/photos/126012464@N07/', 'open_window');
	});
});