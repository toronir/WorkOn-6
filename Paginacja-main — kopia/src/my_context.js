import React, { createContext, useState } from 'react'

export const MyContext = createContext()
const MyContextProv = ({ children }) => {

    const [name, setName] = useState('Jan')

    return (

        <MyContext.Provider value={{ name: name, setName: setName }}>
            {children}
        </MyContext.Provider>
    )


}




export default MyContextProv