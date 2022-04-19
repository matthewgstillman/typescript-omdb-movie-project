import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import APIComponent from "./APIComponent";

test("Main form in document", () => {
    render(<APIComponent />);
    const mainFormElement = screen.getByTestId("mainForm");
    expect(mainFormElement).toBeInTheDocument();
  });

  test("Main container in document", () => {
    render(<APIComponent />);
    const mainContainerElement = screen.getByTestId("mainContainer");
    expect(mainContainerElement).toBeInTheDocument();
  });

