const form = document.getElementById("contactForm");
const fields = form.querySelectorAll("input, textarea");

function validateField(field) {
    field.classList.remove("is-valid", "is-invalid");

    if (field.checkValidity()) {
        field.classList.add("is-valid");
    } else {
        field.classList.add("is-invalid");
    }
}

fields.forEach(field => {
    field.addEventListener("input", () => {
        validateField(field);
    });
});

form.addEventListener("submit", event => {
    event.preventDefault();

    fields.forEach(field => {
        validateField(field);
    });
    
    if (form.checkValidity()) {
        alert("Form submitted successfully!");

    form.reset();

    fields.forEach(field => {
        field.classList.remove("is-valid", "is-invalid");
    });
}

});
