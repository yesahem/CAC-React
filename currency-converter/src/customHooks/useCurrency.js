import { useEffect, useState } from "react";

export function useCurrencyInfo(currency) {
  const [data, setData] = useState({})
  useEffect(() => {

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      //  console.log(res)
      .then((res) => setData(res[currency]))
    // console.log(res[currency])


  }, [currency])
  return data;
}

