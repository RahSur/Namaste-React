import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [authBtn, setAuthBtn] = useState("Login");
    return (
        <div className='header'>
            <div className='logo_container'>
                <img className="logo"
                    src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <button className="login_btn" onClick={() => authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login")}>{authBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;