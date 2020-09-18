import React,{ useState } from 'react';

const AddTodo = ({ addTodo }) => {
    // state
    const [newTodo, setTodo] = useState(
        {
            id: null,
            content: null
        }
    );

    const handleChange = (e) => {
        setTodo({
            content: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo);
        setTodo({
            content: ''
        })
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add New Todo</label>
                <input type="text" onChange={handleChange} value={newTodo.content}/>
            </form>
        </div>
    )
}

export default AddTodo;