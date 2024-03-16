import { render, screen } from "@testing-library/react";
import TodoListHeader from "../components/TodoListHeader";
import { ITodoList } from "../type";
import "testing-library/jest-dom";

describe("<TodoListHeader />", () => {
    let todoList: ITodoList[] = [];
    render(<TodoListHeader todoList={todoList} />);

    test("has title", () => {
        const title = screen.getByText("To Do List");
        expect(title).toBeInTheDocument();
    });
});
