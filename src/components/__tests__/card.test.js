import { render, screen } from "@testing-library/react"
import Card, { withOpenCard } from "../Card";
import MOCK_DATA from '../../components/mock/cardMock.json';
import "@testing-library/jest-dom";

it("should render card element with mock", () => {
    render(<Card data={MOCK_DATA} />);
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
});

it("should render card element with HOC", () => {
    const OpenCard = withOpenCard(Card);
    render(<OpenCard data={MOCK_DATA} />);
    const open = screen.getByText("Open");
    expect(open).toBeInTheDocument();
})