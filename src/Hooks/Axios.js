import axios from 'axios';
import React, { useEffect, useState } from 'react'
const api2="https://fakestoreapi.com/products";
const Axios = () => {
  const [product, setProduct]=useState([])
  // All products
  useEffect(()=>{
   const getFecht =async ()=>{
    const resp=await axios (`${api2}`)
    setProduct(resp.data)
    };
    getFecht();
  })
  return (
    <div>
      {product.map((el)=>
             <div key={el.id}>
              <h1>Title: {el.title}</h1>
             <p>Price: {el.price}</p>
             <img src={el.image} alt="" />
             <p>Description: {el.description}</p>
             </div>
        )}
    </div>
  )
}

export default Axios
