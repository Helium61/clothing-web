// src/pages/ItemDetail.js

import { useParams } from 'react-router-dom';
import  Image5 from '../assets/w1.jfif'; // Import image
import Image6 from '../assets/w2.jfif'; // Import image
import  Image7 from '../assets/w3.jfif'; // Import image
import Image8 from '../assets/w4.jfif'; // Import image

const items = [
  { id: '1', name: 'T-Shirts', price: '$19.99', image: Image5, description: 'Elevate your style with our premium leather jacket, a perfect blend of timeless design and modern flair. Crafted from high-quality, genuine leather, this jacket boasts a sleek and rugged appearance that only gets better with age. The rich texture and natural variations in the leather give each piece a unique character.The jacket features a classic biker silhouette, complete with a sturdy front zipper, asymmetrical design, and lapel collar that exudes effortless cool. ', sizes: ['S', 'M', 'L', 'XL'] },
  { id: '2', name: 'Jeans', price: '$49.99', image:Image6, description: 'Elevate your style with our premium leather jacket, a perfect blend of timeless design and modern flair. Crafted from high-quality, genuine leather, this jacket boasts a sleek and rugged appearance that only gets better with age. The rich texture and natural variations in the leather give each piece a unique character.The jacket features a classic biker silhouette, complete with a sturdy front zipper, asymmetrical design, and lapel collar that exudes effortless cool.', sizes: ['28', '30', '32', '34'] },
  { id: '3', name: 'Jackets', price: '$89.99', image: Image7, description: 'Elevate your style with our premium leather jacket, a perfect blend of timeless design and modern flair. Crafted from high-quality, genuine leather, this jacket boasts a sleek and rugged appearance that only gets better with age. The rich texture and natural variations in the leather give each piece a unique character.The jacket features a classic biker silhouette, complete with a sturdy front zipper, asymmetrical design, and lapel collar that exudes effortless cool.', sizes: ['M', 'L', 'XL', 'XXL'] },
  { id: '4', name: 'Shoes', price: '$69.99', image:Image8, description: 'Elevate your style with our premium leather jacket, a perfect blend of timeless design and modern flair. Crafted from high-quality, genuine leather, this jacket boasts a sleek and rugged appearance that only gets better with age. The rich texture and natural variations in the leather give each piece a unique character.The jacket features a classic biker silhouette, complete with a sturdy front zipper, asymmetrical design, and lapel collar that exudes effortless cool.', sizes: ['7', '8', '9', '10'] }
];

const ItemDetail = () => {
  const { id } = useParams();
  const item = items.find(item => item.id === id);

  if (!item) {
    return <p>Item not found!</p>;
  }

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
                <button key={size} className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded">{size}</button>
              ))}
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
