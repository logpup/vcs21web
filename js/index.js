$(document).ready(function(){
    // Artist Name Hover
    $("div").mouseover(function(){
        $("p").css("color", "red");
    });
})

$(document).ready(function(){
    // JSON Call Test
    
    $.getJSON("js/json/lorem.json", function(data) {
        
        // Slide Animation
        var prev = 1;
        var curr = 2;
        var next = 3;

        var gallery = data;
        var gallery_length = Object.keys(gallery).length;

        $(".gallery-view-img-prev").attr("src", gallery[prev].url);
        $(".gallery-view-img-curr").attr("src", gallery[curr].url);
        $(".gallery-view-img-next").attr("src", gallery[next].url);

        // forwards
        $(".gallery-view-arrow-button-right").click(function(){

            $(".gallery-view-img-container").addClass("left");

            prev += 1;
            curr += 1;
            next += 1;

            if (prev == -1) {
                prev = 5;
            }
            if (curr == -1) {
                curr = 5;
            }
            if (next == -1) {
                next = 5;
            }
            if (prev == 6) {
                prev = 0;
            }
            if (curr == 6) {
                curr = 0;
            }
            if (next == 6) {
                next = 0;
            }

            console.log("forw")

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
            console.log(prev);
            console.log(curr);
            console.log(next);
        });
        

        // backwards
        $(".gallery-view-arrow-button-left").click(function(){
            prev -= 1;
            curr -= 1;
            next -= 1;

            if (prev == -1) {
                prev = 5;
            }
            if (curr == -1) {
                curr = 5;
            }
            if (next == -1) {
                next = 5;
            }
            if (prev == 6) {
                prev = 0;
            }
            if (curr == 6) {
                curr = 0;
            }
            if (next == 6) {
                next = 0;
            }
            
            console.log("back")

            $('.gallery-view-img-container').on('animationend webkitAnimationEnd oAnimationEnd', function () {

                if (event.animationName == 'right') {
                    $(".gallery-view-img-container").removeClass("right");
                    $(".gallery-view-img-prev").attr("src", gallery[prev].url);
                    $(".gallery-view-img-curr").attr("src", gallery[curr].url);
                    $(".gallery-view-img-next").attr("src", gallery[next].url);
                }
            });
            $(".gallery-view-img-container").addClass("right");
            });
        })
});



