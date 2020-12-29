$(document).ready(function(){
    // Grid Gallery
    $.getJSON("js/json/lorem.json", function(data) {
        // Initial Setup   
        var gallery = data;
        var gallery_length = Object.keys(gallery).length;
        var artist_list = [];
        var profile_artist_work_id = [];
        var profile_artist_work_url = [];
        var profile_artist_work_artist_id = [];
        var profile_artist_work_dims = [];
        var profile_artist_work_artist = [];
        var profile_artist_work_title = [];
        var profile_artist_work_year = [];

        // For Loops: List of Artists > Specific Artist - url, artist_id, dimensions
        for (i = 0; i < gallery_length; i++){
            artist_list.push(gallery[i].artist);
        }
        for (j = 0; j < artist_list.length; j++) {
            if (artist_list[j] == 'Mina al Huquail') {
             profile_artist_work_id.push(gallery[j].id);
             profile_artist_work_url.push(gallery[j].url);
             profile_artist_work_artist_id.push(gallery[j].artist_id);
             profile_artist_work_dims.push([gallery[j].width, gallery[j].height]);
             profile_artist_work_artist.push(gallery[j].artist);
             profile_artist_work_title.push(gallery[j].title);
             profile_artist_work_year.push(gallery[j].year);
            }
        }
        console.log (profile_artist_work_dims);

        // For Loops: Sizing for gallery
        for (k = 0; k < profile_artist_work_url.length; k++){
            if (profile_artist_work_dims[k][0] >= profile_artist_work_dims[k][1]) {
                $(".grid-gallery").append($("<div></div>").attr("class", "gallery-item").append($("<img>").attr({class:"grid-image", src: profile_artist_work_url[k], title: profile_artist_work_title[k],  artist: profile_artist_work_artist[k], year: profile_artist_work_year[k]}).css("width", "100%")));
            } 

            else if (profile_artist_work_dims[k][0] < profile_artist_work_dims[k][1]) {
                
                $(".grid-gallery").append($("<div></div>").attr("class", "gallery-item").append($("<img>").attr({class:"grid-image", src: profile_artist_work_url[k], title: profile_artist_work_title[k],  artist: profile_artist_work_artist[k], year: profile_artist_work_year[k]}).css("height", "100%")));
            }
        }

        //Pop Up
        $(".gallery-item").click(function(){
            var url = $(this).find("img").attr("src");
            var title = $(this).find("img").attr("title");
            var artist = $(this).find("img").attr("artist");
            var year = $(this).find("img").attr("year");
            $(".gallery-pop-up-container").find(".pop-up-image").attr("src", url);
            $(".work-title").html(title);
            $(".artist-name").html(artist);
            $(".year-made").html(year);
            $(".gallery-pop-up-container").css("display", "initial");
        });

        $(".cross").click(function(){
            $(".gallery-pop-up-container").css("display", "none");
        });
    
    });
});