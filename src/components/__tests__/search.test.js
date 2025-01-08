import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../../components/mock/bodyMock.json';
//import { act } from 'react-dom/test-utils' --> this got depreceated
import { act } from 'react'
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("should render body with search box", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>));

    const cardBefore = screen.getAllByTestId("resCard");
    expect(cardBefore.length).toBe(8);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchBox = screen.getByTestId("searchInp");
    fireEvent.change(searchBox, { target: { value: "Pizza" } });
    fireEvent.click(searchBtn);

    const cardAfter = screen.getAllByTestId("resCard");
    expect(cardAfter.length).toBe(1);
})