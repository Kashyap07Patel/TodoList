import React, { useState, useEffect } from "react";
import { Button, Container, Select } from '@mui/material'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import '../style/todo.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const saveData = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  const onAddTodo = () => {
    if (newTodo.trim()) {
      let newTodos = [...todos, { todo: newTodo.trim(), id: Date.now() }];
      setTodos(newTodos);
      setNewTodo("");
      saveData(newTodos);
    }
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);

    saveData(newTodos);
  };

  return (
    <Container>
    <div className="todo">
      <table>
        <thead>
          <tr>
            <th>
                <TextField className="addtask"
                    value={newTodo}
                    name="task"
                    id="outlined-basic" 
                    label="Add TODO Task...." 
                    variant="outlined" 
                    onChange={(e) => setNewTodo(e.target.value)}
                />
            </th>
            
            <th>
                <Button type="submit" onClick={onAddTodo}>Add Task</Button>
            </th>
          </tr>
        </thead>

        <thead>
          <tr>
            <th scope="col" colSpan="2">
              Tasks
            </th>
            
          </tr>
        </thead>

        <tbody id="table">
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.todo}</td>
              
              <td>
                <Button
                  onClick={() => deleteTodo(todo.id)}
                > 
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Container>
  );
}

export default Todo;