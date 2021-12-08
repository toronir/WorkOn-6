import "./main.scss"

import React, { useState, useEffect, useRef, useReducer } from 'react'
import ReactDOM from 'react-dom'
import UserCard from "./user_card"




const Preloader = ({isLoading}) => {

    
   

    return (
        isLoading? <h1>Loading...</h1>:""
        
        
    )
}
export default Preloader