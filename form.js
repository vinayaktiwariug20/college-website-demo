function checkForm(event) {
    var nameInput = document.getElementsByName("full_name")[0];
    var termsCheckbox = document.getElementById("accept_terms");

    if (nameInput.value.trim() === "" || !termsCheckbox.checked) {
        event.preventDefault(); // Prevent form submission
        alert("Please accept the terms and conditions.");
    } else {
        var result = confirm("Please check your details then click OK.");
        if (result) {
            alert("Details submitted successfully.");
        } else {
            event.preventDefault();
        }
    }
}
