console.log("hello")
var x = document.getElementById("tab");

x.style.display = "none";


function calljs()
{
   
    var name = document.getElementById("fname").value;
    var phone = document.getElementById("cno").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var addr = document.getElementById("addr").value;
    console.log(name.toString());
    console.log(phone.toString());
    console.log(dob.toString());
    console.log(email.toString());
    console.log(addr.toString());
    var table = document.getElementById("table");
    var newRow = table.insertRow(table.length);
    col1 = newRow.insertCell(0);
    col2 = newRow.insertCell(1);
    col3 = newRow.insertCell(2);
    col4 = newRow.insertCell(3);
    col5 = newRow.insertCell(4);
    col6 = newRow.insertCell(5);
    var gender = "";
    if (document.getElementById('Male').checked) 
    {
      gender="Male";
    }
    else if(document.getElementById('Female').checked)
    {
      gender="Female";
    }
    else if(document.getElementById('Other').checked)
    {
      gender="Other";
    }
    col1.innerHTML = name.toString();
    col2.innerHTML = email.toString();
    col3.innerHTML = phone.toString();
    col4.innerHTML = gender.toString();
    col5.innerHTML = dob.toString();
    col6.innerHTML = addr.toString();
    document.getElementById("forms").reset();

};
function jspage() {

 var x = document.getElementById("tab");
 var f = document.getElementById("fm");
 var elem = document.getElementById("jsp");
  if (x.style.display === "none") {
    x.style.display = "block";
    f.style.display = "none";
    elem.innerHTML = "Register Now" 

  } else {
    x.style.display = "none";
    f.style.display = "block";
    elem.innerHTML = "Show Registeration"
  }
}
