import { useState } from "react";
import Cartcontext from "./Cartcontext";

export default function ({children}) {

    const [ cart , setcart ] = useState([])

    return (
        <>
        <Cartcontext.Provider value={{ cart , setcart }} >
            {children}
        </Cartcontext.Provider>
        </>
    )
}


