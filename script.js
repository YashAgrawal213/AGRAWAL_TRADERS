var PhoneV, NameV, AddressV, EmailV;

function readFom() {
  PhoneV = document.getElementById("Phone").value;
  NameV = document.getElementById("Name").value;
  AddressV = document.getElementById("Address").value;
  EmailV = document.getElementById("Email").value;
  console.log(PhoneV, NameV, AddressV, EmailV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("AT/" + PhoneV)
    .set({
      Phone: PhoneV,
      Name: NameV,
      Address: AddressV,
      Email: EmailV,
    });
  alert("Data Inserted");
  document.getElementById("Phone").value = "";
  document.getElementById("Name").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("AT/" + PhoneV)
    .on("value", function (snap) {
      document.getElementById("Phone").value = snap.val().Phone;
      document.getElementById("Name").value = snap.val().Name;
      document.getElementById("Address").value = snap.val().Address;
      document.getElementById("Email").value = snap.val().Email;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("AT/" + PhoneV)
    .update({
      //   Phone: PhoneV,
      Name: NameV,
      Address: AddressV,
      Email: EmailV,
    });
  alert("Data Update");
  document.getElementById("Phone").value = "";
  document.getElementById("Name").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("AT/" + PhoneV)
    .remove();
  alert("Data Deleted");
  document.getElementById("Phone").value = "";
  document.getElementById("Name").value = "";
  document.getElementById("Address").value = "";
  document.getElementById("Email").value = "";
};
