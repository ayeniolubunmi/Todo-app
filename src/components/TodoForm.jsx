import React, { useState } from 'react';
import { useTodo } from '../contexts/index';

const TodoForm = () => {
    const [todo, setTodo] = useState('')
    const {addTodo} = useTodo();

    const add =(e)=>{
        e.preventDefault();
        addTodo({todo, completed: false})
        setTodo("")
    }
  return (
    <form onSubmit={add} className='flex'>
        <input type="text" 
        placeholder='Todo list...' 
        name="" 
        value={todo} 
        onChange={(e)=>setTodo(e.target.value)}
        className='w-full border rounded-l-lg px-2 py-1.5 border-black/10 bg-white/20 outline-none'
        />
        <button type='submit'className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'>
            Add
        </button>
    </form>
  );
}

export default TodoForm;
