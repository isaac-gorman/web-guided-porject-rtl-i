import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AnimalFrom from "./AnimalForm";
import "mutationobserver-shim";

test("Renders form without errors", () => {
  render(<AnimalFrom />);
});

// Test that this form submits and
test("add animal to the list when form is filled out and submitted", () => {
  // Redner AnimalForm
  render(<AnimalFrom />);
  // query for the various inouts
  const speciesInput = screen.getByLabelText(/species/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes/i);

  // fill out the  inputs
  // - going to use fireEvent
  fireEvent.change(speciesInput, { target: { value: "tiger" } });
  fireEvent.change(ageInput, { target: { value: 3 } });
  fireEvent.change(notesInput, { target: { value: "notey notes notes" } });
  // screen.debug();

  // const submitButton = screen.getByRole("button", { name: /submit!/i });
  const submitButton = screen.getByRole("button", { name: /submit!/i });

  fireEvent.click(submitButton);
  // query for th sum

  // Making an assertion
  expect(screen.findByText(/tiger/i)).toBeInTheDocument();
  // may have to swicth bewteen getByText and findBytext for today's assignmnet
  // try getByText first
});
