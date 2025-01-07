import { useState, useEffect, useContext } from 'react';
import Card, { withOpenCard } from './Card';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlinestatus';
import UserContext from '../utils/UserContext';

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const status = useOnlineStatus();

    const OpenCard = withOpenCard(Card);

    const { setUserName } = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1143212&lng=80.15447429999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const topRated = () => {
        const filtered = restaurantList.filter((d) => d.info.avgRating >= 4.5);
        setFilteredRestaurantList(filtered);
    }

    const searchBox = () => {
        const namedRes = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredRestaurantList(namedRes);
    }

    if (status === false) {
        return <h1>Check you internet idiot 😒, you're Offline ✖️!!</h1>
    }

    return (
        status === false &&
            restaurantList.length === 0 ? (<Shimmer />) :
            (
                <div className='mb-10'>
                    <div className='flex justify-between gap-9 my-6 mx-10'>
                        <div className='relative'>
                            <input className='border shadow-lg rounded-xl p-3 w-[700px]' type="text" placeholder='Search Restaurants...' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                            <span className="absolute right-24 top-3 w-5 h-5 cursor-pointer" onClick={() => { searchBox(); setSearchText(""); }}>x</span>
                            <button className='border border-gray-400 bg-gray-200 p-2 rounded-xl ml-6 hover:bg-gray-400' onClick={() => { searchBox() }}>Search</button>
                        </div>
                        <div>
                            <input type='text' data-testid="searchInp" className='p-2' onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <div>
                            <button onClick={() => { topRated() }}
                                className="border border-orange-400 bg-orange-100 p-2 rounded-xl pt-2 hover:bg-orange-300">Top Rated Restaurants 4.5+
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-x-4 gap-y-6 mx-8'>
                        {filteredRestaurantList?.map(data => (
                            <Link key={data.info.id} to={"/restaurant/" + data.info.id}>
                                {data.info.isOpen ? <OpenCard data={data} /> : <Card data={data} />}
                            </Link>
                        ))}
                    </div>
                </div >
            )
    )
}

export default Body;