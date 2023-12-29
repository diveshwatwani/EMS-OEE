// import React, { useState } from "react";
// import EditableCard from '../components/EditableCard';
// import PlusCard from "../components/PlusCard";
// import shopImage from '../assets/shop.png';

// let Shop = [
//   {
//     name: "Shop 1",
//   },
//   {
//     name: "Shop 2",
//   },
  
// ];

// function ShopPage() {
//   const [shops, setShops] = useState([...Shop]);

//   const handleAddShop = (newShopName) => {
//     // Add the new line to the state
//     setShops([...shops, { name: newShopName }]);
//   };
//   const handleDeleteCard = (index) => {
//     // Create a copy of the current state array
//     const updatedShops = [...shops];
//     // Remove the card at the specified index
//     updatedShops.splice(index, 1);
//     // Update the state with the new array
//     setShops(updatedShops);
//   };

//   return (
//     <div>
//       <h2 className="text-center mt-2 mb-0 underline">SHOPS</h2>

//       <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
//         {shops.map((shop, index) => (
//           <EditableCard key={index} name={shop.name} imageUrl={shopImage} onDelete={() => handleDeleteCard(index)}/>
//         ))}
//         <PlusCard onAddClick={handleAddShop} cardType="shop" />
//       </div>
//     </div>
//   );
// }

// export default ShopPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import EditableCard from '../components/EditableCard';
import PlusCard from "../components/PlusCard";
import shopImage from '../assets/shop.png';
import Header from "../components/Header";

let Shop = [
  {
    name: "Shop 1",
  },
  {
    name: "Shop 2",
  },
];

function ShopPage() {
  const [shops, setShops] = React.useState([...Shop]);
  const navigate = useNavigate();

  const handleAddShop = (newShopName) => {
    setShops([...shops, { name: newShopName }]);
  };

  const handleDeleteCard = (index) => {
    const updatedShops = [...shops];
    updatedShops.splice(index, 1);
    setShops(updatedShops);
  };

  const handleShopImageClick = () => {
    navigate("/line");
  };

  return (
    <div>
      {/* <Header/> */}
      <h2 className="text-center mt-2 mb-0 underline">SHOPS</h2>
      <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
        {shops.map((shop, index) => (
          <EditableCard
            key={index}
            name={shop.name}
            imageUrl={shopImage}
            onDelete={() => handleDeleteCard(index)}
            onImageClick={handleShopImageClick}
          />
        ))}
        <PlusCard onAddClick={handleAddShop} cardType="shop" />
      </div>
    </div>
  );
}

export default ShopPage;
