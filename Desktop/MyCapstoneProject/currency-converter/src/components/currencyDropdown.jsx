import React from 'react';

const CurrencyDropdown = ({
    currencies,
    currency,
    setCurrency,
    title = "",
}) => {
  return (
    <div>
      <label className='block text-lg font-semibold text-red-700 ' htmlFor={title}>{title}</label>
      <select className='w-full p-2 border-gray-600 rounded-lg shadow-emerald-200 focus:outline-none focus:ring-4 focus:ring-violet-500'
        id={title}
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        {currencies?.map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;