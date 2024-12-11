import { useState } from "react";
import MenuItems from "./MenuItems";

const Catergory = ({ data }) => {
    const { title } = data.card.card;
    const length = data.card.card.itemCards.length;

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }


    return (
        <div className="shadow-md mb-4 py-1">
            <div className="flex justify-between mx-auto p-4 cursor-pointer" onClick={handleClick}>
                <div className="font-bold text-md">{title} ({length})</div>
                <div className="cursor-pointer">⤵️</div>
            </div>
            {
                show &&
                <div className="px-4 py-2 my-5 border-b-4 border-b-gray-400">
                    <MenuItems data={data} />
                </div>
            }
        </div>
    )
}

export default Catergory;