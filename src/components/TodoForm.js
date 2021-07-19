import React, { useState, useEffect } from 'react'

const initialFormValues = {
    title: '',
    description: '',
}

function TodoForm({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) {

    const [formValues, setFormValues] = useState(initialFormValues);
    const { title, description } = formValues;
    const [error, setError] = useState(null);
    const [succesMsg, setSuccesMsg] = useState(null);

    useEffect(() => {
        if (todoEdit) {
            setFormValues(todoEdit)
        } else {
            setFormValues(initialFormValues)
        }
    }, [todoEdit])

    const handleInputChange = (event) => {

        const changedFormValues = {
            ...formValues,
            [event.target.name]: event.target.value
        }
        setFormValues(changedFormValues);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (title.trim() === '') {
            setError('Debes indicar un titulo')
            return
        }

        if (todoEdit) {
            todoUpdate(formValues);
            setSuccesMsg('Tarea Actualizada')

        } else {
            todoAdd(formValues)
            setSuccesMsg('Tarea agregada')
            setFormValues(initialFormValues)
        }

        setTimeout(() => {
            setSuccesMsg(null)
        }, 2000)
        setError(null)
    }

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h2 className='text-center display-5'>
                    {
                        todoEdit ? 'Editar tarea' : 'Crear tarea'
                    }
                </h2>
                {
                    todoEdit &&
                    (
                        <button
                            className="btn btn-sm btn-outline-danger h-100"
                            onClick={() => setTodoEdit(null)}
                        >X</button>
                    )
                }
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Titulo"
                    className="form-control mb-2"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="Descripcion"
                    className="form-control mb-2"
                    value={description}
                    name="description"
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block">
                    {
                        todoEdit ? 'Editar' : 'Agregar'
                    }
                </button>

            </form>
            {
                error &&
                (
                    <div className="alert alert-danger mt-3">
                        {error}
                    </div>
                )
            }

            {
                succesMsg &&
                (
                    <div className="alert alert-success mt-3">
                        {succesMsg}
                    </div>
                )
            }

        </div>
    )
}

export default TodoForm
