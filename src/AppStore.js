import { useEffect, useState } from "react";
import ItemBase from "./components/ItemBase";
import ItemContainer from "./components/ItemContainer";
import Navbar from "./components/Navbar";

function AppStore() {
  return (
    <div className="AppStore">
      <Navbar></Navbar>
      <ItemContainer></ItemContainer>
    </div>
  );
}

export default AppStore;
