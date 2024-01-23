import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

const TodoItem = ({todo}) => {
    const[isTodoEditAble, setIsTodoEditAble] = useState(false);
    const [msgTodo, setMsgTodo] =  useState(todo.todo);
    const {toggleComplete, deleteTodo, updateTodo} = useTodo(); 

    const editTodo = ()=>{
        updateTodo(todo.id, {...todo, todo: msgTodo})
        setIsTodoEditAble(false)
    }

    const toggleCompleted =()=>{
        toggleComplete(todo.id);
    }
  return (
    <div className={`flex border border-black/10 rounded-lg shadow-sm shadow-white/50 
    duration-500 text-black ${todo.completed ? "bg-[#c6e9a7]":"bg-[#ccbed7]"}`}>
        <input type="checkbox"
        className='cursor-pointer' 
        checked={todo.completed} 
        onChange={toggleCompleted}/>
        <input type="text" 
        className={`w-full bg-transparent rounded-lg outline-none 
        ${isTodoEditAble ? "border-black/10 px-2":"border-transparent"}`} 
        value={msgTodo}
        onChange={(e)=>setMsgTodo(e.target.value)}
        readOnly={!isTodoEditAble}
        />
        <button 
        className='justify-center 
        items-center border 
        border-black/10 
        inline-flex w-8 h-8 
        rounded-lg 
        bg-gray-50 
        hover:bg-gray-100 
        shrink-0 disabled:opacity-50' onClick={()=>
        {if(todo.completed) return
         if(isTodoEditAble){
            editTodo()
         }else setIsTodoEditAble((prev)=>!prev)}}>
            {isTodoEditAble ? "📁":"✏️"}
        </button>
        <button 
        className='inline-flex w-8 h-8 
        justify-center 
        items-center 
        text-sm 
        rounded-lg 
        shadow-sm 
        shadow-white/50 border 
        border-black/10
        bg-gray-50 
        hover:bg-gray-100' onClick={()=>deleteTodo(todo.id)} >❌</button>
    </div>
  );
}

export default TodoItem;
