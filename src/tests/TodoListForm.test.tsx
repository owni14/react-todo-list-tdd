import { fireEvent, render, screen } from "@testing-library/react";
import TodoListForm from "../components/TodoListForm";
import "@testing-library/jest-dom";
import { ITodoList } from "../type";

describe("<TodoListForm />", () => {
    const mockTodoList: ITodoList[] = [{ no: 1, todo: "first todo" }];
    const setMockTodoList: React.Dispatch<React.SetStateAction<ITodoList[]>> = jest.fn();
    const newTodo: string = "new todo";
    const addedMockTodoList = [...mockTodoList, { no: mockTodoList.length + 1, todo: newTodo }];

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
        const inputValue: HTMLInputElement = screen.getByRole("textbox");

        fireEvent.change(inputValue, { target: { value: newTodo } });

        expect(inputValue).toHaveValue();
        expect(button).not.toHaveAttribute("disabled");
    });

    test("when you press the button, the list will be added", () => {
        const button: HTMLButtonElement = screen.getByRole("button");
        const inputValue: HTMLInputElement = screen.getByRole("textbox");

        fireEvent.change(inputValue, { target: { value: newTodo } });
        expect(inputValue).toHaveValue();

        fireEvent.click(button);
        expect(inputValue).not.toHaveValue();
        setMockTodoList(addedMockTodoList);
        expect(setMockTodoList).toHaveBeenCalledWith(addedMockTodoList);
    });
});
