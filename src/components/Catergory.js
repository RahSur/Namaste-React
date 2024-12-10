import MenuItems from "./MenuItems";

const Catergory = ({ data }) => {
    const { title } = data.card.card;

    return (
        <div className="shadow-md mb-3">
            <div className="flex justify-between mx-auto p-4">
                <div className="font-bold text-md">{title}</div>
                <div className="cursor-pointer">⤵️</div>
            </div>
            <div className="px-4 py-2 my-5 border-b-4 border-b-gray-400">
                <MenuItems data={data} />
                {/* {data.card.card.itemCards.map((item) => <p>{item.card.info.name}</p>)} */}
            </div>
        </div>
    )
}

export default Catergory;