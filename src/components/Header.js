import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlinestatus from '../utils/useOnlinestatus';

const Header = () => {
    const [authBtn, setAuthBtn] = useState("Login");
    const status = useOnlinestatus();
    return (
        <div className='flex justify-between border rounded-xl m-4'>
            <div className="ml-6">
                <img className="w-[100px]"
                    src={LOGO_URL} />
            </div>
            <div>
                <ul className="flex items-center gap-3 m-8">
                    <li className="hover:text-blue-800"><Link to="/">Home</Link></li>
                    <li className="hover:text-blue-800"><Link to="/groceries">Groceries</Link></li>
                    <li className="hover:text-blue-800"><Link to="/about">About</Link></li>
                    <li className="hover:text-blue-800"><Link to="/contact">Contact</Link></li>
                    <li className="hover:text-blue-800"><Link to="/cart">Cart</Link></li>
                    <li className="hover:text-blue-800">{status ? "🟢" : "🔴"}</li>
                    <button className="bg-blue-200 p-2 rounded-md" onClick={() => authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login")}>{authBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;