/*
How to add tweens to a timeline
How to use the labels 'relative' and 'absolute' positioning

## Relative Positioning
Relative Positioning of tweens on the timeline == how to overlap tweens with the previous tween
the last string argument in the 'from' timeline method is a relative time unit
it's value is applied relative to the parent 'from' block since the from blocks are synchronous

negative values are overlaps ex: '-=0.50' // an overlap of .15 seconds
positive values are delays ex: '+=1' // a delay of one second

## Absolute Positioning
The order is no longer following the chained order listed below but instead follow
absolute times passed to the 'from' method

these are expressed in numbers

## Labels
By using the add method you can add a 'label' to your timeline
by passing a label string as the last argument in a 'from' call you can synchronize
which labels play at which times
*/ 
(function($) {
    
	var img = $('img'),
		h2 = $('h2'),
		h1 = $('h1'),
		intro = $('.intro'),
		listItem = $('ul li'),
		tl = new TimelineLite();

	// Adding Tweens To A Timeline
	tl
		// Relative Positioning
		// .from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		// .from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '+=0.2')
		// .from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		// .from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
		// .from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15');

		// Absolute Positioning
		// .from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		// .from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '+=0.2')
		// .from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 3)
		// .from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 1.5)
		// .from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 2);

		// Labels
		.from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.add('intro')
		.from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
		.from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro')
		.from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro+=3')
		.from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, 'intro');

})(jQuery);