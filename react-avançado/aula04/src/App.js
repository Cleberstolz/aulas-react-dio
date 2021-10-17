import React from "react";
import PetShop from "./PetShop";

function App () {
  const handleClick = () => {
    console.log('iniciando o banho')
  }
  return (
    <PetShop 
      dogs={2}
      customerName="Cleberson Stolz"
      onClick={handleClick}
    />

  )
}


export default App;
