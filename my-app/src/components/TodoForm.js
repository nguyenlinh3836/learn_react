import React, {useState, useEffect, useRef} from 'react';

const TodoForm = (props) => {
    const[input,setInput] = useState('');
    const inputRef = useRef(null)
    useEffect(()=> {
        inputRef.current.focus()
    })
    const handleChange = e => {
        setInput(e.target.value);
    };
    const handlesubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text:input
        });
        setInput('');
    };
    return(
            <form className="todo-form" onSubmit={handlesubmit}>
                <input type="text" placeholder="Add to do" value={input} name="text" className="todo-input" onChange={handleChange} ref={inputRef}/>
                <button className="todo-button edit" onClick={handlesubmit}>Add todo</button>
            </form>
    );
};

export  default TodoForm;