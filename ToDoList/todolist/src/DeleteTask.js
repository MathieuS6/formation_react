import React, { useState } from 'react';

export default function DeleteTask({task, tasks, setTasks}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        let deleteTask = [...tasks];

        tasks.map((deletedTask, i) => {
            if(deletedTask.id == task.id){
                deleteTask.splice(i, 1);
                setTasks(deleteTask);
                return;
            }
        })
    }

    return (
        <form>
            <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-danger">Supprimer</button>
        </form>
    );
}