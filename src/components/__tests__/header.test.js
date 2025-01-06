import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from '../../utils/appStore';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

it("should render header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
});

it("should check if button clicked and text changes", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const logIn = screen.getByRole("button", { name: "Login" });
    fireEvent.click(logIn);
    const logOut = screen.getByRole("button", { name: "Logout" });
    expect(logOut).toBeInTheDocument();
})