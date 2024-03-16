import TodoListHeader from "./components/TodoListHeader";
import TodoListForm from "./components/TodoListForm";
import "./app.scss";
import { useState } from "react";
import { ITodoList } from "./type";
import TodoListItems from "./components/TodoListItems";

function App() {
    const [todoList, setTodoList] = useState<ITodoList[]>([]);

    return (
        <div id="appContainer">
            <div className="todo-list-wrapper">
                <TodoListHeader todoList={todoList} />
                <section className="todo-list-section-wrapper">
                    <TodoListForm setTodoList={setTodoList} />
                    <TodoListItems todoList={todoList} setTodoList={setTodoList} />
                </section>
            </div>
        </div>
    );
}

export default App;
