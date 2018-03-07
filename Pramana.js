function validateNameForm(){
	var name=document.Nameform.name.value;    
  
if (name==null || name==""){  
  alert("Name required");  
  return false;  
	}
}
function validateEmail()  
{  
var x=document.myEmail.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address");  
  return false;  
  }  
}  
function validatePhone(){  
var num=document.myNumber.Phone.value;  
if (isNaN(num)){  
  document.getElementById("numloc").innerHTML="Enter Numeric value only";  
  return false;  
}else{  
  return true;  
  }  
}  