//import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Menu = () => {
    const [veg, setVeg] = useState([]);
    const { resId } = useParams();
    const resMenu = useResMenu(resId);

    if (resMenu === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRatingString } = resMenu?.cards[2]?.card?.card?.info;
    const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    const fetchVegOnly = (type) => {
        const vegOnly = itemCards.filter((item) => {
            if (type !== "") {
                return item.card.info.itemAttribute.vegClassifier === type;
            } else {
                return item;
            }
        });
        setVeg(vegOnly);
    }

    return (
        <div className="menus">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} || <span>{costForTwoMessage} || {avgRatingString} ⭐</span></p>
            <button onClick={() => fetchVegOnly("VEG")}>Veg</button>
            <button onClick={() => fetchVegOnly("NONVEG")}>Non Veg</button>
            <button onClick={() => fetchVegOnly("")}>Veg/Non-Veg</button>
            <br />
            <br />
            <h1><u>Recommended Menu</u></h1> <br />
            <ul>
                {veg.map((item) =>
                    <li key={item.card.info.id}>
                        <p>{item.card.info.name}   Rs.{item.card.info.finalPrice / 100 || item.card.info.price / 100 || item.card.info.defaultPrice / 100}/-  {item.card.info.itemAttribute.vegClassifier}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Menu;