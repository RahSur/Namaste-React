import Card from './Card';
import { dataList } from '../utils/mockData';

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search Restaurants...</div>
            <div className='card-container'>
                {dataList.map(data => (
                    <Card key={data.info.id} data={data} />
                ))}
            </div>
        </div>
    )
}

export default Body;