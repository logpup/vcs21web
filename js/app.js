$("document").ready(function(){
    const mqSm = window.matchMedia('(max-width: 840px)')
    
    function sizeChangeSm(e){
        if (mqSm.matches) {
            console.log('hello');
            $(".showtitle").html("<marquee><h1>3 / DREAM . SPIRAL_RELAX</h1><marquee>");
            $(".showtitle h1").css("font-size", "8vw")
            $(".sva-vcs span").css("font-size", "3.5vw");
            $(".info span").css("font-size", "3.5vw");
            $(".sva-vcs span").css("color", "blue");
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
            $(".sva-vcs span").css("font-size", "30px");
            $(".sva-vcs span").css("color", "red");
            $(".info span").css("font-size", "30px");
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
