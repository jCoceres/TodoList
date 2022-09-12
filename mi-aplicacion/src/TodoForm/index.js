import React from 'react'
import './index.css'
export const TodoForm = ({
    onCancel,
    newTodoValue,
    setNewTodoValue,
    addTodo }) => {

    const onChange = ({ target }) => {
        setNewTodoValue(target.value)
    }

    return (
        <form onSubmit={addTodo}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                type='text'
                value={newTodoValue}
                placeholder='Cortar cebolla'
                onChange={onChange} />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}
