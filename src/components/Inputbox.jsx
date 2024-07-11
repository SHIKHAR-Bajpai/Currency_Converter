import React, { useId } from 'react';

function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
}) {

  const amtInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex`}>

        <div className="w-1/2">

            <label htmlFor={amtInputId} className="text-black/40 mb-2 inline-block">
            {label}
            </label>

            <input
            id={amtInputId} value={amount}
            min={0}
            type="number" placeholder="Amount"
            className="rounded-lg px-1 py-1 bg-gray-300 cursor-pointer outline-none w-full bg-transparent "
            onChange={(e) => onAmountChange(Number(e.target.value))}
            />
        </div>

        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>

            <select
            className="rounded-lg px-1 py-1 bg-gray-300 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            >
            {currencyOptions.map((currency) => (
                <option value={currency} key={currency}>
                {currency.toUpperCase()}
                </option>
            ))}
            </select>
        </div>

    </div>
  );
}

export default Inputbox;
