import axios from 'axios';
import React, { useEffect, useState } from 'react'
const api="https://fakestoreapi.com/products";
const Fetch = () => {
    // Product by ID
    const [title, setTitle]=useState([])
    const [description, setDescription]=useState([])
    const [price, setPrice]=useState([])
    const [image, setImage]=useState([])
    useEffect(()=>{
        const getAxios =async ()=>{
            const resp= await axios.get(`${api}/5`)
            setTitle(resp.data.title)
            setDescription(resp.data.description)
            setPrice(resp.data.price)
            setImage(resp.data.image)
        }
        getAxios()
    },[])
  return (
    <div>
      <h1>Title: {title}</h1>
      <p>Price: {price}</p>
      <img src={image} alt="" />
      <p>Description: {description}</p>
    </div>
  )
}

export default Fetch
