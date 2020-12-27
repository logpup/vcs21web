$(document).ready(function(){

    // JSON Call
    $.getJSON("js/json/lorem.json", function(data) {
        
        // Formatting Images Based on Width and Height

        // Initial Setup
        var prev = 0;
        var curr = 1;
        var next = 2;

        var gallery = data;
        var gallery_length = Object.keys(gallery).length;

        $(".gallery-view-img-prev").attr("src", gallery[prev].url);
        $(".gallery-view-img-curr").attr("src", gallery[curr].url);
        $(".gallery-view-img-next").attr("src", gallery[next].url);
        $(".gallery-view-piece-description-title").html(gallery[curr].title)
        $(".gallery-view-piece-description-artist").html(gallery[curr].artist)
        $(".gallery-view-piece-description-year").html(gallery[curr].year)

        console.log(gallery_length);
        

        // Slide Animation
        function slideLeft(){

            $(".gallery-view-img-container").addClass("left");

            prev += 1;
            curr += 1;
            next += 1;

            if (prev == -1) {
                prev = gallery_length - 1;
            }
            if (curr == -1) {
                curr = gallery_length - 1;
            }
            if (next == -1) {
                next = gallery_length - 1;
            }
            if (prev == gallery_length) {
                prev = 0;
            }
            if (curr == gallery_length) {
                curr = 0;
            }
            if (next == gallery_length) {
                next = 0;
            }

            $('.gallery-view-img-container').on('animationend webkitAnimationEnd oAnimationEnd', function () {

                if (event.animationName == 'left') {
                    
                    $(".gallery-view-img-container").removeClass("left");
                    $(".gallery-view-img-prev").attr("src", gallery[prev].url);
                    $(".gallery-view-img-curr").attr("src", gallery[curr].url);
                    $(".gallery-view-img-next").attr("src", gallery[next].url);
                    $(".gallery-view-piece-description-title").html(gallery[curr].title)
                    $(".gallery-view-piece-description-artist").html(gallery[curr].artist)
                    $(".gallery-view-piece-description-year").html(gallery[curr].year)
                }
                
            });

            console.log("FORW")
            console.log(prev);
            console.log(curr);
            console.log(next);
        };

        function slideRight(){
            $(".gallery-view-img-container").addClass("right");

            prev -= 1;
            curr -= 1;
            next -= 1;

            if (prev == -1) {
                prev = gallery_length - 1;
            }
            if (curr == -1) {
                curr = gallery_length - 1;
            }
            if (next == -1) {
                next = gallery_length - 1;
            }
            if (prev == gallery_length) {
                prev = 0;
            }
            if (curr == gallery_length) {
                curr = 0;
            }
            if (next == gallery_length) {
                next = 0;
            }

            $('.gallery-view-img-container').on('animationend webkitAnimationEnd oAnimationEnd', function () {

                if (event.animationName == 'right') {
                    $(".gallery-view-img-container").removeClass("right");
                    $(".gallery-view-img-prev").attr("src", gallery[prev].url);
                    $(".gallery-view-img-curr").attr("src", gallery[curr].url);
                    $(".gallery-view-img-next").attr("src", gallery[next].url);
                    $(".gallery-view-piece-description-title").html(gallery[curr].title)
                    $(".gallery-view-piece-description-artist").html(gallery[curr].artist)
                    $(".gallery-view-piece-description-year").html(gallery[curr].year)
                }
            });
            console.log("BACK");
            console.log(prev);
            console.log(curr);
            console.log(next);
        };

        // FORWARD CLICK
        $(".gallery-view-arrow-button-right").click(function(){
                slideLeft();
        });
        

        // BACKWARD CLICK
        $(".gallery-view-arrow-button-left").click(function(){
                slideRight();
        });

        // KEYPRESS SETUP
        window.addEventListener("keydown", checkKeyDown, false);
        window.addEventListener("keyup", checkKeyUp, false);

        // KEYDOWN
        function checkKeyDown(key){
            if (key.keyCode == "37"){
                $('.gallery-view-arrow-button-left').addClass("hover");
                }
            if (key.keyCode == "39"){
                $('.gallery-view-arrow-button-right').addClass("hover");
                }
        }

        // KEYUP
        function checkKeyUp(key){
            if (key.keyCode == "37"){
                $(".gallery-view-arrow-button-left").removeClass("hover");
                slideRight();
                }
            if (key.keyCode == "39"){
                $(".gallery-view-arrow-button-right").removeClass("hover");
                slideLeft();
                }
        } 
    });
});