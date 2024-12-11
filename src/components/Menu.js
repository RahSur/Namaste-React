import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import { useParams } from "react-router-dom";

import Catergory from "./Catergory";
import { useState } from "react";

const Menu = () => {
    const { resId } = useParams();
    const resMenu = useResMenu(resId);

    //controlling child comp Category
    const [show, setShow] = useState(0);

    if (resMenu === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRatingString } = resMenu?.cards[2]?.card?.card?.info;
    const resCat = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const resCatergories = resCat.filter((cat) => cat?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="mx-auto w-6/12">
            <h1 className="font-bold text-xl text-center mb-2">{name}</h1>
            <p className="mb-10 italic text-center">{cuisines.join(", ")} || <span>{costForTwoMessage} || {avgRatingString} ⭐</span></p>

            <div className="mb-10">
                {resCatergories.map((item, index) =>
                    <Catergory
                        key={index}
                        data={item}
                        show={index === show ? true : false}
                        setShow={() => setShow(index)}
                    />
                )}
            </div>
        </div>
    )
}

export default Menu;