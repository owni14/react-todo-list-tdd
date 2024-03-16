import { fireEvent, render, screen } from "@testing-library/react";
import TodoListHeader from "../components/TodoListHeader";
import { ITodoList } from "../type";
import "@testing-library/jest-dom";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import TodoListForm from "../components/TodoListForm";

describe("<TodoListHeader />", () => {
    const mockTodoList: ITodoList[] = [{ no: 1, todo: "first todo" }];
    const setMockTodoList: React.Dispatch<React.SetStateAction<ITodoList[]>> = jest.fn();
    const newTodo = "new todo";
    const addedMockTodoList = [...mockTodoList, { no: mockTodoList.length + 1, todo: newTodo }];

    test("check header text", () => {
        render(<TodoListHeader todoList={mockTodoList} />);
        dayjs.extend(advancedFormat);

        const title = screen.getByText("To Do List");
        const date = screen.getByText(dayjs().format("MMMM, Do"));

        expect(title).toBeInTheDocument();
        expect(date).toBeInTheDocument();
    });

    test("click add button", () => {
        render(<TodoListForm setTodoList={setMockTodoList} />);
        const button: HTMLButtonElement = screen.getByRole("button");
        const inputValue: HTMLInputElement = screen.getByRole("textbox");

        fireEvent.change(inputValue, { target: { value: newTodo } });
        expect(inputValue).toHaveValue();

        fireEvent.click(button);
        expect(inputValue).not.toHaveValue();

        setMockTodoList(addedMockTodoList);
        expect(setMockTodoList).toHaveBeenCalledWith(addedMockTodoList);
    });

    test("increase todo list length", () => {
        render(<TodoListHeader todoList={addedMockTodoList} />);
        const activeTask = screen.getByTestId("active-tasks");

        expect(activeTask.textContent).toContain(`${addedMockTodoList.length} Active Tasks`);
    });
});
