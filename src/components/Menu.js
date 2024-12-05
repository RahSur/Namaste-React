//import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useResMenu from "../utils/useResMenu";
import { useParams } from "react-router-dom";

const Menu = () => {

    //const [resMenu, setResMenu] = useState(null);
    const { resId } = useParams();
    const resMenu = useResMenu(resId);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     setResMenu(json?.data);
    // }

    if (resMenu === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRatingString } = resMenu?.cards[2]?.card?.card?.info;
    const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menus">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} || <span>{costForTwoMessage} || {avgRatingString} ⭐</span></p>
            <br />
            <h1>Recommended</h1> <br />
            <ul>
                {itemCards.map((item) =>
                    <li key={item.card.info.id}>
                        <p>{item.card.info.name}   Rs.{item.card.info.finalPrice / 100 || item.card.info.price / 100}/-  {item.card.info.itemAttribute.vegClassifier}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Menu;