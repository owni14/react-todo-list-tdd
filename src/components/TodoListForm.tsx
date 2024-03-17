import { useState } from "react";
import { ITodoListForm } from "../type";

const TodoListForm = ({ setTodoList }: ITodoListForm) => {
    const [inputValue, setInputValue] = useState<string>("");

    const onClickButton = () => {
        setTodoList(prev => [...prev, { no: prev.length + 1, todo: inputValue }]);
        setInputValue("");
    };

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setInputValue(value);
    };

    return (
        <div className="input-wrapper">
            <input
                type="text"
                name="todo"
                value={inputValue}
                placeholder={"Please enter your todo list"}
                onChange={onChangeInput}
                onKeyUp={e => e.key === "Enter" && onClickButton()}
            />
            <button onClick={onClickButton} disabled={!inputValue}>
                Add
            </button>
        </div>
    );
};

export default TodoListForm;
