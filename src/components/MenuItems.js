import { useDispatch } from "react-redux";
import { addItem } from '../utils/cartSlice';
import { CDN_URL } from "../utils/constants";

const MenuItems = ({ data, showAddBtn }) => {
    const dispatch = useDispatch();

    const handleAddClick = (item) => {
        dispatch(addItem(item));
    }
    return (
        <>
            {data.map((item) => (
                <div key={item.card.info.id} className="flex justify-between mb- items-center border-b-2 border-gray-100 pb-2">
                    <div className="w-9/12">
                        <p className="font-bold text-md">{item.card.info.name}</p>
                        <p className="text-sm font-bold">Rs {item.card.info.price / 100}/-</p>
                        <p className="italic text-sm">{item.card.info.description}</p>
                    </div>
                    <div className="w-2/12">
                        <img className="mt-2" src={item.card.info.imageId ? CDN_URL + item.card.info.imageId : 'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'} />
                        {showAddBtn && <button className="py-1 px-1 mx-2 my-1 rounded-lg bg-black text-white" onClick={() => handleAddClick(item)}>Add To Cart</button>}
                    </div>
                </div>
            ))}
        </>
    )
}

export default MenuItems;