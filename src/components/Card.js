import { CDN_URL } from "../utils/constants";

const Card = ({ data }) => {
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } = data?.info
    return (
        <div className='border shadow-md rounded-lg w-[250px] h-[400px] bg-yellow-200 p-3 hover:bg-yellow-400'>
            <img className="w-[250px] h-[200px] rounded-xl" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold text-lg my-2">{name}</h3>
            <p className="italic max-h-12 overflow-hidden">{cuisines.join(", ")}</p>
            <p className="mt-1 mr-2 inline-block font-bold">{avgRating}⭐</p>
            <p className="inline-block">{costForTwo}</p>
        </div>
    )
}

export const withOpenCard = (Card) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-500 text-white font-bold ml-1 mt-1 p-1 rounded-md">Open</label>
                <Card {...props} />
            </div>
        )
    }
}

export default Card;