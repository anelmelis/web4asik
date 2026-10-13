# Assignment 4 — Forms and Validation

## Description

This project was completed for Assignment 4 in the WEB Technologies 1 course. The main objective was to practice creating different types of HTML forms, implementing input validation, and improving form design using Bootstrap 5 and CSS.

The assignment consists of three parts and five tasks. Each task demonstrates a different aspect of working with forms, from basic HTML elements to responsive layouts and validation using JavaScript. All tasks are organized into separate pages, with a navigation bar that allows users to move between them.

### Part 1. Basic HTML Forms

**Task 0 — Simple Contact Form**

In this task, a basic contact form was created using HTML elements. The form includes Name and Email input fields, a Message textarea, and a Submit button. The `<label>` element was used for each field and connected to its corresponding input through the `for` and `id` attributes.

CSS was used to style the form container, input fields, button, and navigation bar. This task demonstrates the basic structure of HTML forms without additional validation rules.

**Task 1 — Form with HTML5 Validation**

This task extends the contact form by adding built-in HTML5 validation. The `required` attribute prevents users from submitting empty fields, while `minlength` and `maxlength` define the allowed length of the entered text.

The `type="email"` attribute checks whether the entered email follows a valid format. The form was tested with empty fields, incorrect email addresses, and inputs that do not meet the length requirements. The browser displays validation messages when the entered data is invalid.

### Part 2. Bootstrap Forms

**Task 2 — Bootstrap Form Styling**

In this task, the contact form was recreated using Bootstrap 5. The `form-control` and `form-label` classes were applied to the input fields and labels, while `btn` and `btn-primary` were used to style the Submit button.

Bootstrap's grid system was implemented using `container`, `row`, `col-md-6`, and `col-12` to organize the form fields. This allows the layout to adjust to different screen sizes. Placeholders and helper text were also added to provide examples and additional information for users.

**Task 3 — Bootstrap Validation Styles**

This task focuses on displaying validation results using Bootstrap and JavaScript. The `is-valid` and `is-invalid` classes were used to highlight correctly and incorrectly completed fields.

The `valid-feedback` and `invalid-feedback` classes display feedback messages below the inputs, such as "Looks good!" or an explanation of the error. JavaScript checks the entered values using `checkValidity()` and updates the validation styles. After a successful submission, a confirmation message appears and the form fields are cleared.

### Part 3. Advanced Form Project

**Task 4 — Registration Form**

The final task combines HTML5, CSS, Bootstrap, and JavaScript to create a responsive registration form. It includes First Name, Last Name, Email, Password, Confirm Password, Gender, Hobbies, and Country fields, along with Submit and Reset buttons.

Different HTML input types were used, including `text`, `email`, `password`, `radio`, and `checkbox`, as well as a `select` dropdown. Bootstrap Grid was used to organize the fields and adapt the layout to different screen sizes.

HTML5 attributes such as `required` and `minlength` were added for validation. JavaScript was used to check whether both passwords match and to display Bootstrap validation feedback. The Reset button clears the entered information and removes the validation styles.

## Instructions

### Option 1: Using GitHub Pages

The project is published through GitHub Pages and can be accessed directly in a web browser without downloading or installing any files.

**GitHub Pages:**  https://anelmelis.github.io/web4asik/

https://anelmelis.github.io/web4asik/task0/task0.html

1. Open the GitHub Pages link provided above.
2. The website will display the project page.
3. Use the navigation bar at the top of the page to switch between Task 0, Task 1, Task 2, Task 3, and Task 4.

SE-2527
MELIS ANEL 