import { useEffect, useState } from "react";
import { fetchQuotes } from "../utlis";
import "../css/quote.css";

const Quote = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetchQuotes(setQuote);
  }, []);
  return (
    <div className="quote">
      <p>
        "{quote.en}" <b>{quote.author}</b>
      </p>
    </div>
  );
};

export default Quote;
