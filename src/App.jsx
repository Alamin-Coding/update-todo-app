import { useState } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [editId, setEditId] = useState(null);
    const [editInput, setEditInput] = useState('');
    const [searchTerm, setSearchTerm] = useState(''); // New state for search term

    // Add a new todo
    const handleAddTodo = () => {
        if (input.trim() === '') return;

        const newTodo = {
            id: Date.now(),
            text: input,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setInput('');
    };

    // Toggle complete status
    const handleCompleteTodo = (id) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Delete a todo
    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Edit a todo
    const handleEditTodo = (id, text) => {
        setEditId(id);
        setEditInput(text);
    };

    // Save edited todo
    const handleSaveEdit = () => {
        setTodos(todos.map((todo) =>
            todo.id === editId ? { ...todo, text: editInput } : todo
        ));
        setEditId(null);
        setEditInput('');
    };

    // Filtered todos based on the search term
    const filteredTodos = todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="App">
            <div className="App-header">
                <h1>Todo List</h1>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={handleAddTodo}>Add</button>

                    {/* Search input */}
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search tasks..."
                    className="search-input"
                />
            </div>

            <ul>
                {
                    filteredTodos.length > 0 ?
                        filteredTodos.map((todo) => (
                            <li key={todo.id}>
                                {editId === todo.id ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editInput}
                                            onChange={(e) => setEditInput(e.target.value)}
                                        />
                                        <button onClick={handleSaveEdit}>Save</button>
                                    </>
                                ) : (
                                    <>
                                        <input
                                            type="checkbox"
                                            checked={todo.completed}
                                            onChange={() => handleCompleteTodo(todo.id)}
                                        />
                                        <span
                                            style={{
                                                textDecoration: todo.completed ? 'line-through' : 'none',
                                            }}
                                        >
                                      {todo.text}
                                    </span>
                                        <button onClick={() => handleEditTodo(todo.id, todo.text)} className="edit">Edit
                                        </button>
                                        <button onClick={() => handleDeleteTodo(todo.id)} className="delete">Delete</button>
                                    </>
                                )}
                            </li>
                        ))
                        :
                        <li style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection: "column", gap: "5px"}}>
                            <i>Muribbi Muribbi humm humm</i>
                            <strong>No Item Found!</strong>
                        </li>

                }
            </ul>
        </div>
    );
}

export default App;
