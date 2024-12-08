import { CDN_URL } from "../utils/constants";

const Card = ({ data }) => {
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = data?.info
    return (
        <div className='border rounded-lg w-[250px] h-[350px] bg-gray-400 p-3 hover:bg-gray-300'>
            <img className="w-[250px] h-[200px]" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold text-lg my-2">{name}</h3>
            <p className="italic">{cuisines.join(", ")}</p>
            <p className="mt-1 mr-2 inline-block font-bold">{avgRating}⭐</p>
            <p className="inline-block">{costForTwo}</p>
        </div>
    )
}

export default Card;