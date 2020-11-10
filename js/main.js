function showh(){
    document.getElementById("home").style.display = "block";
    document.getElementById("members").style.display = "none";
    document.getElementById("videos").style.display = "none";
}

function showm(){
    document.getElementById("home").style.display = "none";
    document.getElementById("members").style.display = "block";
    document.getElementById("videos").style.display = "none";
}

function showv(){
    document.getElementById("home").style.display = "none";
    document.getElementById("members").style.display = "none";
    document.getElementById("videos").style.display = "block";
}

window.addEventListener("DOMContentLoaded", function(){
    //add event listeners
    document.getElementById("btnh").addEventListener("click", showh);
    document.getElementById("btnm").addEventListener("click", showm);
    document.getElementById("btnv").addEventListener("click", showv);
});