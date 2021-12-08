import "../main.scss"

import React, { useEffect } from 'react'
import { useParams } from "react-router"
import axios from "axios"

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });




const TestAxios = () => {
    useEffect(async() => {
        const response = await instance.get('todos/1')

        console.log(response)

    }, [])
    return (
        <>
            <h1>Axios</h1>

        </>
    )

}
export default TestAxios