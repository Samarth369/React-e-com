import { useNavigate } from "react-router-dom"
import cartcontext from "../context/Cartcontext"
import { useContext, useEffect, useState } from "react"

export default function Productcard ({ api , setoncart}) {
    const navigate = useNavigate()

    const { cart , setcart } = useContext(cartcontext)
    

      return (
        <>
            <div className="productcard">
               
               <div className="productcardimg">
                <img src={api.images[0]} className="product-image" alt="product image" />
               </div>
               
               <div className="product-details">

                    <div className="products-description">{api.description}</div>

                    <div className="products-rating">Rating : {api.rating}</div>
                    <div className="products-price">
                        ₹{api.price}
                        <div className="products-price-MRP">M.R.P {Math.floor(api.discountPercentage)}% off</div>
                    </div>

                    <div className="buyandaddtocart">
                    <div className="Addtocart"><button onClick={() => {
                        setoncart(x => [...x,api])
                    }}>Add to cart</button></div>
                   
                    <div className="Addtocart"><button  onClick={() => {
                            navigate("/Product-Details" , {state : api})
                    }}>see more info</button></div>
                    </div> 

                    <div className="will-diliveron">{api.shippingInformation}</div>
               </div>
            </div>
        </>
    )
}