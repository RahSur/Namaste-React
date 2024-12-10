//import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import { useParams } from "react-router-dom";
import { useState } from "react";

import Catergory from "./Catergory";

const Menu = () => {
    //const [veg, setVeg] = useState([]);
    const { resId } = useParams();
    const resMenu = useResMenu(resId);

    if (resMenu === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRatingString } = resMenu?.cards[2]?.card?.card?.info;
    //const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const resCat = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const resCatergories = resCat.filter((cat) => cat?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(resCatergories);

    // const fetchVegOnly = (type) => {
    //     const vegOnly = itemCards.filter((item) => {
    //         if (type !== "") {
    //             return item.card.info.itemAttribute.vegClassifier === type;
    //         } else {
    //             return item;
    //         }
    //     });
    //     setVeg(vegOnly);
    // }

    return (
        <div className="mx-auto w-6/12">
            <h1 className="font-bold text-xl text-center mb-2">{name}</h1>
            <p className="mb-10 italic text-center">{cuisines.join(", ")} || <span>{costForTwoMessage} || {avgRatingString} ⭐</span></p>
            {/* <p className="mb-1">Choose your preferrence!!</p>
            <button className="border border-gray-400 bg-gray-200 p-2 rounded-xl mr-3 hover:bg-gray-400" onClick={() => fetchVegOnly("VEG")}>Veg</button>
            <button className="border border-gray-400 bg-gray-200 p-2 rounded-xl mr-3 hover:bg-gray-400" onClick={() => fetchVegOnly("NONVEG")}>Non Veg</button>
            <button className="border border-gray-400 bg-gray-200 p-2 rounded-xl  hover:bg-gray-400" onClick={() => fetchVegOnly("")}>Veg/Non-Veg</button>
            <br />
            <br /> 
            <h1 className="mb-3"><u>Recommended Menu</u></h1> */}

            <div className="mb-10">
                {resCatergories.map((item) =>
                    // <li key={item.card.info.id}>
                    //     <p className="mb-2">{item.card.info.name}   Rs.{item.card.info.finalPrice / 100 || item.card.info.price / 100 || item.card.info.defaultPrice / 100}/-  {item.card.info.itemAttribute.vegClassifier == "VEG" ? '🟢' : '🔴'}</p>
                    // </li>
                    <Catergory key={item.card.card.type} data={item} />
                )}
            </div>
        </div>
    )
}

export default Menu;