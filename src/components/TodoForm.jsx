import React, { Fragment } from 'react';
import { useState } from 'react';


const TodoForm = (props) => {

    const [datos, setDatos] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
       // Cuando apreto el boton, resetea el Submit pero no recarga la pagina gracias al prevent default.-
        setDatos("")
       // Cuando el valor de "datos"cambie, le paso a este prop ese ese useState
        props.Addtodo(datos) 

    
    }
    return (
        <Fragment>


            <div className='container' >
                <h1>To Do List</h1>
                <form onSubmit={handleSubmit} className='cajaAgregar' >


                    <input className='cajaTodo'
                    value={datos}
                        type="text"

                        //placeholder='Add More Tasks'
                        placeholder = {props.tareasCompletadas? "Añade más tareas": "Estas al día, añade más tareas!"}


                        onChange={(e)=>setDatos(e.target.value)}
                    />

                    <button type='submit' className='botonagregar' >+</button>


                </form>
            </div>

        </Fragment>

    );
}

export default TodoForm;

<h1>test</h1>
