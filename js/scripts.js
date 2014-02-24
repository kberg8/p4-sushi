// Make Foundation Go!
$(document).foundation();

// My Awesome Scripts!
$(document).ready(function(){

	$("h4").lettering();

	$('.fancybox').fancybox();

	// Map Location //
	new Maplace({
	show_markers: true,
	locations: [{
		lat: 47.6598832, 
		lon: -117.4235781,
		zoom: 18
		}]
	}).Load();


	console.log('Page Loaded. Lets Do this!');

}); 
