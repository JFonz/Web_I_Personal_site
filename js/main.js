function showClicked(clicked){
    var home = document.getElementById("home");
    var members = document.getElementById("members");
    var videos = document.getElementById("videos");

    switch(clicked){
        case "btnh":
            home.style.display = "block";
            members.style.display = "none";
            videos.style.display = "none";
            break;
        case "btnm":
            home.style.display = "none";
            members.style.display = "block";
            videos.style.display = "none";
            break;
        case "btnv":
            home.style.display = "none";
            members.style.display = "none";
            videos.style.display = "block";
            break;
        default:
            home.style.display = "block";
            members.style.display = "none";
            videos.style.display = "none";
            break;
    }
}

window.addEventListener("DOMContentLoaded", function(){
    //add event listeners
    document.getElementById("btnh").addEventListener("click", function(){showClicked("btnh");});
    document.getElementById("btnm").addEventListener("click", function(){showClicked("btnm");});
    document.getElementById("btnv").addEventListener("click", function(){showClicked("btnv");});
});