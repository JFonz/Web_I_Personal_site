function btnClicked(clicked){
    // put buttons into variables
    var home = document.getElementById("home");
    var members = document.getElementById("members");
    var videos = document.getElementById("videos");

    //use switch statement to show correct content and hide the rest
    switch(clicked){
        case "btnh":
            home.style.display = "block";
            members.style.display = "hidden";
            videos.style.display = "hidden";
            break;
        case "btnm":
            home.style.display = "hidden";
            members.style.display = "block";
            videos.style.display = "hidden";
            break;
        case "btnv":
            home.style.display = "hidden";
            members.style.display = "hidden";
            videos.style.display = "block";
            break;
        default:
            home.style.display = "block";
            members.style.display = "hidden";
            videos.style.display = "hidden";
            break;
    }
}

window.addEventListener("DOMContentLoaded", function(){
    //add event listeners
    document.getElementById("btnh").addEventListener("click", function(){btnClicked("btnh");});
    document.getElementById("btnm").addEventListener("click", function(){btnClicked("btnm");});
    document.getElementById("btnv").addEventListener("click", function(){btnClicked("btnv");});
});