import React from 'react'

const FilterName = ({search}) => {


    return (<div>
        <input className="form-control" onChange={(e)=>search(e.target.value)} />
    </div>)
}
export default FilterName