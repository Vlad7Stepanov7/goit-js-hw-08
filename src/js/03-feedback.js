import { refs } from "../helpler/refs";

const throttle = require('lodash.throttle');

let formData = {
   
};

populateForm();

refs.form.addEventListener(`submit`, onSubmitForm);
refs.form.addEventListener(`input`, throttle((onFormInput), 500));

function onSubmitForm(e) {
    e.preventDefault();

    console.log(formData);
    
    localStorage.removeItem(`feedback-form-state`);
     
    e.currentTarget.reset();
    formData = {
        email: ``,
        message: ``,
    };
};

function onFormInput(e) {
    e.preventDefault();

    formData[e.target.name] = e.target.value;

    const jsonFormData = JSON.stringify(formData);
    localStorage.setItem(`feedback-form-state`, jsonFormData);
};

function populateForm() {
    const localeStorageData = JSON.parse(localStorage.getItem(`feedback-form-state`));
    
    if (localeStorageData) {
        const { email, message } = localeStorageData;

        refs.input.value = email;
        refs.textarea.value = message;

        formData.email = email;
        formData.message = message;
    }
   
};