import React, { useState } from 'react'
import style from './form.module.css'


const CssModules = () => {


    const [change, setChange] = useState(false)
    const [count, setCount] = useState(0)

    const changeHandler = () => {
        setChange(true);
    }
    const changeCollor = () => {
        if (count > 3) {
            setCount(0)
        } else {
            setCount(count++)
        }
    }
    const setColor = (n) => {
        switch (n) {
            case 0:
                ""
                break;

            case 1:
                "changed-r"
                break;

            case 2:
                "changed-g"
                break;

            case 3:
                "changed-b"
                break;

            default:

                break
        }
    }
    return (
        <>
            <form className={`${style.form} ${setColor(count)}`}>
                <input type="text" onChange={changeHandler} />
                <input type="text" onChange={changeHandler} />
                <input type="text" onChange={changeHandler} />

                <button onClick={changeCollor}>Press</button>
            </form>
            <button onClick={changeCollor}>Press</button>
        </>
    )
}




export default CssModules