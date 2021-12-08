import "./main.scss"

import React, { useState, useEffect, useRef, useReducer } from 'react'
import ReactDOM from 'react-dom'




const UserCard = ({item},{index}) => {


    return (
        <>
      
                            <div key={index} className="card mb-5 py-5">
                                <div className="card-body d-flex ">

                                    <img src={item.avatar} className alt="" />
                                    <div className="text_div">
                                        <h2 >{item.first_name}, {item.last_name}</h2>
                                        <a href={`mailto${item.email}`}>{item.email}</a>
                                    </div>
                                </div>
                            </div>

        </>
    )
}
export default UserCard