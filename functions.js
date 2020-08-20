

function imageFunction(display,changeInto){
    document.getElementById(display).src = changeInto;
}




// do down here
function preventFormSubmit() {
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener('submit', function(event) {
      event.preventDefault();
      });
    }
  }
  window.addEventListener('load', preventFormSubmit);    
      
      
  function handleFormSubmit(formObject) {
    google.script.run.processForm(formObject);
    document.getElementById("myForm").reset();
  }
  function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
  }
  /* @Process Form */
  function processForm(formObject) {
    var url = "https://docs.google.com/spreadsheets/d/1y8xY6-mcrjE_TWrvw6rcHPQZS8S9QXaqzRoUuP7_9kg/edit#gid=0";
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Data");
    
    ws.appendRow([formObject.first_name,
                  formObject.last_name,
                  formObject.gender,
                  formObject.dateOfBirth,
                  formObject.email,
                  formObject.phone]);
  }