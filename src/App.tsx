import React, { useState, useEffect, useRef } from "react";
// API
import API from "./API";
// Styles
import { Wrapper } from "./styles/App.styles";
// Types
export type BitcoinData = {
  "15m": number;
  last: number;
  buy: number;
  sell: number;
  symbol: string;
};

export type Curencies = {
  [key: string]: BitcoinData;
};

const FETCH_INTERVAL = 15000;

const App: React.FC = () => {
  const [data, setData] = useState<Curencies>();
  const [currency, setCurrency] = useState("INR");
  const [error, setError] = useState(false);
  const initial = useRef(true);

  const handleCurencySelection = (e: any) => {
    setCurrency(e.currentTarget.value);
  };

  useEffect(() => {
    const getBitcoinData = async () => {
      const data = await API.getBitcoinData();
      setData(data);
    };

    try {
      if (initial.current) {
        getBitcoinData();
        initial.current = false;
      }

      const timer = setInterval(() => {
        getBitcoinData();
      }, FETCH_INTERVAL);

      return () => clearInterval(timer);
    } catch {
      setError(true);
    }
  }, []);

  if (error) return <div>Something went wrong ...</div>;

  return (
    <Wrapper>
      <>
        <h2>Bitcont Price</h2>
        <select value={currency} onChange={handleCurencySelection}>
          {data &&
            Object.keys(data).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
        <div>
          <h2>
            <span>
              {data &&
                new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency,
                }).format(data[currency].last)}
            </span>
          </h2>
        </div>
      </>
    </Wrapper>
  );
};

export default App;
