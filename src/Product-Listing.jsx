import { useContext, useEffect, useRef, useState } from "react"
import './style/productcard.css'
import context from "./context/context"
import Cartcontext from "./context/Cartcontext";
import Productcard from "./Product_Listing/Productcard";
import Nav from "./Nav";

export default function Product_Listing () {
    const { api , setapi} = useContext(context)
    const [ apidata , setapidata ]  = useState([])
    const [ price , setprice ] = useState(2500)
    const [ rating , setrating ] = useState(5)
    const { cart , setcart } = useContext(Cartcontext)
    const [ oncart , setoncart ] = useState(cart)
    const setref = useRef()
    
    useEffect( () => {
        setcart(oncart)
    } , [oncart])

    useEffect(() => {
        setapidata(api)
    } , [api])

    function handleprice (e) {
        setprice(e.target.value);
        let changeprice = api.filter((x) => Math.floor(x.price) < Number(e.target.value) & Math.floor(x.rating) < rating)
        setapidata(changeprice)
    }

    function handlerating (e) {
        setrating(e.target.value);
        let changeprice = api.filter((x) => Math.floor(x.rating) < Number(e.target.value) & Math.floor(x.price) < price)
        setapidata(changeprice)
    }

    return (
        <>
        <Nav />
    <div className="block">

        <div className="side-block" ref={setref}>

            <div className="sortbyprice">
                <div>
                <label>Price   </label>
                <input type="range" min={5} max={2500} defaultValue={2500} onChange={handleprice}/><br />
                <div className="show-price">Price : {price}</div>
                </div> 
            </div>

            <div className="sortbyrating">
                <div>
                <label>Rating</label>
                <input type="range" min={0} max={5} defaultValue={5} onChange={handlerating}/><br />
                <div className="show-price">Rating : {rating}</div>
                </div>
            </div>

        </div>

        <div className="productcard-block">
            {apidata.map(( x , index ) => {
                return <Productcard key={index} api={x} setoncart={setoncart}/>
            })}
        </div>
    </div>

        </>
    )
}