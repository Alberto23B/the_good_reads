import React, {useState, useEffect} from "react";
import { getRandomQuote } from "../quoteData";

function Quote() {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        setQuote(getRandomQuote())
    }, [])
    
    return (
        <p className="h-12 max-w-2xl mx-auto text-xs italic sm:text-base">{quote}</p>
    )
}

export default Quote;