$(document).ready(function(){
   
    initValidation("#myform");   //in validation.js, should set up submit event handler
 
    //initialize any of your button or other event handlers 
    $("#btnh").click(function(){showClicked("btnh")});
    $("#btnm").click(function(){showClicked("btnm")});
    $("#btnv").click(function(){showClicked("btnv")});
    $("#btnlv").click(function(){loadVisitors();});
    $("#nVisitor").click(function(){addVisitor();});
    $("#cancel").click(function(){if(window.confirm("Are you sure you want to cancel?")) showList();})
 });
 
 function loadVisitors() {
    //called when 'visitors' menu item is clicked 
    //calls view 'showVisitors'
    showVisitors(); 
    //calls view 'renderTable'
    renderTable("#vtable", visitors);
 }
 
 function submitForm() {
     //called on form submit. Gets contents of form, creates visitor object,
     var $form = $("#myform")[0];
     //calls model 'modelAddVisitor' function
     modelAddVisitor(new Visitor(visitors.length + 1, $form[0].value, $form[1].value, $form[2].value, $form[3].value, $form[4].value, $form[5].value, $form[7].value, $form[6].value, {"google":$form[8].checked, "newspaper":$form[9].checked, "friend":$form[10].checked}));
     //calls view 'renderTable'
     showList(); 
 }
 
 function addVisitor() {
   //called on 'click' of 'New Visitor' button 
   //calls view 'clearForm' to clear form contents
   clearForm();
   //calls view 'showForm'
   showForm();
 }
 
 function deleteVisitor(id) {
    //called on 'click' of 'delete' icon in visitor list 
    //calls model.js modelDeleteVisitor
    modelDeleteVisitor(id);
    //calls view 'renderTable'
    renderTable("#vtable", visitors); 
 }

 function editVisitor(id) {
     clearForm();
     modelUpdateVisitor(visitors[findVisitorIndex(id)]);
     showForm();
 }

 function showClicked(clicked){
    var $home = $("#home");
    var $members = $("#members");
    var $videos = $("#videos");
    var $log = $("#visitors");

    switch(clicked){
        case "btnh":
            $home.css("display", "block");
            $members.css("display", "none");
            $videos.css("display", "none");
            $log.css("display", "none");
            break;
        case "btnm":
            $home.css("display", "none");
            $members.css("display", "block");
            $videos.css("display", "none");
            $log.css("display", "none");
            break;
        case "btnv":
            $home.css("display", "none");
            $members.css("display", "none");
            $videos.css("display", "block");
            $log.css("display", "none");
            break;
        default:
            $home.css("display", "block");
            $members.css("display", "none");
            $videos.css("display", "none");
            $log.css("display", "none");
            break;
    }
}