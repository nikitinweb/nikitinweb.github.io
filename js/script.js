$(document).ready(function() {
	var link = $('.header-mobile__link'),
			nav_block = $('.header-nav'),
			nav_link = $('.header-nav__link');

	link.click(function() {
		link.toggleClass('header-mobile__link_active');
		nav_block.toggleClass('header-mobile__nav');
		nav_link.toggle();
	});
});