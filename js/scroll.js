
$("document").ready(function(){
  var user = $(document).scrollTop();
  console.log(user);
  var doc = $(document).height();
  console.log(doc);
  var w = $(window).width();
  console.log(w + " window width");

  function resize() {
    var doc = $(document).height();
    var w = $(window).width();
    console.log(doc);
    $(window).scroll(function(){
      var user = $(document).scrollTop();
      console.log(user);
      $("#top-scroll").css({width: 5 + (user / doc) * 75 + "vw"})
    })
  }
  

  window.onresize = resize;
  resize();
  
});