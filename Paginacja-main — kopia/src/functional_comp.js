import "./main.scss"

import React, { useState, useContext, useRef } from 'react'
import ReactDOM from 'react-dom'
import { MyContext } from "./my_context"




const FunctComp = () => {
    

    const {name,setName} = useContext(MyContext)

    const inpRef = useRef("")

    return (
        <>
    
            <input type="text" ref={inpRef} />
        <button type="button" onClick={()=>setName(inpRef.current.value)}>Press</button>
     
        
            <h1>name is {name}</h1>
        </>
    )
}
export default FunctComp
