$("document").ready(function(){
    const mqSm = window.matchMedia('(max-width: 840px)')
    
    function sizeChangeSm(e){
        if (mqSm.matches) {
//            console.log('hello');
//            // Header Nav
//            $(".showtitle").html("<marquee><h1><a>3 / DREAM . SPIRAL_RELAX</a></h1><marquee>");
//            $(".showtitle h1").css("font-size", "9vw");
//            $(".showtitle a").attr("href","index.html");
//            $(".showtitle-student").html("<marquee><h1><a>3 / DREAM . SPIRAL_RELAX</a></h1><marquee>");
//            $(".showtitle-student h1").css("font-size", "9vw");
//            $(".showtitle-student a").attr("href","index.html");
//            $(".sva-vcs span").css("font-size", "5vw");
//            $(".sva-vcs span").html("VCS");
//            $(".info span").css("font-size", "5vw");
////            $(".sva-vcs span").css("color", "blue");
//            
//            // Downarrow
//            $(".downarrow").css("left", "43%");
//            
//            // Container box left
//            $(".container-box").css("width", "auto")
//            $(".container-box").css("height", "auto")
//
//            
//            $(".student-box-1").css("width", "100%");
//            $(".student-box-1").css("display", "inline"); 
//            
//            $(".student-box-1 img").css("margin", "0 auto 0 auto");
//            $(".student-box-1 h2").css("font-size", "45px");
//            $(".student-box-1 h3").css("margin", "0 auto 20vh auto");
//            
//            // Container box right
//            $(".student-box-2").css("width", "100%");
//            $(".student-box-2").css("display", "inline"); 
//            $(".student-box-2").css("padding", "11vw");    
//            $(".student-box-2 img").css("margin", "0 auto 0 auto");
//            $(".student-box-2 h2").css("font-size", "45px");
//            $(".student-box-2 h3").css("margin", "0 auto 20vh auto");
        }
    }
    
    mqSm.addListener(sizeChangeSm);
    sizeChangeSm(mqSm);
    
    const mqLg = window.matchMedia('(min-width: 840px)')
    function sizeChangeLg(e){
        if (mqLg.matches) {
            console.log('bye');
            $('.showtitle').html("<h1>3 / DREAM . SPIRAL_RELAX</h1>");
            $(".showtitle h1").css("font-size", "50px")
            $('.showtitle-student').html("<h1>3 / DREAM . SPIRAL_RELAX</h1>");
            $(".showtitle h1-student").css("font-size", "50px")
            $(".sva-vcs span").css("font-size", "30px");
//            $(".sva-vcs span").css("color", "red");
            $(".info span").css("font-size", "30px");
            
            $(".downarrow").css("left", "45%");
            
            $(".container-box").css("width", "100%")
            $(".container-box").css("height", "100vh")
            
            $(".student-box-1").css("width", "50%");
            $(".student-box-1").css("display", "flex"); 
            
            $(".student-box-1 img").css("margin", "0 ");
            $(".student-box-1 h2").css("font-size", "50px");
            $(".student-box-1 h3").css("margin", "0");
            
            $(".student-box-2").css("width", "50%");
            $(".student-box-2").css("display", "flex"); 
            $(".student-box-2").css("padding", "0vw");    
            $(".student-box-2 img").css("margin", "0");
            $(".student-box-2 h2").css("font-size", "50px");
            $(".student-box-2 h3").css("margin", "0");
            
//            $(".student-box-1").css("width", "50%");
//            $(".spacer-box-1").css)("width", "50%");
//            $(".student-box-2").css("width", "50%");
//            $(".spacer-box-2").css)("width", "50%");
        }
    }
    
    mqLg.addListener(sizeChangeLg);
    sizeChangeLg(mqLg);
})



//$(".showtitle").html("<marquee><h1>3 / DREAM . SPIRAL_RELAX</h1><marquee>");
//$(".sva-vcs span").css("font-size", "3.5vw")

//$('.showtitle').html("<div class="showtitle"><h1><a href="index.html">3 / DREAM . SPIRAL_RELAX</a></h1></div")



//<div class="showtitle">
//    <h1>
//        <a href="index.html">
//            3 / DREAM . SPIRAL_RELAX
//        </a>
//    </h1>
//</div>
