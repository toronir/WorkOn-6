import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { render } from 'sass';





const App = () => {
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])
    const [itemPerPage, setItemPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)
    const allItems = useRef(0);
    const allPages = useRef(0);

    useEffect(() => {
        getItems()

    },[itemPerPage,currentPage])

   /*  const getItems = async () => {
        setLoading(true);
        const response = await fetch(`https://reqres.in/api/users?page=${currentPage}&per_page=${itemPerPage}`);
        const responseJson = await response.json();

        console.log(responseJson)
    } */
    const getItems = () =>{
        setLoading(true)
        fetch(`https://reqres.in/api/users?page=${currentPage}&per_page=${itemPerPage}`)
        .then((respons)=>respons.json())
        .then((responseJson)=>{
            allItems.current = responseJson.total;
            allPages.current = Math.ceil(responseJson.total/ itemPerPage)

            setLoading(false)
            setList(responseJson.data)
        })
    }





    render(
        <>

        </>
    )
}

ReactDOM.render(<App />, roott);