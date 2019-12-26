jQuery(document).ready(function($) {

    // jQuery placeholder
    $("input, textarea").placeholder();

    // Scroll to top button
    $('#back-top a').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

});