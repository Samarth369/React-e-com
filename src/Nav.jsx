import "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Nav () {
    
    const navigate = useNavigate()
    
    return (
        <>
        <div className="nav-bar">

            <button onClick={ () => {
                navigate("/")
            }}>Home</button>

            <button onClick={ () => {
                navigate("/Cart")
            }}>Cart</button>
            
        </div>
        </>
    )
}