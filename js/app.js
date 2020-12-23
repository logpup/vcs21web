$(document).ready(function(){
    // title hover function
    $("#home-title").mouseover(
        function() {
            $("#home-title").css("color", "blue");
            $("#home-title").html("3Dream<br>Spiral_relax")
        })
    .mouseout(function(){
        $("#home-title").css("color", "black");
        $("#home-title").html("VCS '21<br>UDG SENIORS")
    })

    // sva flower hover function
    $("#sva-logo").mouseover(
        $("sva-logo").html("<img")
    )
})



