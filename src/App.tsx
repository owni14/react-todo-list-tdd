import "./app.scss";
import { BiBookmarks } from "react-icons/bi";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import TodoList from "./todoList";

function App() {
    dayjs.extend(advancedFormat);
    const today = dayjs().format("MMMM, Do");

    return (
        <div id="appContainer">
            <div className="todo-list-wrapper">
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
                <section className="todo-list-section-wrapper">
                    <div className="input-wrapper">
                        <input type="text" />
                        <button>Add</button>
                    </div>
                    <TodoList />
                </section>
            </div>
        </div>
    );
}

export default App;
