import React from "react";
import { getRandomQuote } from "../quoteData";

function Quote() {
    const quote = getRandomQuote();

    return (
        <p className="italic max-w-2xl h-12 mx-auto">{quote}</p>
    )
}

export default Quote;