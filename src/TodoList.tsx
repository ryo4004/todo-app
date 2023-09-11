import { useState } from "react";

export const TodoList = () => {
	const initialState = ["first", "second", "third"];
	const [list, setList] = useState(initialState);
	const [input, setInput] = useState("");
	const onClickDelete = (index: number) => {
		const newList = list.filter((_, i) => i !== index);
		setList(newList);
	};
	const onClickAdd = () => {
		const newList = [...list, input];
		setList(newList);
	};
	return (
		<>
			<h2>TodoList</h2>
			<input value={input} onChange={(e) => setInput(e.target.value)} />
			<button onClick={onClickAdd}>追加</button>
			{list.map((item, index) => {
				return (
					<li key={index}>
						{item}
						<button onClick={() => onClickDelete(index)}>削除</button>
					</li>
				);
			})}
		</>
	);
};
