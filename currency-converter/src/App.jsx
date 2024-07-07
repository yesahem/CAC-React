import { useState } from 'react'
import './App.css'
import { InputField } from './components/InputField'
import { useCurrencyInfo } from './customHooks/useCurrency'

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swapValues = () => {
    setFrom(to)
    setTo(from)

    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    console.log(currencyInfo)
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532543/pexels-photo-3532543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputField
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapValues}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputField
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={from}
                amountDisabled
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {from.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App