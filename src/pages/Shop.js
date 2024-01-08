import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EditableCard from '../components/EditableCard';
import PlusCard from '../components/PlusCard';
import shopImage from '../assets/shop.png';
import Header from '../components/Header';

function ShopPage() {
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/shop', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `
              query Shops {
                shops {
                  id
                  name
                  factoryId
                }
              }
            `,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          setShops(result.data.shops);
        } else {
          setError(result.errors);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  const handleAddShop = (newShopName) => {
    // Your logic to add a new shop
  };

  const handleDeleteCard = (index) => {
    // Your logic to delete a shop
  };

  const handleShopImageClick = () => {
    navigate('/line');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
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
