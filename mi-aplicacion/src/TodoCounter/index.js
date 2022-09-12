

import './index.css';


export const TodoCounter = ({ completed, totalTodos, loading }) => {

  return (
    <h2
      className={`TodoCounter ${loading && "TodoCounter--loading"}`}
    >

      Has Completado {completed} de {totalTodos} TODOs

    </h2>
  )
}
