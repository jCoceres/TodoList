import React, { useContext } from 'react'
import { TodoContext } from '../App/TodoContext';
import './index.css'
export const TodoForm = () => {
    const {
        NewTodoValue,
        onSetText,
        addTodo,
        onClickButton
    } = useContext(TodoContext);
    return (
        <form onSubmit={addTodo}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                type='text'
                value={NewTodoValue}
                placeholder='Cortar cebolla'
                onChange={onSetText} />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onClickButton}
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
