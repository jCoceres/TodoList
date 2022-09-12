import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage';



export function useTodos () {
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [newTodoValue, setNewTodoValue] = useState('')
    const {
        item,  
        saveItem, 
        loading, 
        error,
    } = useLocalStorage ('TODOS_V1', [] );
    
    const completed = item.filter(item => item.completed).length;
    const totalTodos = item.length;

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
    const onClickButton = () => {
        setOpenModal(op => !op);
        setNewTodoValue('');
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
    const deleteTodo = (text) => {
        saveItem(item.filter((item) => item.text !== text))
    }
    return {
        loading,
        error,
        completeTodos,
        searchedTodos,
        totalTodos,
        completed,
        saveItem,
        searchValue,
        setSearchValue,
        openModal,
        onClickButton,
        addTodo,
        newTodoValue,
        deleteTodo,
        setNewTodoValue,
    };

}
