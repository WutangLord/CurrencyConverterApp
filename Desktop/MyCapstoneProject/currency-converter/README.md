Currency Converter React App Capstone Project

A simple web application built with React and Tailwind CSS for the capsone project

MAIN FEATURES

* Selecting Currencies--with From and To dropdowns
* Amount input for the amount to be conveted
* Real-time conversion of the currencies from the ExchangeRate API provided in the project materials...
* My API links and API key --  https://v6.exchangerate-api.com/v6/9f78d38abd6d688f5ed90f53/latest/USD and 78d38abd6d688f5ed90f53 respectively.
* Display of converted amount at the bottom
* Interactive loading state for the visual feedback during loading state.
TOOLS USED

* React library for interactivity
* React Hooks that  Utilizes `useState` for managing component state and `useEffect` for handling side effects (API calls).
* Fetch API Used to make HTTP requests to the ExchangeRate-API.
* Tailwind CSS for utility-first styling for major screen sizes and mobile-first responsiveness

INSTALLATION

npm create vite@latest currency-converter --template react
cd currency converter
npm install



STARTING DEVELOPMENT
npm run dev

TAILWIND VERSION V3.41.7

npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p


API KEY

* This application uses the ExchangeRate-API. The API key is hardcoded in the `CurrencyConverter.jsx` file:
    ```javascript
    const apiKey = "9f78d38abd6d688f5ed90f53";
    ```

FILE STRUCTURE

├── public/
├── src/
│   ├── components/
│   │   ├── Currency-Converter.jsx
│   │   └── currencyDropdown.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── index.js
│   └── ... other React files
├── .gitignore
├── package.json
├── README.md
└── ... other project files

 `components/Currency-Converter.jsx`: Contains the main currency converter logic and UI.
 `components/currencyDropdown.jsx`: A reusable dropdown component for selecting currencies.
 `App.jsx`: The root component of the application.
 `App.css`: Global styles for the `App` component.

DEPLOYMENT

My application was deployed to free hosting platform of Netfily.

PRESENTATION
My project had an udiovisual presentation via loom.

