import { createContext, useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext(); 

function TodoProvider (props) {

    const {
        item,  
        saveItem, 
        loading, 
        error,

    } = useLocalStorage ('TODOS_V1', [] );
    const [openModal, setOpenModal] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [newTodoValue, setNewTodoValue] = useState('')

    const completed = item.filter(item => item.completed).length;
    const totalTodos = item.length;

    const onSearchValue = ({ target }) => {
        setSearchValue(target.value)
    }
    
    let searchedTodos = [];
    if (!searchValue.length >= 1) {
        searchedTodos = item;
    } else {
        searchedTodos = item.filter(item => {
            const todoText = item.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        })
    }

    const completeTodos = (index) => {
        const newItem = [...item];
        newItem[index].completed = !newItem[index].completed;
        saveItem(newItem);
    }

    const deleteTodo = (text) => {
        saveItem(item.filter((item) => item.text !== text))
    }
    const onSetText = ({target}) => {
        setNewTodoValue(target.value)
    }
    const addTodo = (event) => {
        event.preventDefault();
        const newTodos = [...item];
        newTodos.push({
            text: newTodoValue,
            completed: false
        })
        saveItem(newTodos);
        setNewTodoValue('');
        setOpenModal(false);
    }
    const onClickButton = () => {
        setOpenModal(op => !op);
        setNewTodoValue('');
      }

    return (
    <TodoContext.Provider value={{
        totalTodos,
        completed,
        searchedTodos,
        searchValue,
        completeTodos,
        deleteTodo,
        loading,
        error,
        onSearchValue,
        openModal,
        setOpenModal,
        newTodoValue,
        onSetText,
        addTodo,
        onClickButton
    }}>
        {props.children}
    </TodoContext.Provider>
    );
}

export { TodoProvider, TodoContext }