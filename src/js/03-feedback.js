import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const LOCALFORM_STATE = "feedback-form-state";

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormImput, 500));

onFormShow();
function onFormSubmit(e) {
    e.preventDefault();
    if (form.elements.email.value && form.elements.message.value) {
        console.log(onObjectSet())
        e.currentTarget.reset();
        localStorage.removeItem(LOCALFORM_STATE);
    }
};

function onObjectSet() {
    return {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
};

function onFormImput() {
    const iputsFields = onObjectSet();
    localStorage.setItem(LOCALFORM_STATE, JSON.stringify(iputsFields));
};


function onFormShow() {
    const savedMessage = localStorage.getItem(LOCALFORM_STATE)
    if (savedMessage) {
        const inputFill = JSON.parse(savedMessage);
        form.elements.email.value = inputFill.email;
        form.elements.message.value = inputFill.message;
    }

};
