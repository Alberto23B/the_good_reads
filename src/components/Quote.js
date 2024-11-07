import React, { useState, useEffect } from "react";
import { getRandomQuote } from "../quoteData";

function Quote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <p className="w-2/3 h-12 mx-auto my-2 text-xs italic text-center sm:my-6 sm:text-base">
      {quote}
    </p>
  );
}

export default Quote;
