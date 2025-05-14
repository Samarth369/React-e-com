import './style/Product_Details.css'
import { useLocation } from "react-router-dom"

export default function Product_Details () {

    const loaction = useLocation()
    const product = loaction.state
    
    
    function CustomerReview ({reviews}) {
        
        return (
            <>
                <div className="customer-review">
                    <div className="reviewerName">{reviews.reviewerName} Say's</div>
                    <div className="reviewerrating"> Rating : {reviews.rating}</div>
                    <div className="reviewercomment"> Comment : {reviews.comment}</div>
                </div>
            </> 
        )
    }

    return (
        <>
        <div className="product-block">
            <div className="imgandinof">
            <div className="product-img">
                <img src={product.images[0]} alt="product image" />
            </div>

            <div className="product-info">
                <div className="product-description">{product.description}</div>
                <div className="product-price-and-rating">
                    <div className="product-price">₹{product.price}</div>
                    <div className="product-rating">Rating : {product.rating}</div>
                </div>
                <div className="warrantyInformation">{product.warrantyInformation}</div>
                <div className="shippingInformation">{product.shippingInformation}</div>
                <div className="availabilityStatus">Availity : {product.availabilityStatus}</div>
                <div className="addorbuy">
                    <button>Add to cart</button>
                    <button>Buy</button>
                </div>
            </div>
        </div>
        
        <div className="product-review">
            <h1 className='Customers'>Customers say</h1>
            {product.reviews.map(( x , index ) => <CustomerReview key={index} reviews={x}/>)}
        </div>

        </div>
        </>
    )
 }