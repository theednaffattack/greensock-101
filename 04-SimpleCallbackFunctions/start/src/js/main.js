(function($) {
    
	const img = $('img');
	const	h2 = $('h2');
  let i = 0;

	// Simple Callback Functions
	TweenLite.from(img, 1, {
    x: -200,
    ease:Power1.easeInOut,
    onStart: onStart,
    onUpdate: onUpdate,
    onComplete: onComplete,
  });

  function onStart() {
    console.log('animation is starting');
  }

  function onUpdate() {
    h2.text(i++);
  }
  
  function onComplete() {
    console.log('animation is completed');
  }
})(jQuery);