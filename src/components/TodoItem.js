import React, { Fragment } from 'react'


const TodoItem = (props) => {

 

    return (
        <Fragment >


            <div className='todoItem' >

                <div className='tarea'>

                    {props.tarea.text}
                </div>
                <div >
                    <button className='botonEliminar' onClick={() =>props.removeTodo(props.tarea.id)} >X</button>
                </div>
            </div>

        </Fragment>


    );
}

export default TodoItem;


