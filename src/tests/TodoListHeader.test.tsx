import { render, screen } from "@testing-library/react";
import TodoListHeader from "../components/TodoListHeader";
import { ITodoList } from "../type";
import "@testing-library/jest-dom";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

describe("<TodoListHeader />", () => {
    let todoList: ITodoList[] = [];
    render(<TodoListHeader todoList={todoList} />);

    /** Text test */
    test("Check text", () => {
        dayjs.extend(advancedFormat);
        const today = dayjs().format("MMMM, Do");

        const title = screen.getByText("To Do List");
        const date = screen.getByText(today);

        expect(title).toBeInTheDocument();
        expect(date).toBeInTheDocument();
    });
});
