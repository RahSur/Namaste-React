import { useDispatch, useSelector } from "react-redux";
import { clearCart } from '../utils/cartSlice';
import MenuItems from "./MenuItems";

const Cart = () => {

    const dispatch = useDispatch();

    const cartItems = useSelector((store) => store.cart.items);

    const clearCartItems = () => {
        dispatch(clearCart());
    }

    return (
        <div className="mx-auto w-6/12 mt-8">
            <div className="flex justify-between mb-10">
                <div className="font-bold text-lg">Your Cart Items</div>
                <button className="bg-black p-2 rounded-md text-white mr-3" onClick={clearCartItems}>Clear Cart</button>
            </div>
            {
                cartItems.length > 0 ?
                    <MenuItems data={cartItems} showAddBtn={false} /> :
                    <p className="font-semibold pt-10 text-center text-xl">Your cart is empty 😕, I'm waiting add some dishes!</p>
            }

        </div>
    )
}

export default Cart;