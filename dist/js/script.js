document.getElementById("year").innerHTML = new Date().getFullYear();

lightbox.option({
	'resizeDuration': 100,
	'wrapAround': true,
	'alwaysShowNavOnTouchDevices': true,
});

const $mediaElements = $('.media');

$('.filter_link').click(function (e) {
	e.preventDefault();
	const filterVal = $(this).data('filter');
	if (filterVal === 'all') {
		$mediaElements.show();
	} else {
		$mediaElements.hide().filter('.' + filterVal).show();
	}
});