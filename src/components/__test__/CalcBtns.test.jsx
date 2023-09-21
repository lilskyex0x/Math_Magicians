/* eslint-disable */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CalcBtns from "../CalcBtns";

describe("CalcBtns", () => {
  test('clicking on the "1" button updates the displayed value', () => {
    const { container, getByText } = render(<CalcBtns />);
    const oneButton = getByText('1');
    const currentNumElement = container.querySelector('.current__num');

    fireEvent.click(oneButton);
    expect(currentNumElement).toHaveTextContent('1');
  });

  test('clicking on the "=" button performs the calculation', () => {
    const { container, getByText } = render(<CalcBtns />);
    const oneButton = getByText('1');
    const plusButton = getByText('+');
    const equalsButton = getByText('=');
    const currentNumElement = container.querySelector('.current__num');

    fireEvent.click(oneButton);
    fireEvent.click(plusButton);
    fireEvent.click(oneButton);
    fireEvent.click(equalsButton);
    expect(currentNumElement).toHaveTextContent('2');
  });
});
