import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import TodoList from "./TodoList";

test("renders without crashing", () => {
    render(<TodoList />);
});

test("it renders and matches with snaphot", () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add a new box", () => {
    const { queryByText, getByLabelText, getAllByDisplayValue } = render(<TodoList />);
    const newTaskInput = getByLabelText("New Todo Task:");
    const btn = queryByText("Add task!");

    // ensure that remove button for the box is not there yet
    expect(queryByText("Have fun")).not.toBeInTheDocument();
    fireEvent.change(newTaskInput, { target: { value: "Have fun" } });
    fireEvent.click(btn);

    // makes sure list appears in the list
    expect(queryByText("Have fun")).toBeInTheDocument();

     // expect form to be empty
    expect(newTaskInput).toHaveValue("");
    
})

test("it updates task with form", async () => {
    const { getByText, getByLabelText, queryByText, asFragment, getByDisplayValue } = render(<TodoList />);
    expect(getByText("Wash dishes")).toBeInTheDocument();
    const editBtn = getByText("Edit")
    fireEvent.click(editBtn)

    const editInput = getByLabelText("Edit Todo Task:");
    fireEvent.change(editInput, { target: {value: "No dishes today, go have fun"}})
    const updateButton = getByText("Update task!");
    fireEvent.click(updateButton)

    expect(queryByText("Wash dishes")).toBeNull();
    expect(getByText("No dishes today, go have fun")).toBeInTheDocument();

});

it("should remove a task", () => {
    const { getByText, queryByText } = render(<TodoList />);

    const removeButton = getByText('X');
    expect(removeButton).toBeInTheDocument();
    expect(getByText("Wash dishes")).toBeInTheDocument();

    fireEvent.click(removeButton);
    expect(queryByText("Wash dishes")).toBeNull();
    expect(removeButton).not.toBeInTheDocument();
});

it("should toggle a task complete", () => {
    const { getByText } = render(<TodoList />);

    const markButton = getByText('Mark Completed');
    expect(markButton).toBeInTheDocument();
    expect(getByText("Wash dishes")).not.toHaveClass("Todo-Completed");

    fireEvent.click(markButton);
    expect(getByText("Wash dishes")).toHaveClass("Todo-Completed");
    // reverse it
    fireEvent.click(markButton);
    expect(getByText("Wash dishes")).not.toHaveClass("Todo-Completed");
});