$(document).ready(function(){
    // Slide Animation
    $(".gallery-view-arrow-button-right").click(function(){
      $(".gallery-view-img-container").addClass("left");
    });

    $(".gallery-view-arrow-button-left").click(function(){
        $(".gallery-view-img-container").addClass("right");
      });


      $('.gallery-view-img-container').on('animationend webkitAnimationEnd oAnimationEnd', function () {
        if (event.animationName == 'right') {
            $(".gallery-view-img-container").removeClass("right");

        }
        if (event.animationName == 'left') {
            $(".gallery-view-img-container").removeClass("left");
        }
    });
});