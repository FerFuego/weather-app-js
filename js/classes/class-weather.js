import {ui} from '../app.js';

class Weather {
    constructor() {
        // Singleton Pattern
        if (typeof Weather.instance === "object") {
            return Weather.instance;
        }

        Weather.instance = this;
    }

    init({ ciudad, pais }) {
        this.API_KEY = 'a852a5c5a778178dd452f7400dea3a26';
        this.URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${this.API_KEY}&units=metric`;
    }

    getWeather() {
        // Add loading message
        ui.printMessage('Buscando clima...', 'loading');
        // Fetch data
        fetch(this.URL)
            .then(response => response.json())
            .then(data => {
                // Print data
                console.log(data);
                if (data.cod === '404') {
                    ui.printMessage('Clima no encontrado', 'error');
                } else {
                    // Print data
                    console.log(data);
                    // Print message
                    ui.printMessage('Clima encontrado', 'success');
                    // Print data
                    ui.printWeather(data);
                }
            })
            .catch(error => {
                // Print message
                ui.printMessage(error, 'error');
            })
    }

}

export default Weather;