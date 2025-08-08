# API-INTEGRATION
NAME: S.DIVAKAR

INTERN ID:CT04DZ266

DOMAIN: FULL STACK WEB DEVELOPMENT

DURATION: 4 WEEKS

MENTOR: NEELA SANTHOSE

DESCRIPTION:
        The Weather Forecast Web App is a responsive and dynamic website built using HTML, CSS, and JavaScript that allows users to retrieve and view real-time weather data for any city in the world. It integrates the OpenWeatherMap API, a free and reliable public API, to fetch live weather conditions including temperature, humidity, and general weather descriptions like clear, cloudy, or rainy skies.

The purpose of this project is to create a simple yet functional weather app that can serve both as a practical utility for everyday users and as a beginner-friendly front-end development project for students and developers learning API integration, asynchronous JavaScript, and responsive design.
🔧 Core Features

1. Real-Time City-Based Search:
The app has an input box where users can enter any city name. Once the "Get Weather" button is clicked, it sends a request to the OpenWeatherMap API with the specified city. If found, the app displays key weather data. This makes the app highly user-centric and location-specific.

2. OpenWeatherMap API Integration:
The OpenWeatherMap API is the backbone of the app. It provides real-time weather information for cities across the globe. The app builds the API URL dynamically based on the user's input. A typical API URL looks like this:
https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=YOUR_API_KEY&units=metric
The q parameter specifies the city, appid is your API key, and units=metric converts temperature to Celsius.

3. Responsive and Clean User Interface:
The app is designed to work smoothly on all screen sizes—mobile phones, tablets, and desktops—thanks to responsive CSS. The layout adapts using media queries, fluid widths, and flexible containers. The user interface is minimalist, using readable fonts, soft shadows, and contrast to make the content visually appealing.

4. Dynamic Weather Display:
Upon a successful API call, JavaScript extracts and displays the following information:

    🌆 City and Country

    🌡 Current Temperature in Celsius

    💧 Humidity percentage

    🌥 General weather condition (e.g., Clear, Rain, Clouds)

All data is inserted dynamically into the HTML without requiring a page reload. This real-time data updating is made possible by JavaScript’s fetch() API and DOM manipulation.
 
5. Error Handling and Feedback:
If the user enters a city that doesn't exist or the API returns an error (e.g., due to network issues or an invalid key), the app provides a clear, friendly error message such as “City not found.” This ensures a smooth user experience and prevents confusion.

#OUTPUT:

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/11b63461-a8ae-4252-ad99-71253e8401ec" />
