import React, { useState } from 'react';
import Inputbox from './components/Inputbox';
import useCurrency from './hooks/useCurrency';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const curr = useCurrency(from);
  const options = Object.keys(curr);

  const swap = () => {
    setFrom(to);
    setTo(from);
    const newConvertedAmount = amount * curr[to]; 
    setConvertedAmount(newConvertedAmount);
    setAmount(newConvertedAmount / curr[to]);
  };

  const convert = () => {
    setConvertedAmount(amount * curr[to]);
  };

  return (
    <div className="w-full h-screen flex flex-wrap flex-col items-center bg-black bg-cover bg-no-repeat"
    style={{backgroundImage: `url('https://img.freepik.com/free-vector/digital-rupee-concept-technology-background_1017-36657.jpg?t=st=1720701949~exp=1720705549~hmac=7589c537e9ed7274994e515f96fae6df5d1e92ddba167963155d4c97340639d0&w=1060')`
        }}
    >
      <h1 className='text-white text-6xl font-serif my-16'>Currency Converter</h1>

        <div className="w-full max-w-xl mx-auto border border-gray-60 rounded-lg p-5 bg-white/30 ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Inputbox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md
                 bg-blue-600 text-white px-2 py-1 hover:bg-white hover:text-blue-600 hover:border-blue-600"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            
            <div className="w-full mt-1 mb-4">
              <Inputbox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
              />
            </div>

            <button type="submit" 
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg border-2 hover:bg-white
              hover:text-blue-600 hover:border-blue-600">
                
                Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>

        </div>

    </div>
  );
}

export default App;
