// (function($) {
    
// 	var img = $('img');

// 	// Simple Tween
	

// })(jQuery);

var img = document.querySelector('img');
var h2 = document.querySelector('h2');

// TweenLite.from(img, 1, {x: -200})
// TweenLite.fromTo(img, 1, {x: -200}, {x: 200})
// TweenLite.set(img, {x: -200}, {x: 200}) // *note: no duration
TweenLite.from(img, 1, {x: 200})
TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});
