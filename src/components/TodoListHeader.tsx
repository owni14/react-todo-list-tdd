import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { BiBookmarks } from "react-icons/bi";
import { ITodoListHeader } from "../type";

const TodoListHeader = ({ todoList }: ITodoListHeader) => {
    dayjs.extend(advancedFormat);
    const today = dayjs().format("MMMM, Do");

    return (
        <div className="todo-list-top">
            <div className="top-wrapper">
                <div className="date-wrapper">
                    <p>{today}</p>
                    <p>3 Active Tasks</p>
                </div>
                <p className="title">To do List</p>
                <div className="svg-wrapper">
                    <BiBookmarks />
                </div>
            </div>
        </div>
    );
};

export default TodoListHeader;
