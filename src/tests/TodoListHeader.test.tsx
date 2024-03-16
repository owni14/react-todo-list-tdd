import { fireEvent, render, screen } from "@testing-library/react";
import TodoListHeader from "../components/TodoListHeader";
import { ITodoList } from "../type";
import "@testing-library/jest-dom";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import TodoListForm from "../components/TodoListForm";

describe("<TodoListHeader />", () => {
    const mockTodoList: ITodoList[] = [{ no: 1, todo: "first todo" }];

    test("check header text", () => {
        render(<TodoListHeader todoList={mockTodoList} />);
        dayjs.extend(advancedFormat);
        const today = dayjs().format("MMMM, Do");

        const title = screen.getByText("To Do List");
        const date = screen.getByText(today);

        expect(title).toBeInTheDocument();
        expect(date).toBeInTheDocument();
    });

    test("when button is clicked, todoList length increase 1", () => {
        const setMockTodoList: React.Dispatch<React.SetStateAction<ITodoList[]>> = jest.fn();
        render(
            <div>
                <TodoListHeader todoList={mockTodoList} />
                <TodoListForm setTodoList={setMockTodoList} />
            </div>,
        );

        const button: HTMLButtonElement = screen.getByRole("button");
        const inputValue: HTMLInputElement = screen.getByRole("textbox");
        const newTodo = "new todo";

        fireEvent.change(inputValue, { target: { value: newTodo } });
        expect(inputValue).toHaveValue();

        fireEvent.click(button);
        setMockTodoList([...mockTodoList, { no: mockTodoList.length + 1, todo: newTodo }]);
        expect(setMockTodoList).toHaveBeenCalledWith([...mockTodoList, { no: mockTodoList.length + 1, todo: newTodo }]);

        const activeTask = screen.getByTestId("active-tasks");
        expect(activeTask.textContent).toContain(`${mockTodoList.length} Active Tasks`);
    });
});
