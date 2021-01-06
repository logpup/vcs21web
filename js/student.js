$("document").ready(function(){
    const mqSm = window.matchMedia('(max-width: 840px)')
    
    function sizeChangeSm(e){
        if (mqSm.matches) {
            console.log('hello');
            $(".showtitle-student").html("<marquee><h1><a>3 / DREAM . SPIRAL_RELAX</a></h1><marquee>");
            $(".showtitle-student h1").css("font-size", "9vw");
            $(".showtitle-student a").attr("href","index.html");
            $(".profile-photo").css("display", "none");
            $(".student-box-1 .piece-description1").css("transform", "scaleX(1)");
            $(".student-box-2 .piece-description2").css("transform", "scaleX(1)");
            $(".student-box-1 img").css("margin-bottom", "5vh");
            $(".student-box-1 .piece-description1").css("width", "75%");
            $(".student-box-1 .piece-description1").css("left", "20vw");
            $(".student-box-1").css("margin", "200px auto 200px auto");
            $(".student-box-2 img").css("margin-bottom", "5vh");
            $(".student-box-2 img").css("margin-left", "0vw");
            $(".student-box-2 .piece-description2").css("width", "75%");
            $(".student-box-2 .piece-description2").css("left", "20vw");
            $(".student-box-2").css("margin", "200px auto 200px auto");
        }
    }
    
    mqSm.addListener(sizeChangeSm);
    sizeChangeSm(mqSm);
    
    const mqLg = window.matchMedia('(min-width: 840px)')
    function sizeChangeLg(e){
        if (mqLg.matches) {
//            $(".student-box-1:not(:hover) .piece-description1").css("transform", "scaleX(0)");
//            $(".student-box-2:not(:hover) .piece-description2").css("transform", "scaleX(0)");
//            $(".student-box-1:hover .piece-description1").css("transform", "scaleX(1)");
//            $(".student-box-2:hover .piece-description2").css("transform", "scaleX(1)");
            $('.showtitle-student').html("<h1>3 / DREAM . SPIRAL_RELAX</h1>");
            $(".showtitle h1-student").css("font-size", "50px")
            $(".profile-photo").css("display", "initial");
            $(".student-box-1 img").css("margin-bottom", "0");
            $(".student-box-1 .piece-description1").css("width", "30%");
            $(".student-box-1 .piece-description1").css("left", "50vw");
            $(".student-box-1").css("margin", "0");
            $(".student-box-2 img").css("margin-bottom", "0");
            $(".student-box-2 img").css("margin-left", "4vw");
            $(".student-box-2 .piece-description2").css("width", "30%");
            $(".student-box-2").css("margin", "0");
        }
    }
    
    mqLg.addListener(sizeChangeLg);
    sizeChangeLg(mqLg);
})

