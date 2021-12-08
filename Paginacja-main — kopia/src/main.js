import "./main.scss"

import React, { useState, createContext, useRef, useReducer } from 'react'
import ReactDOM from 'react-dom'
import FunctComp from "./functional_comp"
import ClassComp from "./class_comp"
import  MyContextProv from "./my_context"





const App = () => {
   


    return (
        <MyContextProv >
          
        <FunctComp/>
        <ClassComp/>
        </MyContextProv>
    )
}




ReactDOM.render(<App />, document.getElementById('root'))
