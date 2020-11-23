/* Form Validation Example */
/* Personal Web Site-Visitor Form Validation */
/* See comments with TODO for code you need to implement */
const stateAbbreviations = [
  'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
  'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
  'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
  'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
  'VT','VI','VA','WA','WV','WI','WY'
 ];
         
function initValidation(formName) {

  let $form = $(formName);

  $(':input').change(function(ev){
    validateForm();
    if(!this.checkValidity())
      $(this).addClass("was-validated")

    //NOTE: we use 'was-validated' class so that you show the error indications only for the single field rather
    //than the whole form at once
  });
  
  $("#myform").submit(function(event){
    $form = $("#myform");
    let formEl=$form.get(0);

    event.preventDefault();  //prevent default browser submit
    event.stopPropagation(); //stop event bubbling

    validateForm();

    if (!formEl.checkValidity()){
      $(":input").addClass("was-validated")
    }
    else{
      //hide form
      //show thank you message
      $form.css("display", "none");
      $form.after("<h2>Thank You!</h2>");
    }
   

  });
}

function validateForm() {
  
  validateState("#state", "You must enter a valid two character state code, e.g., UT");
  
  //note, to validate the group, just passing in id of one of them, we will use name to check status of group
  validateCheckboxGroup("#newspaper", "you must select at least one!");
  
}
function validateState(id, msg){
  $el = $(id).val().toUpperCase();
  let valid=false;
  //get value from $el, and convert to upper case
  //check whether the value is in the stateAbbreviations array
  for(var i = 0; i < stateAbbreviations.length; i++) {
    if(stateAbbreviations[i] == $el)
    {
      valid = true;
      break;
    }
  }
  setElementValidity(id, valid, msg);
}

function validateCheckboxGroup(fieldName, message) {
  let valid=false;

  //TODO
  //Validate whether any of the checkboxes are checked. set 'valid' to true if checked
  let $boxes = $("input[type=checkbox");
  for(var i = 0; i < $boxes.length; i++) {
    if($boxes[i].checked)
    {
      valid = true;
      break;
    }
  }
  
  setElementValidity(fieldName, valid, message);
  
  return valid;
}

function setElementValidity(fieldName, valid, message){
  let $field=$(fieldName);
  let el = $field.get(0);
  if (valid) {  //it has a value
    el.setCustomValidity('');  //sets to no error message and field is valid   
  } else {

    el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat
    $field.addClass("error");    
  }
  
}