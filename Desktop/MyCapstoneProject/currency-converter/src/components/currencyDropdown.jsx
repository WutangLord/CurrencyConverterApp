import React from 'react'

const CurrencyDropdown = ({
    currencies,
    currency,
    setCurrency,
    title = "",

}) => {
  return (
    <div>
        <label htmlFor= {title}>{title}</label>
    </div>
  );
};

export default CurrencyDropdown;