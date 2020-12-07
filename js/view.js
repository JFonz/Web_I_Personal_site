function renderTable(containerId, visitors) {
    //renders table from global 'visitors' object array
    var $container = $(containerId);
    var html = `<table><tr><th>Name</th><th>Address</th><th>Phone</th><th>Email</th><th style="visibility: hidden;">Id</th><th>Actions</th></tr>`;

    for(var i = 0; i < visitors.length; i++) 
        html += `<tr><th>${visitors[i].fullName}</th><th>${visitors[i].fullAddress}</th><th>${visitors[i].cellPhone}</th><th>${visitors[i].email}</th><th style="visibility: hidden;">${visitors[i].id}</th><th><a href="#" onClick="editVisitor(${visitors[i].id})">edit</a>    <a href="#" onClick="deleteVisitor(${visitors[i].id})">delete</a></th>`;

    html += "</table>";

    $container.html(html);
}

function showVisitors()  {
    //shows visitor container and hides all other site content containers 
    var $home = $("#home");
    var $members = $("#members");
    var $videos = $("#videos");
    var $log = $("#visitors");

    $home.css("display", "none");
    $members.css("display", "none");
    $videos.css("display", "none");
    $log.css("display", "block");
    $("#log-visit").css("display", "none");
}

function showList() {
    //shows visitor list and hides form
    $("#home").css("display", "none");
    $("#members").css("display", "none");
    $("#videos").css("display", "none"); 
    $("#log-visit").css("display", "none");
    $("#visitors").css("display", "block");
    renderTable("#vtable", visitors);
}

function showForm() {
    //shows visitor form and hides list
    $("#log-visit").css("display", "block");
    $("#visitors").css("display", "none");
}

function clearForm() {
    //clears values on inputs so next time form is loaded they don't have old contents
    var $form = $("#myform")[0];

    for(var i = 0; i < $form.length - 1; i++) {
        if($form[i].type == "text")
            $form[i].value = "";
        else
            $form[i].checked = false;
    }
}