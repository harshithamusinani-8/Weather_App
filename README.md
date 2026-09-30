# 🌤️ Weather App

A simple and responsive **Weather App** built using **HTML, CSS, and JavaScript**. It uses the **OpenWeatherMap API** to fetch and display real-time weather information for a city entered by the user.

## 🚀 Features

* 🔍 Search weather by city name
* 🌡️ Displays current temperature in Celsius
* 💧 Displays humidity
* ☁️ Displays current weather condition
* ⌨️ Supports searching by pressing the **Enter** key
* ⚠️ Displays an error message for invalid or empty city names
* 📱 Simple and responsive user interface
* 🎨 Clean gradient background and card-based design

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive layout
* **JavaScript (ES6+)** – Application logic and API requests
* **OpenWeatherMap API** – Real-time weather data

## 📂 Project Structure

```text
Weather-App/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

1. Enter a city name in the search box.
2. Click the **Search** button or press **Enter**.
3. JavaScript sends a request to the OpenWeatherMap API.
4. The API returns the current weather data.
5. The application displays:

   * City name
   * Temperature
   * Humidity
   * Weather condition

## 🔑 API Key Setup

This project uses the OpenWeatherMap API.

Create an account at [OpenWeatherMap](https://openweathermap.org/) and generate your API key.

Then open `script.js` and replace:

```javascript
const apiKey = "jkvhcjvds";
```

with your actual API key:

```javascript
const apiKey = "YOUR_API_KEY";
```

### ⚠️ Important

**Do not upload your real API key to GitHub.**

For a public repository, it is better to use environment variables or a backend/serverless function to keep your API key private.

If you accidentally expose an API key, revoke it and generate a new one.

## ▶️ How to Run

### Option 1: Open Directly

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Enter a city name and search for its weather.

### Option 2: Use VS Code

If you use Visual Studio Code:

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. Search for any city.

## 🖥️ Example

After entering a city such as:

```text
Vijayawada
```

The application displays information such as:

```text
Vijayawada

32°C

Humidity: 65%
Condition: scattered clouds
```

*The values shown will change according to the current weather returned by the API.*

## 📸 Screenshot

Add a screenshot of your application here after uploading it to your repository:

```markdown
![Weather App Screenshot](screenshot.png)
```

## 🔮 Future Improvements

Some possible improvements for future versions:

* 🌡️ Add weather icons
* 📍 Detect weather using the user's location
* 📅 Add a multi-day weather forecast
* 🌙 Add dark mode
* 🌡️ Add Fahrenheit/Celsius conversion
* 🕐 Display local time for the selected city
* 📱 Improve mobile responsiveness
* 🔐 Secure the API key using a backend or serverless function

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch:

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit your changes:

```bash
git commit -m "Add new feature"
```

5. Push the branch:

```bash
git push origin feature/new-feature
```

6. Open a Pull Request.

## 📄 License

This project is open source and available under the **MIT License**.


⭐ If you found this project useful, consider giving the repository a star!
