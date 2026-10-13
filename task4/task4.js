const form = document.getElementById("registrationForm");
const fields = form.querySelectorAll(
    'input:not([type="radio"]):not([type="checkbox"]), select'
);

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const genderRadios = form.querySelectorAll('input[name="gender"]');
const genderFeedback = document.getElementById("genderFeedback");

function validateField(field) {
    if (field === confirmPassword) {
        if (confirmPassword.value !== password.value) {
            confirmPassword.setCustomValidity("Passwords do not match.");
        } else {
            confirmPassword.setCustomValidity("");
        }
    }

    field.classList.remove("is-valid", "is-invalid");

    if (field.checkValidity()) {
        field.classList.add("is-valid");
    } else {
        field.classList.add("is-invalid");
    }
}

function validateGender() {
    const selected = form.querySelector('input[name="gender"]:checked');

    genderRadios.forEach(radio => {
        radio.classList.remove("is-valid", "is-invalid");
        radio.classList.add(selected ? "is-valid" : "is-invalid");
    });

    genderFeedback.classList.toggle("d-none", Boolean(selected));
}

fields.forEach(field => {
    const eventName = field.tagName === "SELECT" ? "change" : "input";

    field.addEventListener(eventName, () => {
        validateField(field);

        if (field === password && confirmPassword.value !== "") {
            validateField(confirmPassword);
        }
    });
});

genderRadios.forEach(radio => {
    radio.addEventListener("change", validateGender);
});

form.addEventListener("submit", event => {
    event.preventDefault();

    fields.forEach(validateField);
    validateGender();

    if (form.checkValidity()) {
        alert("Registration completed successfully!");

        form.reset();

        fields.forEach(field => {
            field.classList.remove("is-valid", "is-invalid");
            field.setCustomValidity("");
        });

        genderRadios.forEach(radio => {
            radio.classList.remove("is-valid", "is-invalid");
        });

        genderFeedback.classList.add("d-none");
    }
});

form.addEventListener("reset", () => {
    fields.forEach(field => {
        field.classList.remove("is-valid", "is-invalid");
        field.setCustomValidity("");
    });

    genderRadios.forEach(radio => {
        radio.classList.remove("is-valid", "is-invalid");
    });

    genderFeedback.classList.add("d-none");
});
