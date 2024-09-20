import React from "react";
import { getRandomQuote } from "../quoteData";

function Quote() {
    const quote = getRandomQuote();

    return (
        <p className="italic max-w-2xl h-12 mx-auto text-xs sm:text-base">{quote}</p>
    )
}

export default Quote;