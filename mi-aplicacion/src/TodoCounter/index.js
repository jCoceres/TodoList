import React, { useContext } from 'react'
import { TodoContext } from '../App/TodoContext';
import './index.css';


export const TodoCounter = () => {
  const {
    completed,
    totalTodos
} = useContext(TodoContext)
  return (
        <h2 className='TodoCounter'>Has Completado {completed} de {totalTodos} TODOs</h2>
  )
}
