$(document).ready(function(){
    // title hover function
    $("#home-title").mouseover(
        function() {
            $("#home-title").css("color", "blue");
            $("#home-title").css("font-family", "MajorMono");
            $("#home-title").css("font-size", "3.5vw");
            $("#home-title").css("letter-spacing", "-2.5px");
            $("#home-title").css("line-height", "8vh");
            $("#home-title").html("3DREAM<br>SPIRAL_RELAX")
        })
    .mouseout(function(){
        $("#home-title").css("color", "black");
        $("#home-title").css("font-family", "Helvetica");
        $("#home-title").css("font-size", "3.5vw");
        $("#home-title").css("letter-spacing", "0px");
        $("#home-title").css("line-height", "8vh");
        $("#home-title").html("VCS '21<br>UDG SENIORS")
    })

    // sva flower hover function
    $("#sva-logo").mouseover(
        $("sva-logo").html("<img")
    )
})



