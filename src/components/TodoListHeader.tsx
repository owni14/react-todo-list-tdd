import { ITodoListHeader } from "../type";

const TodoListHeader = ({ todoList }: ITodoListHeader) => {
    return (
        <div className="todo-list-top">
            <div className="top-wrapper">
                <p className="title">To Do List</p>
                <p className="active-tasks" data-testid="active-tasks">
                    {todoList.length} Active Tasks
                </p>
            </div>
        </div>
    );
};

export default TodoListHeader;
