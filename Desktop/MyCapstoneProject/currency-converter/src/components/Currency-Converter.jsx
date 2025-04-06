import { useState, useEffect } from "react";
import CurrencyDropdown from "./currencyDropdown";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState({});
  const [amount, setAmount] = useState(1);

  const [fromCurrency, setfromCurrency] = useState("USD");
  const [toCurrency, settoCurrency] = useState("KES");

  const [convertedAmount, setConvertedAmount] = useState(null);
  const [converting, setConverting] = useState(false);

  // Fetched all these from Exchange-rate API provided in the project.
  //link; https://v6.exchangerate-api.com/v6/9f78d38abd6d688f5ed90f53/latest/USD
  //My API key = 9f78d38abd6d688f5ed90f53
  const apiKey = "9f78d38abd6d688f5ed90f53";
  const apiUrlBase = "https://v6.exchangerate-api.com/v6/";

  const fetchCurrencies = async () => {
    try {
      const res = await fetch(`${apiUrlBase}${apiKey}/latest/USD`);
      const data = await res.json();
      setCurrencies(data);
    } catch (error) {
      console.error("Error Fetching Currencies:", error);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  console.log(currencies);

  const currencyConvert = async () => {
    if (!fromCurrency || !toCurrency || !amount || isNaN(amount)) {
      console.error("Please select currencies and enter a valid amount.");
      return;
    }

    if (converting) {
      return; // Ensuring there is no multiple results.
    }

    setConverting(true);
    setConvertedAmount(null); 

    try {
      const conversionUrl = `${apiUrlBase}${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;
      const response = await fetch(conversionUrl);
      const data = await response.json();

      if (data.result === "success") {
        setConvertedAmount(`${data.conversion_result} ${toCurrency}`); 
      } else {
        console.error("Currency Conversion Failed:", data);
        setConvertedAmount("Conversion Failed");
      }
    } catch (error) {
      console.error("Error during Currency Conversion:", error);
      setConvertedAmount("Conversion Error");
    } finally {
      setConverting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-11 p-6 bg-gray-100 rounded-3xl shadow-xl ">
      <h2 className="mb-7 text-3xl font-bold text-green-800">CurrencyConverter</h2>
      <div>
        <CurrencyDropdown
          currencies={currencies.conversion_rates ? Object.keys(currencies.conversion_rates) : []}
          currency={fromCurrency}
          setCurrency={setfromCurrency}
          title="From:"
        />
        <CurrencyDropdown
          currencies={currencies.conversion_rates ? Object.keys(currencies.conversion_rates) : []}
          currency={toCurrency}
          setCurrency={settoCurrency}
          title="To:"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="amount" className="block text-sm font-semibold text-violet-700 ">Amount:</label>
        <input
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="w-full P-2 border border-green-300 rounded-lg shadow-sm focus:outline-double focus:ring-orange-600"
        />
      </div>

      <div className="flex justify-end mt-7">
        <button
          onClick={currencyConvert}
          className={`px-5 py-2 bg-blue-200 text-red-400 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-orange-300 focus:ring-offset-2 ${
            converting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={converting}
        >
          {converting ? "Converting..." : "Convert"}
        </button>
      </div>
      <div className="mt-4 text-lg font-medium text-right text-green-600">
        Converted Amount:{" "}
        {convertedAmount !== null ? convertedAmount : "---"}
      </div>
    </div>
  );
};

export default CurrencyConverter;