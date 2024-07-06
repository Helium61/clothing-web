// ItemDetail.jsx
import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Image1 from '../assets/downloadeee (5).jfif';
import Image2 from '../assets/downloadeeeeee (5).jfif';
import Image3 from '../assets/downloadeeeeeeee (5).jfif';
import Image4 from '../assets/istockphoto-1733124463-170667a.webp';

const items = [
  { id: '1', name: 'T-Shirts', price: '$19.99', image: Image1, description: 'Elevate your style...', sizes: ['S', 'M', 'L', 'XL'] },
  { id: '2', name: 'Jeans', price: '$49.99', image: Image2, description: 'Elevate your style...', sizes: ['28', '30', '32', '34'] },
  { id: '3', name: 'Jackets', price: '$89.99', image: Image3, description: 'Elevate your style...', sizes: ['M', 'L', 'XL', 'XXL'] },
  { id: '4', name: 'Shoes', price: '$69.99', image: Image4, description: 'Elevate your style...', sizes: ['7', '8', '9', '10'] }
];

const ItemDetail = () => {
  const { id } = useParams();
  const item = items.find(item => item.id === id);
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(item ? item.sizes[0] : '');

  if (!item) {
    console.log("Item not found with id:", id);
    return <p>Item not found!</p>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    const newItem = { ...item, size: selectedSize };
    console.log("Item to add:", newItem); // Ensure item details are logged correctly
    addToCart(newItem); // Make sure addToCart is called with newItem
  };

  return (
    <div className="p-10">
      <div className="flex flex-col md:flex-row items-center">
        <img src={item.image} alt={item.name} className="w-full md:w-1/2 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-8" />
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-semibold mb-4">{item.name}</h1>
          <p className="text-xl text-gray-700 mb-4">{item.description}</p>
          <p className="text-2xl font-bold text-gray-900 mb-6">{item.price}</p>
          <div className="mb-6">
            <span className="block mb-2 font-semibold">Available Sizes:</span>
            <div className="flex space-x-2">
              {item.sizes.map(size => (
                <button
                  key={size}
                  className={`py-2 px-4 rounded ${size === selectedSize ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
