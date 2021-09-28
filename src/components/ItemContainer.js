import { useEffect, useState } from "react"
import { dataItems } from "../data/fakedata"
import ItemBase from "./ItemBase"

export default function ItemContainer() {
    const [state, setState] = useState(null)
    // const promesa= async ()=>{
    //     return new Promise(
    //       ()=>{
    //         setTimeout(()=>{console.log("over")},300)
    //       }
    //     );
    //   }


    useEffect(async () => {
        const promesa = new Promise((resolver) => {
            setTimeout(() => { resolver(dataItems) }, 2000)
        })

        promesa.then(result => {
            setState(dataItems)
        })

    }, [])

    const increaseQtyItems = (itemId, value) => {
        const result = state.map(
            (item) => {
                if (item.id === itemId) {
                    item.qty = item.qty + value;
                }
                return item;
            }
        )
        setState(result)
    }

    const decreaseQtyItems = (itemId, value) => {
        const result = state.map(
            (item) => {
                if (item.id === itemId) {
                    item.qty = item.qty === 0 ? 0 : item.qty - value;
                }
                return item;
            }
        )
        setState(result)
    }




    return (
        <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>

            {
                state ? state.map(
                    (item) => {
                        return <ItemBase detail={item.detail} name={item.name} imgUrl={item.url} defaultQty={item.qty} addItem={increaseQtyItems} lessItem={decreaseQtyItems} idItem={item.id} key={item.id} />
                    }
                ) :
                    <></>
            }
        </div>
    );

}