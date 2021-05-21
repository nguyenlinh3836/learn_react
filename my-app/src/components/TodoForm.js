import React from 'react';

const Form = ({setInputext}) => {
    const inputTextHandler =(e)=> {
        console.log(e.target.value);
        setInputext(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
    }
    return(
         <form>
             <input onChange={inputTextHandler} type="text" className="todo-input"/>
             <button onClick={submitTodoHandler} className="todo-button" type="submit">
                 <i className="fas fa-plus-square"></i>
             </button>
             <div className="select">
                 <select name="todos" className="filter-todo">
                     <option value="all">ALL</option>
                     <option value="complete">Complete</option>
                     <option value="uncomplete">Uncomplete</option>
                 </select>
             </div>
         </form>
    );
};

export  default Form;