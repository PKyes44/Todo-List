import React, { useState } from "react";

function TodoInput({ handleClickCreateTodo }) {
	const [todo, setTodo] = useState("");
	const handleChangeTodo = (e) => {
		setTodo(e.target.value);
	};

	const handleClickAddTodo = () => {
		handleClickCreateTodo(todo);
		setTodo("");
	};

	return (
		<div className="pl-5 pb-2 flex flex-row gap-x-2">
			<input
				className="border"
				value={todo}
				onChange={handleChangeTodo}
				type="text"
			/>
			<button className="border py-1 px-3" onClick={handleClickAddTodo}>
				추가
			</button>
		</div>
	);
}

export default TodoInput;
