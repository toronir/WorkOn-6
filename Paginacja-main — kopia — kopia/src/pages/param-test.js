import "../main.scss"

import React from 'react'
import { useParams } from "react-router"






const ParamTest = () => {
const param = useParams();
return (
    <>
    <h1>User ID = {param.id}</h1>
   
    </>
)

}
export default ParamTest