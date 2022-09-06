import React from 'react'
import './index.css';
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";


export const TodoItem = ({ onDelete, todo, onComplete}) => {

    return (
        <li className="TodoItem">
            <span 
                className='Icon Icon-check'
                onClick ={onComplete}
            >
                {todo.completed ? <GrCheckboxSelected className='Icon-check--active' /> : <GrCheckbox color='#ccc'/>}
            </span>
            <p className={`TodoItem-p ${todo.completed && 'TodoItem-p--complete'}`}>
                {todo.text}
            </p>
            <span 
                
                onClick = {onDelete}
            >
                
                <IoIosCloseCircleOutline className="Icon Icon-delete"/>

            </span>
        </li>
    )
}
