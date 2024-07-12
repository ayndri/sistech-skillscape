import Image from "next/image";
import React, { Children, ReactNode } from "react";

function Search() {
    return (
        <>
            <button>
                <Image src="/images/search.png" width={22} height={22} alt="Logo" />
            </button>
            <input type="text" placeholder="Search..."></input>
        </>
    )
}

export { Search };