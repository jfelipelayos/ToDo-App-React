import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const initialTodos = []


const localTodos = JSON.parse(localStorage.getItem('todos'));

function App() {

    const [todos, setTodos] = useState(localTodos || initialTodos);
    const [todoEdit, setTodoEdit] = useState(null);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const todoDelete = (todoId) => {

        if (todoEdit && todoId === todoEdit.id) {
            setTodoEdit(null)
        }

        const changedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(changedTodos);
    }

    const todoToggleComplete = (todoId) => {

        const changedTodos = todos.map(todo => (
            todo.id === todoId
                ? { ...todo, completed: !todo.completed }
                : todo
        ))
        setTodos(changedTodos);

    }

    const todoAdd = (todo) => {
        const newTodo = {
            id: Date.now(),
            ...todo,
            completed: false,
        }

        const changedTodos = [
            newTodo,
            ...todos
        ]
        setTodos(changedTodos);
    }

    const todoUpdate = (todoEdit) => {
        const changedTodos = todos.map(todo => (
            todo.id === todoEdit.id
                ? todoEdit
                : todo
        ))
        setTodos(changedTodos);
    }

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-8">
                    <TodoList
                        todos={todos}
                        todoDelete={todoDelete}
                        todoToggleComplete={todoToggleComplete}
                        setTodoEdit={setTodoEdit}
                    />
                </div>
                <div className="col-4">
                    <TodoForm
                        todoAdd={todoAdd}
                        todoEdit={todoEdit}
                        todoUpdate={todoUpdate}
                        setTodoEdit={setTodoEdit}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
