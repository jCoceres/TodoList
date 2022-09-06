import React from 'react'
import './index.css'
export const TodosLoading = () => {
  return (
    <>
      <div className='LoadingTodo-container'>
        <span className='LoadingTodo-completeIcon'></span>
        <p className='Loading-text'>Cargando TODOs...</p>       
      </div>
      <div className='LoadingTodo-container'>
        <span className='LoadingTodo-completeIcon'></span>
        <p className='Loading-text'>Cargando TODOs...</p>       
      </div>
      <div className='LoadingTodo-container'>
        <span className='LoadingTodo-completeIcon'></span>
        <p className='Loading-text'>Cargando TODOs...</p>
      </div>
      <div className='LoadingTodo-container'>
        <span className='LoadingTodo-completeIcon'></span>
        <p className='Loading-text'>Cargando TODOs...</p>
      </div>
    </>
  );
}
