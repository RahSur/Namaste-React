import { CDN_URL } from "../utils/constants";

const MenuItems = ({ data }) => {
    const { itemCards } = data.card.card;
    return (
        <>
            {itemCards.map((item) => (
                <div className="flex justify-between mb-5 items-center">
                    <div className="w-9/12">
                        <p className="font-bold text-md">{item.card.info.name}</p>
                        <p className="text-sm font-bold">Rs {item.card.info.price / 100}/-</p>
                        <p className="italic text-sm">{item.card.info.description}</p>
                    </div>
                    <div className="w-2/12 relative">
                        {/* <button className="absolute bottom-0 p-1 mx-2 rounded-md bg-green-100">Add To Cart</button> */}
                        <img src={CDN_URL + item.card.info.imageId} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default MenuItems;