import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EditableCard from '../components/EditableCard';
import PlusCard from "../components/PlusCard";
import shopImage from '../assets/shop.png';
 
function ShopPage() {
  const [shops, setShops] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/shop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query Shops {
              shops {
                id
                name
                factoryId
                createdAt
                updatedAt
              }
            }
          `,
        }),
      });
 
      const result = await response.json();
      setShops(result.data.shops);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 
  const handleAddShop = async (newShopName) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/shop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation CreateShop($factoryId: Int!, $name: String!) {
              createShop(factoryId: $factoryId, name: $name) {
                shop {
                  id
                  name
                  factoryId
                  createdAt
                  updatedAt
                }
              }
            }
          `,
          variables: {
            factoryId: 3, // You may replace this value with the appropriate factoryId
            name: newShopName,
          },
        }),
      });
 
      const result = await response.json();
      setShops([...shops, result.data.createShop.shop]);
    } catch (error) {
      console.error("Error adding shop:", error);
    }
  };
 
  const handleDeleteCard = async (id, index) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/shop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation DeleteShop($id: Int!) {
              deleteShop(id: $id) {
                shop {
                  id
                }
              }
            }
          `,
          variables: {
            id: id,
          },
        }),
      });
 
      await response.json();
      const updatedShops = [...shops];
      updatedShops.splice(index, 1);
      setShops(updatedShops);
    } catch (error) {
      console.error("Error deleting shop:", error);
    }
  };
 
  const handleShopImageClick = () => {
    navigate("/line");
  };
 
  return (
    <div>
      <h2 className="text-center mt-2 mb-0 underline">SHOPS</h2>
      <div className="d-flex gap-5 h-screen justify-content-center align-items flex-wrap">
        {shops.map((shop, index) => (
          <EditableCard
            key={index}
            name={shop.name}
            imageUrl={shopImage}
            onDelete={() => handleDeleteCard(shop.id, index)}
            onImageClick={handleShopImageClick}
          />
        ))}
        <PlusCard onAddClick={handleAddShop} cardType="shop" />
      </div>
    </div>
  );
}
 
export default ShopPage;
