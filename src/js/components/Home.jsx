import React from "react";
import { useState } from "react";

const Home = () => {

	const [task, setTask] = useState("");
	const [store, setStore] = useState([]);

	const handleChange = (e) => {

		setTask(e.target.value);

	}
	const handleSubmit = (e) => {

		e.preventDefault();
		setStore([...store, {task}])
		setTask("")

	}

	const handleDelete = (index) => {
		let del = store.filter((el,i) => i != index)
		setStore(del)
	}
	

	return (
		<div>
			<h1 className="text-center p-3">My Todolist with React</h1>
			<form className="justificado" onSubmit={handleSubmit}>
				<input className="formato justificado" type="text" value={task} onChange={handleChange} placeholder="What needs to be done?"/>
				<input type="submit" hidden/>
			</form>
			<ul className="lista justificado">
				{store.map((el,i) => <li className="formato justificado" key={i}>{el.task} <i onClick={e=>handleDelete(i)} className="fa-solid fa-xmark cruz"></i></li>)}
			</ul>
			<div className="formatoParrafo justificado">
			<p className="parrafo">Left {store.length} items</p>
			</div>
		</div>
	);
};

export default Home;