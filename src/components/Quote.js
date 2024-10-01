import React from "react";
import { getRandomQuote } from "../quoteData";

function Quote() {
    const quote = getRandomQuote();
    
    return (
        <p className="h-12 max-w-2xl mx-auto text-xs italic sm:text-base">{quote}</p>
    )
}

export default Quote;