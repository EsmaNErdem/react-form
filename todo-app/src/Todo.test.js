import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

test("renders without crashing", () => {
    render(<Todo />);
});

test("it renders and matches with snaphot", () => {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});


test("it renders and matches with snaphot when editting", () => {
    const { asFragment, getByText } = render(<Todo />);
    const editBtn = getByText("Edit")
    fireEvent.click(editBtn)
    expect(asFragment()).toMatchSnapshot();
});