import React, {useState} from 'react';
import DeleteTask from './DeleteTask';
import './Task.css';

function Task({task, tasks, setTasks}) {
        return (
        <div className='container my-5 text-center'>
            <div className='border'>
                <div>{task.titre}</div>
                <p>{task.desc}</p>
                <label htmlFor={"done"+task.id}>Done</label>
                <input className="mb-3 form-label" type="checkbox" id={"done"+task.id}/>
                <br />
                <DeleteTask task={task} tasks={tasks} setTasks={setTasks}/>
            </div>
        </div>
    );
}

export default Task;