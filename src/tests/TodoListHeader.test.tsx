import { render, screen } from "@testing-library/react";
import TodoListHeader from "../components/TodoListHeader";
import { ITodoList } from "../type";
import "@testing-library/jest-dom";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

describe("<TodoListHeader />", () => {
    const todoList: ITodoList[] = [];

    beforeEach(() => {
        dayjs.extend(advancedFormat);
        const today = dayjs().format("MMMM, Do");
        render(<TodoListHeader todoList={todoList} />);
    });

    test("check header text", () => {
        dayjs.extend(advancedFormat);
        const today = dayjs().format("MMMM, Do");

        const title = screen.getByText("To Do List");
        const date = screen.getByText(today);

        expect(title).toBeInTheDocument();
        expect(date).toBeInTheDocument();
    });
});
