var PhoneV, NameV, AddressV, EmailV, MessageV;

function readFom(e) {
  e.preventDefault();
  PhoneV = document.getElementById("Phone").value;
  NameV = document.getElementById("Name").value;
  AddressV = document.getElementById("Address").value;
  EmailV = document.getElementById("Email").value;
  MessageV = document.getElementById("Message").value;
  console.log(PhoneV, NameV, AddressV, EmailV, MessageV);
  console.log(e.submitter.id);
  if(e.submitter.id=="insert")insert();
  if(e.submitter.id=="update")update();
  if(e.submitter.id=="delete")del();

}
document.getElementById("f1").addEventListener("submit",readFom);
// document.getElementById("insert").onclick = 
function insert() {
  // readFom();
  
  firebase
    .database()
    .ref("AT/" + PhoneV)
    .set({
      Phone: PhoneV,
      Name: NameV,
      Address: AddressV,
      Email: EmailV,
      Message: MessageV,
    });
  alert("Data Inserted");

  document.getElementById("Phone").value = "";
  document.getElementById("Name").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Message").value ="";
};


// document.getElementById("update").onclick = 
function update() {
  // readFom();
  
  firebase
    .database()
    .ref("AT/" + PhoneV)
    .update({
      Name: NameV,
      Address: AddressV,
      Email: EmailV,
      Message: MessageV,
    });
  alert("Data Update");
  document.getElementById("Phone").value = "";
  document.getElementById("Name").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Message").value ="";
};
// document.getElementById("delete").onclick = 
function del() {
  // readFom();
  
  firebase
    .database()
    .ref("AT/" + PhoneV)
    .remove();
  alert("Data Deleted");
  document.getElementById("Phone").value = "";
  document.getElementById("Name").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Message").value ="";
};
