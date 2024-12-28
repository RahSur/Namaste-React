import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import useOnlinestatus from '../utils/useOnlinestatus';
import UserContext from '../utils/UserContext';

const Header = () => {
    const [authBtn, setAuthBtn] = useState("Login");
    const status = useOnlinestatus();

    const { loggedInUser } = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className='flex justify-between border rounded-xl m-4 shadow-lg sticky top-0 bg-white z-50'>
            <div className="ml-6">
                <Link to="/">
                    <img className="w-[100px]"
                        src={LOGO_URL} />
                </Link>
            </div>
            <div>
                <ul className="flex items-center gap-6 m-8">
                    <li className="hover:text-blue-800"><Link to="/groceries">Groceries</Link></li>
                    <li className="hover:text-blue-800"><Link to="/about">About</Link></li>
                    <li className="hover:text-blue-800"><Link to="/contact">Contact</Link></li>
                    <li className="hover:text-blue-800 font-bold"><Link to="/cart">🛒({cartItems.length})</Link></li>
                    {/* <li className="font-bold mx-3">{loggedInUser}</li> */}
                    <button className="bg-blue-300 py-2 px-6 rounded-md" onClick={() => authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login")}>{authBtn}</button>
                    <li className="hover:text-blue-800">{status ? "🟢" : "🔴"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;