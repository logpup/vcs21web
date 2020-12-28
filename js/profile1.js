$(document).ready(function(){
    // Grid Gallery
    $.getJSON("js/json/lorem.json", function(data) {
        // Initial Setup   
        var gallery = data;
        
        var gallery_length = Object.keys(gallery).length;
        var artist_list = [];
        var profile_artist_list = [];
        for (i = 0; i < gallery_length; i++){
            artist_list.push(gallery[i].artist);
        }
        for (j = 0; j < artist_list.length; j++) {
            if (artist_list[j] == 'Honda') {
             profile_artist_list.push(gallery[j].url);
            }
        }
        console.log (profile_artist_list);
        for (k = 0; k < profile_artist_list.length; k++){
            $(".grid-gallery").append($("<div></div>").append($("<a></a>").attr("href", "gallery.html").append($("<img>").attr({class:"grid-image", src: profile_artist_list[k]}))));
        }
    
    });
});