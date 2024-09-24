import { useState } from "react";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";

const initTodoList = [
	{
		id: 0,
		content: "아침먹기",
		inputValue: "",
		isCompleted: false,
		isDeleted: false,
	},
	{
		id: 1,
		content: "점심먹기",
		inputValue: "",
		isCompleted: false,
		isDeleted: false,
	},
	{
		id: 2,
		content: "저녁먹기",
		inputValue: "",
		isCompleted: false,
		isDeleted: false,
	},
];

function App() {
	const [todoList, setTodoList] = useState(initTodoList);

	const handleClickCreateTodo = (todo) => {
		setTodoList((prevTodoList) => {
			return [
				{
					id: prevTodoList.length,
					content: todo,
					inputValue: "",
					isCompleted: false,
					isDeleted: false,
				},
				...prevTodoList,
			];
		});
	};

	const handleClickUpdate = (targetTodo, updateValue) => {
		setTodoList((prevTodoList) => {
			const newTodoList = prevTodoList.map((prevTodo) => {
				if (prevTodo.id === targetTodo.id) {
					return {
						...prevTodo,
						content: updateValue,
						inputValue: "",
					};
				} else {
					return prevTodo;
				}
			});
			console.log(newTodoList);
			return newTodoList;
		});
	};

	const handleClickDelete = (targetTodo) => {
		setTodoList((prevTodoList) => {
			const newTodoList = prevTodoList.map((prevTodo) => {
				if (prevTodo.id === targetTodo.id) {
					return {
						...prevTodo,
						isDeleted: true,
					};
				} else {
					return prevTodo;
				}
			});
			return newTodoList;
		});
	};
	const handleClickComplete = (targetTodo) => {
		setTodoList((prevTodoList) => {
			const newTodoList = prevTodoList.map((prevTodo) => {
				if (prevTodo.id === targetTodo.id) {
					return {
						...prevTodo,
						isCompleted: !prevTodo.isCompleted,
					};
				} else {
					return prevTodo;
				}
			});
			return newTodoList;
		});
	};

	return (
		<>
			<h1 className="pl-5 py-5 text-2xl font-bold">할 일 추가하기</h1>
			<TodoInput handleClickCreateTodo={handleClickCreateTodo} />
			<hr />
			<ul>
				{todoList.map((todo) => {
					return !todo.isDeleted ? (
						<li key={todo.id}>
							<Todo
								todo={todo}
								handleClickUpdate={handleClickUpdate}
								handleClickDelete={handleClickDelete}
								handleClickComplete={handleClickComplete}
							/>
						</li>
					) : null;
				})}
			</ul>
		</>
	);
}

export default App;
