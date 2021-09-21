
export default function ItemBase({ idItem, name, imgUrl, defaultQty = 0, addItem , lessItem}) {

    return (
        <div className="item_container" style={{ display: "flex", flexDirection: "column", width: "33%" }}>
            <img src={imgUrl} alt="img base" />
            <span>{name}</span>
            <span>cantidad: {defaultQty}</span>
            <div className="container-button">
                <button onClick={ ()=>{ addItem(idItem,1) }}>+</button>
                <button onClick={ ()=>{ lessItem(idItem,1) }} >-</button>

            </div>
        </div>

    )
}