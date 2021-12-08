import './main.scss';

import React from 'react';











const Form = ({addHandler,inputRef}) => {

    return (
        
        
        <form id="add-form" onSubmit={addHandler}>
        <div className="input-group">
            <input type="text" className="form-control form-control-lg" placeholder="Add new item..." ref={inputRef} required />
        </div>
        <button className="btn btn-info" type="submit" id="add_list_item" >Add</button>
    </form>
        
        

    )
}

export default Form;