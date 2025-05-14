import { useEffect, useState } from "react";
import context from "./context";

export default function ContextProvider ({children}) {

    const [ api , setapi ] = useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(res => setapi(res.products))
    },[])

    return (
        <>
        <context.Provider value={{ api , setapi }}>
            {children}
        </context.Provider>
        </>
    )
}


