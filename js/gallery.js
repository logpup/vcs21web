$(document).ready(function(){
    // JSON Call Test
    
    $.getJSON("js/json/lorem.json", function(data) {
        var prev = 1;
        var curr = 2;
        var next = 3;
        
        var gallery = data;

        $(".gallery-view-img-prev").attr("src", gallery[prev].url);
        $(".gallery-view-img-curr").attr("src", gallery[curr].url);
        $(".gallery-view-img-next").attr("src", gallery[next].url);

        // $(".gallery-view-img-container-prev").prepend("<img  class='gallery-view-img gallery-view-img-prev' src=" + gallery[n-1].url + " >");
        // $(".gallery-view-img-container-curr").prepend("<img class='gallery-view-img gallery-view-img-curr' src=" + gallery[n].url + " >");
        // $(".gallery-view-img-container-next").prepend("<img class='gallery-view-img gallery-view-img-next' src=" + gallery[n+1].url + " >");

        // Slide Animation

        // forwards
        $(".gallery-view-arrow-button-right").click(function(){

            $(".gallery-view-img-container").addClass("left");

            prev += 1;
            curr += 1;
            next += 1;

            $('.gallery-view-img-container').on('animationend webkitAnimationEnd oAnimationEnd', function () {

                if (event.animationName == 'left') {
                    $(".gallery-view-img-container").removeClass("left");
                    $(".gallery-view-img-prev").attr("src", gallery[prev].url);
                    $(".gallery-view-img-curr").attr("src", gallery[curr].url);
                    $(".gallery-view-img-next").attr("src", gallery[next].url);
                    console.log(curr);
                }

            });

        });

        // backwards
        $(".gallery-view-arrow-button-left").click(function(){
            $(".gallery-view-img-container").addClass("right");
            });

            prev -= 1;
            curr -= 1;
            next -= 1;

            $('.gallery-view-img-container').on('animationend webkitAnimationEnd oAnimationEnd', function () {

                if (event.animationName == 'right') {
                    $(".gallery-view-img-container").removeClass("right");
                    $(".gallery-view-img-prev").attr("src", gallery[prev].url);
                    $(".gallery-view-img-curr").attr("src", gallery[curr].url);
                    $(".gallery-view-img-next").attr("src", gallery[next].url);
                    console.log(curr);
                }
                
            });

        })

    
});