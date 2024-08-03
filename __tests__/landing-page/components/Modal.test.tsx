import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "app/landing-page/components/Modal/Modal";

describe("Modal Component", () => {
  const handleClose = jest.fn();
  const modalContent = <div>Modal Content</div>;

  it("renders the modal when show is true", () => {
    render(
      <Modal show={true} handleClose={handleClose}>
        {modalContent}
      </Modal>
    );

    expect(screen.getByText("Modal Content")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "×" })).toBeInTheDocument();
  });

  it("does not render the modal when show is false", () => {
    render(
      <Modal show={false} handleClose={handleClose}>
        {modalContent}
      </Modal>
    );

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });

  it("calls handleClose when the close button is clicked", () => {
    render(
      <Modal show={true} handleClose={handleClose}>
        {modalContent}
      </Modal>
    );

    fireEvent.click(screen.getByRole("button", { name: "×" }));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("applies custom className if provided", () => {
    const { container } = render(
      <Modal show={true} handleClose={handleClose} className="custom-class">
        {modalContent}
      </Modal>
    );

    if (container.firstChild && container.firstChild.firstChild) {
      expect(container.firstChild.firstChild).toHaveClass("custom-class");
    } else {
      throw new Error("First child not found in container");
    }
  });
});
