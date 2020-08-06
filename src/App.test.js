import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Will App.js render without any errors

// There is a global function called "test"

test("App component renders without errors", () => {
  // now i can write my first react libray test
  // RTL - 1) render a component
  // RTL - 2) make some assertions

  render(<App />);
});

test("App renders the header", () => {
  // - 1) render the app component
  render(<App />);

  // - 2) "query" the virtual DOM for the header element
  // - - use "screen" to access RTL's query functions
  //
  const header = screen.getByText(/add new animal/i);

  // - 3) "assert" that the header is displayed
  // - - Definition: An assertion is a boolean expression I expect from
  // e.g.
  // - expect that header to be on the Document
  expect(header).toBeInTheDocument();
  // screen.debug();
  // expect(header).not.toBeInTheDocument();
  // - using .not is how to purposly fail your test
});

// HOW TEST FAIL ------------------------
// test("test title", () => {
//   // any test will fail if an error is "thrown" anywhere inside the callback function

//   throw new Error("this test failed because I manually threw an error");
// });
// HOW TEST FAIL ------------------------
