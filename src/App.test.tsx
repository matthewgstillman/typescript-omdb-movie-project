import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("Top headerin document", () => {
    render(<App />);
    const topHeaderElement = screen.getByTestId("topHeader");
    expect(topHeaderElement).toBeInTheDocument();
  });