import React from "react";
import { getRandomQuote } from "../quoteData";

function Quote() {
    const quote = getRandomQuote();

    return (
        <p className="italic">{quote}</p>
    )
}

export default Quote;