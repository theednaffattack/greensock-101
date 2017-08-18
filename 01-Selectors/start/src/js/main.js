(function($) {
    
	// JS code goes here
	// alert(1);
  const header = $('#header');

  // TwwenLite instructions(inside 'to' method):
  // element to animate, duration in seconds, an object w/ what you want to animate
  // 'TweenLite.to(' == the TweenLite module 'to' method, so a destination to animate to?
  // 'header, 1' == animate the header, the animation time is one second
  // {opacity: 0, y: 50} == move it 50 pixels down and to opacity 0 (fade out)
  TweenLite.to(header, 1, {opacity: 0, y: 50});
})(jQuery);