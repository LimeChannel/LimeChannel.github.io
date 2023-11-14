document.addEventListener("DOMContentLoaded", () => {
    let slapform = new Slapform();
    let form = document.getElementById("form_main");
    form.style.display = "none";

    document.getElementById("form_button").addEventListener("click", () => {
        history.pushState({"show_form": true}, "show_form", "?show_form=true");
        form.style.display = "flex";
    })

    window.addEventListener("popstate", () => {
        form.style.display = "none";
    })

    document.getElementById("form_main").addEventListener("submit",(event) => {
		event.preventDefault();
        slapform.submit({
            form: 'nZOnfrWwY', // Replace this with the form id you created in step 1
            data: { // The data you want submitted and emailed to you
                name: document.getElementById("name").value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                organization: document.getElementById('organization').value,
                message: document.getElementById('message').value
            }
          })
          .then(function (response) { // This function runs only on success
            console.log('Success!', response);
          })
          .catch(function (response) { // This function runs only on error
            console.log('Fail!', response);
          })
          .finally(function () { // This function runs regardless of success or error
			history.go(-1);
          });
    })

})