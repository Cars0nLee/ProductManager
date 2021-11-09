import React, {useState} from "react"
import axios from "axios"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title, price, description
        })
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
        setTitle("")
        setPrice("")
        setDescription("")
    }

    return (
        <form onSubmit={submitHandler}>
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
    )
}

