import "./app.scss";
import { BiBookmarks } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

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
                    <main className="list-wrapper">
                        <div className="detail-list-wrapper">
                            <div
                                className={`${"detail-content"} ${"has-line"}`}>
                                <p>TASK 1</p>
                                <div className="icon-wrapper">
                                    <BiSolidTrash />
                                    <BiEdit />
                                </div>
                            </div>
                        </div>
                        <div className="detail-list-wrapper">
                            <div
                                className={`${"detail-content"} ${"has-line"}`}>
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
                </section>
            </div>
        </div>
    );
}

export default App;
