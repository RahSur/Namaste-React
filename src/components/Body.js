import Card from './Card';
import { dataList } from '../utils/mockData';

const Body = () => {

    let listofRes = dataList;

    return (
        <div className='body'>
            <div className='search'>
                <button className="filter_btn">Top Rated Restaurants</button>
            </div>
            <div className='card-container'>
                {listofRes.map(data => (
                    <Card key={data.info.id} data={data} />
                ))}
            </div>
        </div>
    )
}

export default Body;