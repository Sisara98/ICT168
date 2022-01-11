function validateform(){
    var a= document.forms["Myform"]["stdName"].value;
    var b= document.forms["Myform"]["stdRegNum"].value;
    if (a=="") {
        alert("name filled out");
        return false;
        
    }
    if (b=="") {
        alert("Reg nu filled out");
        return false;
    }
}