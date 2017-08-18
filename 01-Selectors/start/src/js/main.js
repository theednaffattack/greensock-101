
    
	// JS code goes here
  // const header = $('#header'); // jquery ID
  // const h1 = $('h1'); // jQuery tag 
  // const intro = $('.intro'); // jQuery class
  // const firstItem = $('li:first-child'); // jQuery first item
  // const lastItem = $('li:last-child'); // jQuery last item

const header = document.getElementById('header');
const h1 = document.getElementsByTagName('h1');
const intro = document.getElementsByClassName('intro');
const firstItem = document.getElementsByClassName('list')[0].firstElementChild;
const secondItem = document.getElementsByClassName('list')[0].children[1];
const lastItem = document.getElementsByClassName('list')[0].lastElementChild;

  // TwwenLite instructions(inside 'to' method):
  // element to animate, duration in seconds, an object w/ what you want to animate
  // 'TweenLite.to(' == the TweenLite module 'to' method, so a destination to animate to?
  // 'header, 1' == animate the header, the animation time is one second
  // {opacity: 0, y: 50} == move it 50 pixels down and to opacity 0 (fade out)

  // TweenLite notes:
  //    - It's best practice to set a variable and refer to it throughout my timeline
  //      as shown with 'header' below.
  TweenLite.to(header, 1, {opacity: 0, x: 50});
 // this appears to be a self-calling function which also uses JavaScript's sideways apply thingee