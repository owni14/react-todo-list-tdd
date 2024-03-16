import { fireEvent, render, screen } from "@testing-library/react";
import TodoListForm from "../components/TodoListForm";
import "@testing-library/jest-dom";
import { ITodoList } from "../type";

describe("<TodoListForm />", () => {
    const mockTodoList: ITodoList[] = [{ no: 1, todo: "first todo" }];
    const setMockTodoList: React.Dispatch<React.SetStateAction<ITodoList[]>> = jest.fn();

    beforeEach(() => {
        render(<TodoListForm setTodoList={setMockTodoList} />);
    });

    test("if nothing is entered input value, button is disabled", () => {
        const button: HTMLButtonElement = screen.getByRole("button");
        const inputValue: HTMLInputElement = screen.getByRole("textbox");

        expect(inputValue).not.toHaveValue();
        expect(button).toHaveAttribute("disabled");
    });

    test("if anything is entered input value, button becomes activated.", () => {
        const button: HTMLButtonElement = screen.getByRole("button");
        const inputValue: HTMLInputElement = screen.getByPlaceholderText("Please enter your todo list");

        fireEvent.change(inputValue, { target: { value: "todo something" } });

        expect(inputValue).toHaveValue();
        expect(button).not.toHaveAttribute("disabled");
    });

    test("when you press the button, the list is added", () => {
        const button: HTMLButtonElement = screen.getByRole("button");
        const inputField: HTMLInputElement = screen.getByPlaceholderText("Please enter your todo list");
        const inputValue: string = "new todo";

        fireEvent.change(inputField, { target: { value: inputValue } });
        fireEvent.click(button);

        setMockTodoList([...mockTodoList, { no: mockTodoList.length + 1, todo: inputValue }]);
        expect(setMockTodoList).toHaveBeenCalledWith([
            ...mockTodoList,
            { no: mockTodoList.length + 1, todo: inputValue },
        ]);
    });
});
