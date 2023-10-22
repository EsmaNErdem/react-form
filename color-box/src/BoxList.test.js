import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

test("renders without crashing", () => {
    render(<BoxList />);
});

test("it renders and matches with snaphot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});


it("should add a new box", () => {
    const { queryByText, getByLabelText, queryByTestId, getAllByDisplayValue } = render(<BoxList />);
    const colorInput = getByLabelText("Background Color:");
    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");
    const btn = queryByText("Add a new box!");
// ensure that remove button for the box is not there yet
    expect(queryByTestId('orangered')).not.toBeInTheDocument();
    fireEvent.change(colorInput, { target: { value: 'orangered' } });
    fireEvent.change(widthInput, { target: { value: '200px' } });
    fireEvent.change(heightInput, { target: { value: '100px' } });
    fireEvent.click(btn);
// make sure the remove button is there now
    const removeButton = queryByTestId('orangered');
    expect(removeButton).toBeInTheDocument();

    expect(removeButton.previousSibling).toHaveStyle(`
    width: 200px;
    height: 100px;
    background: orangered;
     `);

     // expect form to be empty
    expect(getAllByDisplayValue("")).toHaveLength(3);
})

it("should remove a box", () => {
    const { queryByTestId } = render(<BoxList />);

    const removeButton = queryByTestId('deeppink');
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
    background: deeppink; 
    width: 150px; 
    height: 105px;
    `);

    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
    expect(removeButton.previousSibling).toBeNull()
})