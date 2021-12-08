import React, { useState } from 'react'
import styled from 'styled-components'


const Form = styled.form`
 
    max-width: 100%;
    margin: 2rem auto;
    padding: 2rem;
    border: 1px solid #ccc;
    background-color: #eee;


& input {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${props=>props.isChanged?"red":"#aaa"};
    padding: .5rem 1rem;
    background-color: white;
    box-sizing: border-box;
}



& button {
    display: block;
    width: 100%;
    padding: .5rem 1rem;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
}

& button:hover {
    background-color: darkblue;
}

@media (min-width: 800px) {
     {
        width: 500px;
    }
}

`


const StyleComponent = () => {


    const [change, setChange] = useState(false)

    const changeHandler = () => {
        setChange(true);
    }

    return (
        <>
            <Form isChanged={change}>
                <input type="text" onChange={changeHandler} />
                <button>Press</button>
            </Form>

        </>
    )


}




export default StyleComponent