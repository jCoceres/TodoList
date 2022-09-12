import React from 'react'
import './index.css'

export const TodoList = ({ onError,onLoading,onEmptyTodos,children,onEmptySearchResults}) => {
  return (
    <section className='TodoList-container'>
      {onError()}
      {onLoading()}
      {onEmptyTodos()}
      {onEmptySearchResults()}
      <ul>
      {children}
      </ul>
    </section>
  )
}
