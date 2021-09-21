import { useState } from "react";
import ItemBase from "./components/ItemBase";
import Navbar from "./components/Navbar";

function AppStore() {
  const [state, setState] = useState([
    {
      url: "https://via.placeholder.com/150",
      name: "item1",
      qty: 0,
      id: 1
    },
    {
      url: "https://via.placeholder.com/150",
      name: "item2",
      qty: 0,
      id: 2

    },
    {
      url: "https://via.placeholder.com/150",
      name: "item3",
      qty: 0,
      id: 3
    }
  ])

  const increaseQtyItems = (itemId,value) => {
    const result=state.map(
      (item)=>{
        if (item.id===itemId) {
          item.qty=item.qty+value;
        }
        return item;
      }
    )
    setState(result)
  }

  const decreaseQtyItems = (itemId,value) => {
    const result=state.map(
      (item)=>{
        if (item.id===itemId) {
          item.qty=item.qty===0?0:item.qty-value;
        }
        return item;
      }
    )
    setState(result)
  }


  return (
    <div className="AppStore">
      <Navbar></Navbar>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {
          state ? state.map(
            (item) => {
              return <ItemBase name={item.name} imgUrl={item.url} defaultQty={item.qty} addItem={increaseQtyItems} lessItem={decreaseQtyItems} idItem={item.id} key={item.id} />
            }
          ) :
            <></>
        }

      </div>
    </div>
  );
}

export default AppStore;
