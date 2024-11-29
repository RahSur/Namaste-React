import { useState, useEffect } from 'react';
import Card from './Card';
import Shimmer from './Shimmer';

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1143212&lng=80.15447429999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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

    return (
        restaurantList.length === 0 ? (<Shimmer />) :
            (
                <div className='body'>
                    <div className='search_container'>
                        <div className='search_box'>
                            <input type="text" placeholder='Search Restaurants...' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                            <span className="close-icon" onClick={() => setSearchText("")}>x</span>
                            <button className='search_button' onClick={() => { searchBox() }}>Search</button>
                        </div>
                        <button onClick={() => { topRated() }}
                            className="filter_btn">Top Rated Restaurants 4.5+
                        </button>
                    </div>
                    <div className='card-container'>
                        {filteredRestaurantList?.map(data => (
                            <Card key={data.info.id} data={data} />
                        ))}
                    </div>
                </div>
            )
    )
}

export default Body;