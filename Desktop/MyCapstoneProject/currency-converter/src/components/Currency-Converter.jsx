import { useState, useEffect } from "react";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);

  //Exchange rate API - : https://v6.exchangerate-api.com/v6/9f78d38abd6d688f5ed90f53/latest/USD
    const fetchCurrencies =async () => {
      try {
          const res = await fetch("https://v6.exchangerate-api.com/v6/9f78d38abd6d688f5ed90f53/latest/USD");
          const data = res.json();

          setCurrencies(data);
      } catch (error) {
          console.error("Error Fetching", error);
        
      }
      
    };

    useEffect(() => {
      fetchCurrencies();
    }, []);

    console.log(currencies);

    const currencyConvert = () => {

    }
    
  return (
  <div className="max-w-2xl mx-auto my-11 p-6 bg-gray-100 rounded-3xl shadow-xl ">
    <h2 className="mb-7 text-3xl font-bold text-green-800">CurrencyConverter</h2>
    <div>Dropdownbutton</div>

    <div className="mt-4">
      <label htmlFor="amount" className="block text-sm font-semibold text-violet-700 ">Amount:</label>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className="w-full P-2 border border-green-300 rounded-lg shadow-sm focus:outline-double focus:ring-orange-600" />
    </div>

    <div className="flex justify-end mt-7">
      <button onClick={currencyConvert} className="px-5 py-2 bg-blue-200 text-red-400 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-orange-300 focus:ring-offset-2">Convert</button>
    </div>
    <div className="mt-4 text-lg font-medium text-right text-green-600">
      Converted Amount: 100 USD
    </div>
  </div>
  
  );
};

export default CurrencyConverter;