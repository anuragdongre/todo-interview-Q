
import './App.css';
import React, { useState } from 'react';
function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(0)

  const handelSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId)
      const updateTodo = todos.map((t) => t.id === editTodo.id ? (t = { id: t.id, todo }) : { id: t.id, todo: t.todo }

      )
      setTodos(updateTodo)
      setEditId(0)
      setTodo('')
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  }


  const handelDelete = (id) => {
    const deleteTodo = todos.filter((d) => d.id !== id);
    setTodos([...deleteTodo])
  }

  const handelEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id)
    setTodo(editTodo.todo);
    setEditId(id)
  }
  return (
    <div className="App">
      <div className='container'>
        <h1>Todo List</h1>
        <form className='todoForm' onSubmit={handelSubmit}>
          <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />

          <button>{editId ? "Edit" : "GO"}</button>
        </form>
        <ul className='allTodo'>

          {
            todos.map((t) => (
              <li className='singleTodo'>
                <span className='todoText' key={t.id}>{t.todo}</span>
                <button onClick={() => handelEdit(t.id)}>Edit</button>
                <button onClick={() => handelDelete(t.id)}>Delete</button>
              </li>
            ))
          }

        </ul>
      </div>
    </div>
  );
}

export default App;
