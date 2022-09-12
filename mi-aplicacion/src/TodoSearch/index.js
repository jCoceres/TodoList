import React from 'react'
import './index.css';


export const TodoSearch = ({searchValue,setSearchValue, loading}) => {

    const onSearchValue = ({ target }) => {
      setSearchValue(target.value)
  }
  return (
    <>  
          <input 
            className="TodoSearch" 
            placeholder='Cortar cebolla'
            value={searchValue}
            onChange={onSearchValue}
            disabled={loading}
          />
    </>
  )
}
