import { useState } from "react";

function Todo({
	todo,
	handleClickUpdate,
	handleClickDelete,
	handleClickComplete,
}) {
	const [updateValue, setUpdateValue] = useState("");

	const handleUpdateInput = (event) => {
		const currentValue = event.target.value;
		setUpdateValue(currentValue);
	};

	const handleClickEditTodo = () => {
		handleClickUpdate(todo, updateValue);
		setUpdateValue("");
	};

	return (
		<article className="pl-5 pt-5 flex flex-col gap-y-2">
			<h4 className={`${todo.isCompleted ? "line-through" : "none"}`}>
				{todo.content}
			</h4>
			<div>
				<input
					className="border py-1 px-3 mr-2"
					value={updateValue}
					onChange={(event) => handleUpdateInput(event)}
					type="text"
				/>
				<button
					className="border py-1 px-3 mr-1"
					onClick={handleClickEditTodo}
				>
					수정
				</button>
				<button
					className="border py-1 px-3 mr-1"
					onClick={() => handleClickDelete(todo)}
				>
					삭제
				</button>
				<button
					className="border py-1 px-3 mr-1"
					onClick={() => handleClickComplete(todo)}
				>
					완료
				</button>
			</div>
		</article>
	);
}

export default Todo;
