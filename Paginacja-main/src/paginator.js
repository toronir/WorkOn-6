import React from 'react'
import "./main.scss"


const Paginator = ({ allPages, currentPage, setPage, }) => {
    const pages = []
    for (let i = 1; i <= allPages; i++) {
        pages.push(i)
    }


    const clickHandler = (newPage,e) => {
        e.preventDefault()
        setPage(newPage)

    }


    return (
        <nav >
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a className="page-link" href="#" onClick={clickHandler.bind(null,currentPage-1)}>{'<'}</a>
                    </li>

                {pages.map(page => <li className={`page-item ${currentPage === page ? "active" : ""}`}>
                    <a className="page-link" href="#" onClick={clickHandler.bind(null,page)}>{page}</a>
                    </li>)}

                <li className={`page-item ${currentPage === allPages ? 'disabled' : ''}`}>
                    <a className="page-link" href="#" onClick={clickHandler.bind(null,currentPage+1)}>{'>'}</a>
                    </li>
            </ul>
        </nav>
    )
}
export default Paginator