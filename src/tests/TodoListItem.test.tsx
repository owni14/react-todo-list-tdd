import { render, screen, fireEvent } from "@testing-library/react";
import TodoListForm from "../components/TodoListForm";
import "@testing-library/jest-dom";
import { ITodoList } from "../type";
import TodoListItems from "../components/TodoListItems";

describe("<TodoListForm />", () => {
    const mockTodoList: ITodoList[] = [];
    const setMockTodoList: React.Dispatch<React.SetStateAction<ITodoList[]>> = jest.fn();
    const newTodo: string = "new todo";
    const addedMockTodoList = [...mockTodoList, { no: mockTodoList.length + 1, todo: newTodo }];
    const deletedMockTodoList: ITodoList[] = [];

    test("click the add button", () => {
        render(<TodoListForm setTodoList={setMockTodoList} />);
        const button: HTMLButtonElement = screen.getByRole("button");
        const inputField: HTMLInputElement = screen.getByRole("textbox");

        fireEvent.change(inputField, { target: { value: newTodo } });
        fireEvent.click(button);

        setMockTodoList(addedMockTodoList);
        expect(setMockTodoList).toHaveBeenCalledWith(addedMockTodoList);
    });

    test("added list, after click add button", () => {
        render(<TodoListItems setTodoList={setMockTodoList} todoList={addedMockTodoList} />);
        const listWrapper = screen.getByRole("main");
        const no = screen.getByTestId("no");
        const text = screen.getByTestId("text");

        expect(listWrapper).not.toHaveClass("hide");
        expect(no.textContent).toEqual("1.");
        expect(text.textContent).toEqual("new todo");
    });

    test("click the delete button", () => {
        render(<TodoListItems setTodoList={setMockTodoList} todoList={addedMockTodoList} />);
        const deletButton = screen.getByTestId("delete");

        fireEvent.click(deletButton);

        setMockTodoList([]);
        expect(setMockTodoList).toHaveBeenCalledWith(deletedMockTodoList);
    });

    test("deleted list, after click delte button", () => {
        render(<TodoListItems setTodoList={setMockTodoList} todoList={deletedMockTodoList} />);

        const listWrapper1 = screen.getByRole("main");

        expect(listWrapper1).toHaveClass("hide");
    });
});
