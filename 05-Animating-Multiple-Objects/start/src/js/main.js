(function($) {
    
	// var img = $('img'),
	// 	h2 = $('h2'),
	// 	h1 = $('h1'),
	// 	intro = $('.intro'),
	// 	listItem = $('ul li');



  const img = $("img");
  const h2 = $("h2");
  const h1 = $("h1");
  const intro = $(".intro");
  const listItems = $("ul li");
  const tl = new TimelineLite; // it's common to name timeline 'tl'

	// Animating Multiple Objects

  tl
    .from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut})
    .from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
    .from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
    .from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15')
    .from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut}, '-=0.15');
})(jQuery);