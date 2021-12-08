import "./main.scss"

import React, { useState, useEffect, useRef, useReducer } from 'react'
import ReactDOM from 'react-dom'
import UserCard from "./user_card"
import Preloader from "./preloader"
import Paginator from "./paginator"
import SelectPaginator from "./select_paginator"
import EmptyWorn from "./emptyWorning"




const App = () => {
    const [loadingFirstTime, setLoadingFirstTime] = useState(false)
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([])
    const [itemsPerPage, setItemsPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(1)
    const allItems = useRef(0)
    const allPages = useRef(0)
    const listRef = useRef(null)

    useEffect(() => {
        getItems()
    }, [itemsPerPage, currentPage])

    useEffect(() => {
        window.onscroll = () => {
            const windowHeight = window.innerHeight;
            const listPosition = listRef.current.getBoundingClientRect()

            if(listPosition.bottom +80<= windowHeight && currentPage < allPages.current && !loading){
                setCurrentPage(currentPage => currentPage +1)
            }
        }
    }, [currentPage, loading])

    const changeItemsPerPageHandler = (n) => {
        setItemsPerPage(n);
        setCurrentPage(1);
        setList([])
    }

    const getItems = () => {
        setLoading(true);

        fetch(`https://reqres.in/api/users?page=${currentPage}&per_page=${itemsPerPage}`)
            .then(response => response.json())
            .then(resJson => {
                allItems.current = resJson.total;
                allPages.current = Math.ceil(resJson.total / itemsPerPage);
                console.log(resJson)

                setLoading(false);
                setLoadingFirstTime(true);
                setList([...list,...resJson.data])
            })


    }

    return (
        <>





            <div className="container" >
                <div className={`row justify-content-center ${loading ? "loading" : ""}`}>
                    <div className="col-lg-8" ref={listRef}>

                        <div className="d-flex justify-content-between align-item-center">
                            <h1 className="my-5">User List</h1>
                            <SelectPaginator changeItemsPerPageHandler={changeItemsPerPageHandler} itemsPerPage={itemsPerPage} />
                        </div>
                        {list.map((item, index) => (
                            <UserCard key={index} item={item} loading={loading} />
                        ))}
                        <Preloader isLoading={loading} />
                        {currentPage === allPages.current && !loading ?<EmptyWorn/> : ""}
                    </div>
                </div>

            </div>


        </>
    )
}




ReactDOM.render(<App />, document.getElementById('root'))
