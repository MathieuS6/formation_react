import './App.css';
import React, {useState} from 'react';
import Task from './Task';
import Form from './Form';

export default function List() {

	const TasksInit = [
		{titre : 'titre1', desc: 'desc', id:"1"},
		{titre : 'titre2', desc: 'desc', id:"2"},
		{titre : 'titre3', desc: 'desc', id:"3"}
	]

	const [tasks, setTasks] = useState(TasksInit);

	return (
		<div className="App">
			<Form tasks={tasks} setTasks={setTasks}/>
			
			<br />
			<div className="listTasks">
				{tasks.map((task, i) => (
					<Task key={i} task={task} tasks={tasks} setTasks={setTasks}/>
				))}
			</div>
		</div>
	);
}