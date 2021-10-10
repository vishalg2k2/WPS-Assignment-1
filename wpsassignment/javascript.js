//code to vaildate pincode
function validatePincode(){
    var pin=document.getElementById('pincode').value;
    var rtag=document.getElementById('pinerror');
    var length=pin.length;
    if(pin==""){
        rtag.innerHTML="Pin Code Cannot Be Empty";
        return false;
    }
    else if(length<6 || length>6){
        rtag.innerHTML="Pin Code must contain exact 6 characters";
        return false;
    }
    else{
        rtag.innerHTML="";
    }

}
//code to vaildate patientname
function validateUsername(){
    var user=document.getElementById('username').value;
    var stag=document.getElementById('usererror');
    if(user==""){
        stag.innerHTML="Cannot Be Empty";
}
}
//code to vaildate Address
function validateAddress(){
    var adr=document.getElementById('address').value;
    var rtag=document.getElementById('adderror');
    if(adr==""){
        rtag.innerHTML="Cannot Be Empty";
        return false;
}
}


