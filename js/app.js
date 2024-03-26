import Form from './classes/class-form.js';
import Weather from './classes/class-weather.js';
import UI from './classes/class-UI.js';

// Validations forms
const form = new Form();
form.init();

// UI
export const ui = new UI();

const btnSubmit = document.querySelector('input[type="submit"]');
btnSubmit.addEventListener('click', () => {
    // Get data form
    const data = form.getDataForm();

    // Print data
    const weather = new Weather();
    weather.init(data);
    weather.getWeather();
});