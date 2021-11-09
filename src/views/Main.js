import React, {useEffect, useState} from "react"
import axios from "axios";
import ProductList from '../Components/ProductList';
import Products from "../Components/Products"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [product, setProduct] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/allproducts")
        .then(res=>{setProduct(res.data)})
        .catch(err=>err)
    })

    return(
        <div>
            <Products></Products>
            <br></br>
            <ProductList product={product}></ProductList>
        </div>
    )
}