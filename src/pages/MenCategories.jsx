import { Link } from 'react-router-dom';
import  Image1 from '../assets/downloadeee (5).jfif'; // Import image
import Image2 from '../assets/downloadeeeeee (5).jfif'; // Import image
import  Image3 from '../assets/downloadeeeeeeee (5).jfif'; // Import image
import Image4 from '../assets/istockphoto-1733124463-170667a.webp'; // Import image

const items = [
  { id: '1', name: 'Jacket', price: '$19.99', image: Image1 },
  { id: '2', name: 'Jacket', price: '$49.99', image:Image2 },
  { id: '3', name: 'Jacket', price: '$89.99', image: Image3 },
  { id: '4', name: 'Jacket', price: '$69.99', image:Image4 }
];

const MenCategories = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-serif mb-8 text-center">Mens Clothing Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
            <p className="text-lg font-semibold text-gray-500 mb-4">{item.price}</p>
            <div className="flex justify-around">
              {/* <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Add to Cart</button> */}
              <Link to={`/item/${item.id}`}>
                <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-8 text-lg font-serif rounded">View</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenCategories;
