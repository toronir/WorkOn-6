import "../main.scss"

import React, { useRef } from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {addPost} from '../redux/redux-store'






const ReduxTest = () => {
    const inputRef = useRef(null)
    const store = useSelector(store => store.posts)
    const disp = useDispatch()

    const updateHandler = () =>{
        const value =inputRef.current.value;
        disp(addPost(value))

    }

return (
    <>
    <h1>ReduxTest</h1>
    <input type="text" ref={inputRef} />
    <button onClick={updateHandler}></button>
   {store.map(post => <div><h1>{post}</h1></div>)}
    </>
)

}
export default ReduxTest
