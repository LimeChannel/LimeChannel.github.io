
document.addEventListener("DOMContentLoaded", () => {

let name = localStorage.getItem("name"),email = localStorage.getItem("email"),phone = localStorage.getItem("phone"),organization = localStorage.getItem("organization"),message = localStorage.getItem("message");
document.getElementById("name").value = name;
document.getElementById("email").value = email;
document.getElementById("phone").value = phone;
document.getElementById("organization").value = organization;
document.getElementById("message").value = message;


function SaveData(){
localStorage.setItem("name",document.getElementById("name").value);
localStorage.setItem("email",document.getElementById("email").value);
localStorage.setItem("phone",document.getElementById("phone").value);
localStorage.setItem("organization",document.getElementById("organization").value);
localStorage.setItem("message",document.getElementById("message").value);
}

let slapform = new Slapform();
let form = document.getElementById("form_main");
form.style.display = "none";

form.addEventListener("change", () => {
  SaveData();
  console.log("Данные сохранены");
});

document.getElementById("form_button").addEventListener("click", () => {
  history.pushState({"show_form": true}, "show_form", "?show_form=true");
  form.style.display = "block";
})

window.addEventListener("popstate", () => {
  form.style.display = "none";
})

document.getElementById("form_main").addEventListener("submit",(event) => {
event.preventDefault();
  slapform.submit({
      form: 'nZOnfrWwY', // Replace this with the form id you created in step 1
      data: { // The data you want submitted and emailed to you
          name: name,
          email: email,
          phone: phone,
          organization: organization,
          message: message
      }
    })
    .then(function (response) { // This function runs only on success
      console.log('Success!', response);
      alert("Succes");
    })
    .catch(function (response) { // This function runs only on error
      console.log('Fail!', response);
      alert("Fail");
    })
    .finally(function () { // This function runs regardless of success or error
history.go(-1);
localStorage.removeItem("name");
localStorage.removeItem("email");
localStorage.removeItem("phone");
localStorage.removeItem("organization");
localStorage.removeItem("message");
form.reset();
    });
})
})