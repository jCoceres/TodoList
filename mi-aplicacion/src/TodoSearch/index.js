import React, { useContext } from 'react'
import { TodoContext } from '../App/TodoContext';
import './index.css';


export const TodoSearch = () => {
  const {
        searchValue,
        onSearchValue,
      } = useContext(TodoContext);

  return (
    <>  
          <input 
            className="TodoSearch" 
            placeholder='Cortar cebolla'
            value={searchValue}
            onChange={onSearchValue}
          />
    </>
  )
}
