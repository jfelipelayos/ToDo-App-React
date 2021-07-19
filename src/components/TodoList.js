import React from 'react'
import Todo from './Todo'

function TodoList({ todos, todoDelete, todoToggleComplete, setTodoEdit }) {

    return (
        <div>
            <h1 className="display-4">Lista de Tareas</h1>

            {
                todos.length === 0
                    ? (
                        <div className="alert alert-primary">Paz y tranquilidad . . . No hay tareas.</div>
                    ) : todos.map(todo => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            todoDelete={todoDelete}
                            todoToggleComplete={todoToggleComplete}
                            setTodoEdit={setTodoEdit}
                        />
                    ))}


        </div>
    )
}

export default TodoList
