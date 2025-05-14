import { useLocation } from "react-router-dom"
import Nav from "./Nav"
import { useEffect, useState } from "react"
export default function Buy () {
    const location = useLocation()
    const data = location.state
    const [ price , setprice ] = useState(0)
    
    useEffect( () => {
        data.map(x => {      
            setprice(p => p + x.price)
        })
    } , [])

    function Block ({api}) {
        return (
            <>
            <div className="cart-block">
                <div className="card-img">
                <img src={api.images[0]} alt="product image" />
                </div>
                 <div className="cart-details">
                    <div className="description">{api.description}</div>
                    <div className="price">{api.price}</div>
            </div>
            </div>
            </>
        )
    }

    return (
        <>
        <Nav />
        <h1 style={{margin : "20px"}}>Totle Price : {Math.floor(price)}</h1>
        <div style={{ display:"flex" , flexDirection:"column"}}className="dilevry-type">
        
        <div style={{border : "2px solid" , width : "max-content" , padding : "5px" , margin : "10px"}}><input type="radio" name="pay"/>Cash on dilevry </div>
        <div style={{border : "2px solid" , width : "max-content" , padding : "5px" , margin : "10px"}}><input type="radio" name="pay"/>Online payment </div>

        </div>
        <h1 style={{margin : "20px"}}>Products</h1>
        {data.map(( x , index ) => <Block key={index} api={x} />)}
        </>
    )
}