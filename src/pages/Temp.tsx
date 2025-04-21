import React, { useEffect } from 'react'
import axios from 'axios'
function Temp() {
    useEffect(()=>{
        axios.post("http://localhost:3000/payment",{
            amount:1000,
        }).then((res)=>{
            console.log(res.data)
        })
    })
  return (
    <div>Temp</div>
  )
}

export default Temp