// (function($) {
    
// 	var img = $('img'),
// 		h2 = $('h2');

// 	// Simple Tween
// 	TweenLite.from(img, 1, {x: -200, ease:Power0.easeOut});
// 	TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});

// })(jQuery);


  const img = document.querySelector('img');
  const h2 = document.querySelector('h2');


  // Simple Tween
  // TweenLite.from(img, 1, {x: -200, ease:Power0.easeOut});
  TweenLite.from(h2, 1, {autoAlpha: 0, delay: 1});
  TweenLite.from(img, 1, {x: -200, ease:Back.easeOut});
  // TweenLite.from(img, 1, {x: -200, ease:Bounce.easeOut});
  // TweenLite.from(img, 1, {x: -200, ease:Circ.easeOut});
  // TweenLite.from(img, 1, {x: -200, ease:Elastic.easeOut});
  // TweenLite.from(img, 1, {x: -200, ease:Expo.easeOut});

  // TweenLite.from(img, 1, {x: -200, ease:RoughEase.ease.config({ template: Power0.easeOut })});
  // TweenLite.from(img, 1, {x: -200, ease:SlowMo.easeOut}); // slowmo
  // TweenLite.from(img, 1, {x: -200, ease:SteppedEase.easeOut}); // steppedease
