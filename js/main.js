function showClicked(clicked){
    var $home = $("#home");
    var $members = $("#members");
    var $videos = $("#videos");

    switch(clicked){
        case "btnh":
            $home.css("display", "block");
            $members.css("display", "none");
            $videos.css("display", "none");
            break;
        case "btnm":
            $home.css("display", "none");
            $members.css("display", "block");
            $videos.css("display", "none");
            break;
        case "btnv":
            $home.css("display", "none");
            $members.css("display", "none");
            $videos.css("display", "block");
            break;
        default:
            $home.css("display", "block");
            $members.css("display", "none");
            $videos.css("display", "none");
            break;
    }
}

$(document).ready(function() {
    $("#btnh").click(function(){showClicked("btnh")});
    $("#btnm").click(function(){showClicked("btnm")});
    $("#btnv").click(function(){showClicked("btnv")});
})