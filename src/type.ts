/** Todo list type */
export interface ITodoList {
    no: number;
    todo: string;
}

/** Todo list header props  */
export interface ITodoListHeader {
    todoList: ITodoList[];
}

/** Todo list form props */
export interface ITodoListForm {
    setTodoList: React.Dispatch<React.SetStateAction<ITodoList[]>>;
}

/** Todo list props */
export interface ITodoListItems extends ITodoListHeader, ITodoListForm {}
