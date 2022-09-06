import React, { useContext } from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from './TodoContext';
import { Modal } from "./Modal";
import { TodoForm } from '../TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

export const AppUI = () => {

    const {
        loading,
        error,
        deleteTodo,
        completeTodos,
        searchedTodos,
        openModal,
        onClickButton
    } = useContext(TodoContext)
    
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError error={error} />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}
                {
                    searchedTodos.map((todo, index) =>
                    (<TodoItem
                        key={todo.text}
                        todo={todo}
                        onDelete={() => deleteTodo(todo.text)}
                        onComplete={() => completeTodos(index)}
                    />)
                    )
                }
            </TodoList>
            {openModal && (
                    <Modal>
                        <TodoForm/>
                    </Modal>
            )}

            <CreateTodoButton onClickButton={onClickButton} openModal={openModal}/>
        </>
    )
}
