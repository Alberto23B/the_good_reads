import React from "react";

export default function Loading() {
    return (
        <div className="flex justify-center gap-3 min-h-56 ">
            <div className="w-2 h-2 rounded-full bg-neutral-800 dot"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-800 dot"></div>
            <div className="w-2 h-2 rounded-full bg-neutral-800 dot"></div>
        </div>
    )
}