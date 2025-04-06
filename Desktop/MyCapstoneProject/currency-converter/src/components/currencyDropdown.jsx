import React from 'react';

const CurrencyDropdown = ({
    currencies,
    currency,
    setCurrency,
    title = "",
}) => {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <select
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