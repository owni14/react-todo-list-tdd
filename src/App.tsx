import "./app.scss";

function App() {
    return (
        <div id="appContainer">
            <div className="todo-list-wrapper">
                <div className="todo-list-top">
                    <div className="top-wrapper">
                        <p>section1</p>
                        <p>section2</p>
                        <p>section3</p>
                    </div>
                </div>
                <section className="todo-list-section-wrapper">
                    <div className="input-wrapper">
                        <input type="text" />
                        <button>Add</button>
                    </div>
                    <main className="list-wrapper">
                        <div className="detail-list-wrapper">
                            <p>text</p>
                            <p>delet button</p>
                        </div>
                        <div className="detail-list-wrapper">
                            <p>text</p>
                            <p>delet button</p>
                        </div>
                        <div className="detail-list-wrapper">
                            <p>text</p>
                            <p>delet button</p>
                        </div>
                        <div className="detail-list-wrapper">
                            <p>text</p>
                            <p>delet button</p>
                        </div>
                    </main>
                </section>
            </div>
        </div>
    );
}

export default App;
