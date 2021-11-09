import React, {useEffect, useState} from "react"
import axios from "axios"
import {useParams} from "react-router-dom"

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {_id} = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${_id}`)
        .then(res=>{setProduct(res.data.product)})
        .catch(err=>err)
    }, [_id])

    return (
        <div>
            <h2>{product.title}</h2>
            <h2>{product.price}</h2>
            <h2>{product.description}</h2>
        </div>
    )
}

export default Detail;