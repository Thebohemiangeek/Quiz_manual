import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "app/landing-page/components/Footer/Footer";
import data from "public/data/footer.json";

describe("Footer Component", () => {
  test("renders the footer with logo, columns, and social media icons", () => {
    render(<Footer />);

    // Check if the logo is rendered
    const logo = screen.getByAltText("Manual.co");
    expect(logo).toBeInTheDocument();

    // Check if footer columns are rendered with correct data
    data.links.forEach((column) => {
      const columnTitle = screen.getByText(column.name);
      expect(columnTitle).toBeInTheDocument();

      column.items.forEach((item) => {
        const columnItem = screen.getByText(item.name);
        expect(columnItem).toBeInTheDocument();
      });
    });

    // Check if social media icons are rendered
    const googleIcon = screen.getByTestId("fa-google");
    const facebookIcon = screen.getByTestId("fa-facebook-f");
    const twitterIcon = screen.getByTestId("fa-twitter");
    expect(googleIcon).toBeInTheDocument();
    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();

    // Check if the copyright text is rendered with the correct year
    const currentlyYear = new Date().getFullYear();
    const copyrightText = screen.getByTestId("copyright__text");
    expect(copyrightText).toHaveTextContent(
      `© ${currentlyYear} Manual. All rights reserved`
    );
  });
});
