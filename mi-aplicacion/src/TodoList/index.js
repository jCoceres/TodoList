import React from 'react'
import './index.css'

export const TodoList = (props) => {
  return (
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  )
}
