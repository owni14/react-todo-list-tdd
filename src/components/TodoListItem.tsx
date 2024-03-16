import { BiSolidTrash } from "react-icons/bi";
import { ITodoList, ITodoListItems } from "../type";
import cx from "classnames";

const TodoListItems = ({ todoList, setTodoList }: ITodoListItems) => {
    const onClickButton = (delNo: number) => {
        setTodoList(prev =>
            prev.reduce((acc: ITodoList[], cur: ITodoList) => {
                const { no, todo } = cur;
                if (no !== delNo) {
                    if (no > delNo) {
                        return [...acc, { no: no - 1, todo }];
                    } else {
                        return [...acc, { no, todo }];
                    }
                }
                return acc;
            }, []),
        );
    };

    return (
        <main
            className={cx("list-wrapper", {
                hide: !todoList.length,
                scroll: todoList.length > 5,
            })}>
            {todoList.map(list => (
                <div className="detail-list-wrapper" key={list.no}>
                    <div
                        className={cx("detail-content", {
                            line: list.no !== 1,
                        })}>
                        <p>{list.todo}</p>
                        <div
                            className="icon-wrapper"
                            onClick={() => onClickButton(list.no)}>
                            <BiSolidTrash />
                        </div>
                    </div>
                </div>
            ))}
        </main>
    );
};

export default TodoListItems;
