class UI {

    constructor() {
        // Singleton Pattern
        if (typeof UI.instance === "object") {
            return UI.instance;
        }

        UI.instance = this;
    }

    printMessage(message, type) {
        const div = document.createElement('div');
        div.classList.add('text-center', 'text-white', 'font-bold', 'p-3', 'my-2', 'bg-green-400', 'border', 'border-green-600', 'rounded');
        div.textContent = message;
        document.querySelector('#resultado').appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 3000);
    }

    printWeather({ name, country, weather, main, sys }) {
        const response =  document.querySelector('#resultado');
        response.innerHTML = '';
        const div = document.createElement('div');
        div.classList.add('text-center', 'text-white');
        const p = document.createElement('p');
        p.classList.add('font-bold', 'text-2xl');
        p.textContent = `${name}, ${sys.country}`;
        const img = document.createElement('img');
        const temperature = document.createElement('p');
        temperature.classList.add('font-bold', 'text-6xl');
        temperature.textContent = `${main.temp} °C`;
        img.src = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
        img.alt = 'Weather Icon';
        img.classList.add('mx-auto', 'mt-5');
        const tempMax = document.createElement('p');
        tempMax.classList.add('text-xl');
        tempMax.textContent = `Max: ${main.temp_max} °C`;
        const tempMin = document.createElement('p');
        tempMin.classList.add('text-xl');
        tempMin.textContent = `Min: ${main.temp_min} °C`;
        div.appendChild(p);
        div.appendChild(img);
        div.appendChild(temperature);
        div.appendChild(tempMax);
        div.appendChild(tempMin);
        response.appendChild(div);
    }

}

export default UI;