$("document").ready(function(){
    $(".info").click(function(){
        $(".info-popup").removeClass("hide");
        $(".info-popup").addClass("show");
    })
    $(".info-popup-arrow").click(function(){
        $(".info-popup").addClass("hide");
        $(".info-popup").removeClass("show");
    })
    
    let mql = window.matchMedia('(max-width: 600px)');
    document.querySelector(".mq-value").innerText = mql.matches;
});


