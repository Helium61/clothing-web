import { Link } from 'react-router-dom';
import Image9 from '../assets/p1.jfif';
import Image10 from '../assets/p2.jfif';
import Image11 from '../assets/p3.jfif';
import Image12 from '../assets/p4.jfif';

const items = [
  { id: '1', name: 'Jacket', price: '$19.99', image: Image9 },
  { id: '2', name: 'Jacket', price: '$49.99', image: Image10 },
  { id: '3', name: 'Jacket', price: '$89.99', image: Image11 },
  { id: '4', name: 'Jacket', price: '$69.99', image: Image12 }
];

const TshirtCategories = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-serif mb-8 text-center">Polo Tshirts Clothing Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
            <p className="text-lg font-semibold text-gray-500 mb-4">{item.price}</p>
            <div className="flex justify-around">
              <Link to={`/item3/${item.id}`}>
                <button className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-8 text-lg font-serif rounded">View</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TshirtCategories;
