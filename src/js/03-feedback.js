
import _ from 'lodash';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

let inputsForm;





window.addEventListener('load', () => {
  Array.from(form.elements).forEach(el => {
    const currentValues = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (el.name === 'email') {
      el.value = currentValues.email || '';
    } else if (el.name === 'message') {
      el.value = currentValues.message || '';
    }
  });
});

form.addEventListener(
  'input',
  _.throttle(e => {
    e.preventDefault();
    Array.from(form.elements).forEach(el => {
        const { email, message } = form.elements;
        inputsForm = {
            email: email.value,
            message: message.value,
          };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(inputsForm));
      
    });
  }),
  500
);



form.addEventListener('submit', e => {
  e.preventDefault();
  const currentValues = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(currentValues);
  localStorage.clear();
  form.reset();
});
