import React from 'react'

function Todo({ todo, todoDelete, todoToggleComplete, setTodoEdit }) {
    const { title, description, id, completed } = todo;
    return (
        <div>
            <div className="card mb-4">
                <div className="card-body text-right">
                    <div className="d-flex justify-content-end">
                        <h3 className="card-title">{title}</h3>
                        <button
                            className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} ml-2 h-100`}
                            onClick={() => todoToggleComplete(id)}
                        >
                            {completed ? 'Terminado' : 'Terminar'}
                        </button>
                    </div>
                    <p className="card-text">{description}</p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <button
                            className="btn btn-sm btn-outline-primary mr-2"
                            onClick={() => setTodoEdit(todo)}
                        >
                            Editar
                        </button>
                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => todoDelete(id)}
                        >
                            Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
