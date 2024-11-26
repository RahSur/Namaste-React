import { useState } from 'react';
import Card from './Card';
import { dataList } from '../utils/mockData';

const Body = () => {
    const [restaurants, setRestaurants] = useState(dataList);
    const [searchText, setSearchText] = useState("");

    const topRated = () => {
        const filtered = restaurants.filter((d) => d.info.avgRating >= 4.5);
        setRestaurants(filtered);
    }

    const searchBox = () => {
        const namedRes = restaurants.filter((res) => res.info.name === searchText);
        setRestaurants(namedRes);
        setSearchText("");
    }

    return (
        <div className='body'>
            <div className='search_container'>
                <div className='search_box'>
                    <input type="text" placeholder='Search Restaurants...' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className='search_button' onClick={() => { searchBox() }}>Search</button>
                </div>
                <button onClick={() => { topRated() }}
                    className="filter_btn">Top Rated Restaurants 4.5+
                </button>
            </div>
            <div className='card-container'>
                {restaurants.map(data => (
                    <Card key={data.info.id} data={data} />
                ))}
            </div>
        </div>
    )
}

export default Body;