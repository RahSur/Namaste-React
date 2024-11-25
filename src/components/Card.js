import { CDN_URL } from "../utils/constants";

const Card = ({ data }) => {
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = data?.info
    return (
        <div className='card'>
            <img src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} ⭐</p>
            <p>{costForTwo}</p>
        </div>
    )
}

export default Card;