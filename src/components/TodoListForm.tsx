import { ITodoListForm } from "../type";

const TodoListForm = ({ setTodoList }: ITodoListForm) => {
    const onClickButton = () => {};

    return (
        <div className="input-wrapper">
            <input type="text" />
            <button onClick={onClickButton}>Add</button>
        </div>
    );
};

export default TodoListForm;
