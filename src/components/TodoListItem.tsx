import { BiEdit, BiSolidTrash } from "react-icons/bi";
import { ITodoListItems } from "../type";

const TodoListItems = ({}: ITodoListItems) => {
    return (
        <main className="list-wrapper">
            <div className="detail-list-wrapper">
                <div className={`${"detail-content"} ${"has-line"}`}>
                    <p>TASK 1</p>
                    <div className="icon-wrapper">
                        <BiSolidTrash />
                        <BiEdit />
                    </div>
                </div>
            </div>
            <div className="detail-list-wrapper">
                <div className={`${"detail-content"} ${"has-line"}`}>
                    <p>TASK 2</p>
                    <div className="icon-wrapper">
                        <BiSolidTrash />
                        <BiEdit />
                    </div>
                </div>
            </div>
            <div className="detail-list-wrapper">
                <div className="detail-content">
                    <p>TASK 3</p>
                    <div className="icon-wrapper">
                        <BiSolidTrash />
                        <BiEdit />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TodoListItems;
