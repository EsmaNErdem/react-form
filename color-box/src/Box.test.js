import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Box from "./Box";

test("renders without crashing", () => {
    render(<Box />);
});

test("it renders and matches with snaphot", () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});