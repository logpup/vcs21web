$(document).ready(function(){
    // Grid Gallery
    $.getJSON("js/json/lorem.json", function(data) {
        // Initial Setup   
        var gallery = data;
        
        var gallery_length = Object.keys(gallery).length;
        var artist_list = [];
        var profile_artist_work = [];
        var profile_artist_work_id = [];
        var profile_artist_work_dims = [];
        var image_list = [];
        for (i = 0; i < gallery_length; i++){
            artist_list.push(gallery[i].artist);
        }
        for (j = 0; j < artist_list.length; j++) {
            if (artist_list[j] == 'Julia Colettes') {
             profile_artist_work.push(gallery[j].url);
             profile_artist_work_id.push(gallery[j].artist_id);
             profile_artist_work_dims.push([gallery[j].width, gallery[j].height]);
            }
        }
        console.log (profile_artist_work_dims);
        for (k = 0; k < profile_artist_work.length; k++){
            if (profile_artist_work_dims[k][0] >= profile_artist_work_dims[k][1]) {
                $(".grid-gallery").append($("<div></div>").attr("id", "test").append($("<a></a>").attr("href", "gallery.html").append($("<img>").attr({class:"grid-image", src: profile_artist_work[k]}).css("width", "100%"))));
            } else if (profile_artist_work_dims[k][0] < profile_artist_work_dims[k][1]) {
                $(".grid-gallery").append($("<div></div>").attr("id", "test").append($("<a></a>").attr("href", "gallery.html").append($("<img>").attr({class:"grid-image", src: profile_artist_work[k]}).css("height", "100%"))));
            }
        }

        //Pop Up
        $("#test").click(function(){
            $(".gallery-pop-up-container").css("display", "initial");
        });

        $(".cross").click(function(){
            $(".gallery-pop-up-container").css("display", "none");
        });
    
    });
});