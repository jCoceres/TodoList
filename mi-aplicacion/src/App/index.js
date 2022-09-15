import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from "./Modal";
import { TodoForm } from '../TodoForm';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoHeader } from '../TodoHeader';
import { useTodos } from './useTodos';
import { EmptyResults } from '../EmptyResults';
import { ChangeAlert} from '../ChangeAlert';


function App() {
    const {
        loading,
        error,
        completeTodos,
        searchedTodos,
        completed,
        totalTodos,
        searchValue,
        setSearchValue,
        openModal,
        onClickButton,
        deleteTodo,
        newTodoValue,
        setNewTodoValue,
        addTodo,
        sincronizeTodos,
    } = useTodos();
    return (
        <>
            <TodoHeader loading={loading}>
                <TodoCounter
                    completed={completed}
                    totalTodos={totalTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>
            <TodoList
                onError={() => error && <TodosError />}
                onLoading={() => loading && <TodosLoading />}
                onEmptyTodos={() => (!loading && !searchedTodos.length && !searchValue) && <EmptyTodos />}
                onEmptySearchResults={() => (!totalTodos.length && searchValue) && <EmptyResults searchValue={searchValue} />}
            >
                {searchedTodos.map((todo, index) => (
                    <TodoItem
                        key={todo.text}
                        todo={todo}
                        onDelete={() => deleteTodo(todo.text)}
                        onComplete={() => completeTodos(index)}
                    />)
                )}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm
                        onCancel={onClickButton}
                        newTodoValue={newTodoValue}
                        setNewTodoValue={setNewTodoValue}
                        addTodo={addTodo}
                    />
                </Modal>
            )}

            <CreateTodoButton
                onClickButton={onClickButton}
                openModal={openModal} />
            <ChangeAlert
                sincronize={sincronizeTodos}
            />
        </>
    );
}

export default App;


