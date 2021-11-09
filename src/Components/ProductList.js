import axios from "axios";
import React from "react"
import {Link} from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
        const {remove} = props;

        const deleteProduct = (productId) =>{
            axios.delete(`http://localhost:8000/api/deleteproduct/${productId}`)
            .then(res=>{remove(productId)})
            .catch(err=>console.log(err))
        }
        
    return(
        <div>
            {props.product.map((product, id) => {
                return <div >
                        <Link to={`/api/product/${product._id}`}>{product.title}</Link>
                        <Link to={`/api/edit/${product._id}`}>Edit</Link>
                        <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                    </div>
            })}
        </div>
    )
}

