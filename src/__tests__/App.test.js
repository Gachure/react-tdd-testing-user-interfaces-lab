import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm (your name)`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with correct alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/your description/i); // Modify the regex to match the actual alt text
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src"); // Ensure it has a source attribute
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph for biography", () => {
  render(<App />);
  const bioParagraph = screen.getByText(/your bio/i); // Adjust to the actual text or regex
  expect(bioParagraph).toBeInTheDocument();
});

test("has two links: one to GitHub, one to LinkedIn", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toBeInTheDocument();
  expect(linkedinLink).toBeInTheDocument();

  // You can also test the href attributes to ensure they point to the correct URLs
  expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername"); // Modify with your GitHub URL
  expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/yourprofile"); // Modify with your LinkedIn URL
});
