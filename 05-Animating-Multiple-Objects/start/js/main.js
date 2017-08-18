!function(e){
  // const a=e("img");
  // const o=e("h2");
  // const r=e("h1");
  // const t=e(".intro");
  // const u=e("ul li");
  // const s=new TimelineLite;


  let img = $("img");
  let h2 = $("h2");
  let h1 = $("h1");
  let intro = $(".intro");
  let listItems = $("ul li");
  let tl = new TimelineLite; // it's common to name timeline 'tl'

  // Animating a TimeLine
  tl
    .from(h1, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.2})
    .from(intro, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.4})
    .from(img, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.8})
    .from(h2, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut, delay: 0.9})
    .from(listItem, 0.3, {y: -15, autoAlpha: 0, ease:Power1.easeOut, delay: 1});

  // s.from(r,.3,{
  //   y:-15,
  //   autoAlpha:0,
  //   ease:Power1.easeOut
  // }).from(t,.3,{
  //   y:-15,
  //   autoAlpha:0,
  //   ease:Power1.easeOut
  // },"-=0.15").from(a,.3,{
  //   y:-15,
  //   autoAlpha:0,
  //   ease:Power1.easeOut
  // },"-=0.15").from(o,.3,{
  //   y:-15,autoAlpha:0,
  //   ease:Power1.easeOut
  // },"-=0.15").from(u,.3,{
  //   y:-15,
  //   autoAlpha:0,
  //   ease:Power1.easeOut
  // },"-=0.15")
}(jQuery);