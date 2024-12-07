import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from '../utils/useOnlinestatus';

const Header = () => {
    const [authBtn, setAuthBtn] = useState("Login");
    const status = useOnlinestatus();
    return (
        <div className='header'>
            <div className='logo_container'>
                <img className="logo"
                    src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/groceries">Groceries</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li>{status ? "🟢" : "🔴"}</li>
                    <button className="login_btn" onClick={() => authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login")}>{authBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;