import React, {useState, useEffect} from "react"
import axios from "axios"
import {useParams} from "react-router-dom"

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {_id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${_id}`)
        .then(res=>{
            console.log(res)
            setTitle(res.data.product.title)
            setPrice(res.data.product.price)
            setDescription(res.data.product.description)
        })
    }, [])

    const update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/edit/${_id}`, {
            title, price, description
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        setTitle("")
        setPrice("")
        setDescription("")
    }

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={update}>
                <label>Title: </label>
                <input className="form-control" type="text" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
                <br></br>
                <label>Price: </label>
                <input className="form-control" type="number" name="price" value={price} onChange={(e)=>{setPrice(e.target.value)}}></input>
                <br></br>
                <label>Description: </label>
                <textarea className="form-control" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}}rows="5"></textarea>
                <br></br>
                <input type="submit" value="Create"></input>
            </form>
        </div>
    )
}
