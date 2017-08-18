(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		tl = new TimelineLite();

	// Controlling Timeline Playback
	tl
		.from(h1, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.add('intro')
		.from(intro, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(img, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(h2, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(listItem, 1, {y: -15, autoAlpha: 0, ease:Power1.easeOut});

	tl.pause();

	$('#btnPlay').on('click', function() {
		tl.play();
	});

	$('#btnPause').on('click', function() {
		tl.pause();
	});

	$('#btnResume').on('click', function() {
		tl.resume();
	});

	$('#btnReverse').on('click', function() {
		tl.reverse();
	});

	$('#btnSpeedUp').on('click', function() {
		tl.timeScale(8); // 8 times the original speed
	});

	$('#btnSlowDown').on('click', function() {
		tl.timescale(0.5); // 50% of the original speed
	});

	$('#btnSeek').on('click', function() {
		tl.seek(1); // this jumps to an absolute position in the timeline. takes seconds or labels
	});

	// go to 50% button on the screen
	$('#btnProgress').on('click', function() {
		tl.progress(0.5); // it leaps to this point on the timeline 1 = 100%
	});

	$('#btnRestart').on('click', function() {
		tl.restart();
	});

})(jQuery);






