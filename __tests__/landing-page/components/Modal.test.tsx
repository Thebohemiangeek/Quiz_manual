import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "app/landing-page/components/Modal/Modal";

describe("Modal Component", () => {
  test("renders the modal when show is true", () => {
    render(
      <Modal show={true} handleClose={() => {}} title="Test Modal">
        <p>Modal Content</p>
      </Modal>
    );
    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  test("does not render the modal when show is false", () => {
    render(
      <Modal show={false} handleClose={() => {}} title="Test Modal">
        <p>Modal Content</p>
      </Modal>
    );
    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  test("calls handleClose when the close button is clicked", () => {
    const handleClose = jest.fn();
    render(
      <Modal show={true} handleClose={handleClose} title="Test Modal">
        <p>Modal Content</p>
      </Modal>
    );
    fireEvent.click(screen.getByText("×"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("applies custom className if provided", () => {
    const { container } = render(
      <Modal
        show={true}
        handleClose={() => {}}
        className="custom-class"
        title="Test Modal"
      >
        <p>Modal Content</p>
      </Modal>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
