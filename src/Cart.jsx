import { useContext, useEffect, useState } from "react"
import "./style/Cardblock.css"
import Cartcontext from "./context/Cartcontext"
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

export default function Cart ({api}) {
    const navigate = useNavigate()

    const { cart , setcart } = useContext(Cartcontext)
    
    const [ cartdata , setcartdata ] = useState(cart)

    function cancell (id) {
        let newdata = cart.filter((x) => {
            if(x.id != id){
                return x
            }
        })
        setcart(newdata)
    }

    function Cartblock ({api}) {
        // console.log(api);
        
        return (
            <>
            <div className="cart-block">
                <div className="card-img">
                <img src={api.images[0]} alt="product image" />
                </div>
                 <div className="cart-details">
                    <div className="description">{api.description}</div>
                    <div className="price">{api.price}</div>
                    <div className="remove-btn"><button onClick={() => {
                        cancell(api.id)
                    }}>Remove</button></div>
                 </div>
            </div>
            </>
        )
    }
    return (
        <>
        <Nav />
        {cart.map(( x , index ) => <Cartblock key={index} api={x}/>)}
        <div className="btndiv" onClick={ () => {
            navigate("/Buy" , {state : cart})
        }}>
        {cart.length > 0 && <button className="buybtn">Buy</button>}
        </div>
        </>
    )
}



