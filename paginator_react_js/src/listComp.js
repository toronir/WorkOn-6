
import './main.scss';

import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import Layout from './component/layout/layout';










const ListComp = ({data, removeHandler,addIsDone}) => {

    return (
        
        
            <li className={`list-group-item d-flex justify-content-between ${data.isDone ? "done":""}`}>
                <span onClick={addIsDone.bind(null,data.title)}>{data.title}</span>
                <a href="#" className="text-danger"onClick={removeHandler.bind(null,data.title)}>Delet</a>
            </li>
        
        

    )
}

export default ListComp
