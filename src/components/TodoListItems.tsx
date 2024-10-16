import cx from "classnames";
import { BiSolidTrash } from "react-icons/bi";
import { ITodoList, ITodoListItems } from "../type";

const TodoListItems = ({ todoList, setTodoList }: ITodoListItems) => {
    const onClickDelete = (delNo: number) => {
        setTodoList(prev =>
            prev.reduce((acc: ITodoList[], cur: ITodoList) => {
                const { no, todo } = cur;
                if (no !== delNo) {
                    if (no > delNo) {
                        return [...acc, { no: no - 1, todo }];
                    }
                    return [...acc, { no, todo }];
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
                <div className="detail-content" key={list.no}>
                    <div className="text-area">
                        <p data-testid="no">{`${list.no}.`}</p>
                        <p data-testid="text">{list.todo}</p>
                    </div>
                    <div className="icon-wrapper" data-testid="delete" onClick={() => onClickDelete(list.no)}>
                        <BiSolidTrash />
                    </div>
                </div>
            ))}
        </main>
    );
};

export default TodoListItems;
