import Contact from "../Contact"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Grouping contact us tests", () => {

    beforeAll(() => {
        console.log("Before Everything");
    });

    beforeEach(() => {
        console.log("Before each Tests");
    });

    afterEach(() => {
        console.log("After each Tests");
    });

    afterAll(() => {
        console.log("After Everything");
    });

    it("should contact contains a heading", () => {
        render(<Contact />);
        const head = screen.getByRole("heading");
        expect(head).toBeInTheDocument();
    });

    it("should contact contains a button", () => {
        render(<Contact />);
        const but = screen.getByRole("button");
        expect(but).toBeInTheDocument();
    });

    test("should contact contains a plaeholder", () => {
        render(<Contact />);
        const place = screen.getByPlaceholderText("email address")
        expect(place).toBeInTheDocument("email address");
    });

    test("should contact contains a plaeholder", () => {
        render(<Contact />);
        const inp = screen.getAllByRole("textbox")
        expect(inp.length).toBe(1);
    });
})
