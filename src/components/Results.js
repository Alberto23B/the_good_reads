import React from "react";

export default function Results({data}) {
    return (
        <>
        {data.length && <p>Not found</p>}
        <div>
            {data.map((el) => {
                return <p>{el.name}</p>
            })}
        </div>
        </>
    )
}