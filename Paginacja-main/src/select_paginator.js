import React from 'react'
import "./main.scss"


const SelectPaginator = ({changeItemsPerPageHandler,itemsPerPage}) => {
    return (
        <div>
        <label>Number of the users on the list</label>
        <select className="form-control" defaultValue={itemsPerPage} onChange={(e)=> changeItemsPerPageHandler(e.target.value) }>
       
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
      </select>
      </div>
    )
}
export default SelectPaginator