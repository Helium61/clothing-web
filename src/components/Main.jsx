const Main = () => {
  return (
    <div>
      <main className="p-4">
        {/* Main Image and Button */}
        <div className="relative">
          <img src="src/assets/pexels-polina-tankilevitch-6939175.jpg" alt="Main" className="w-full h-auto" />
          <button className="absolute left-1/2 -mt-24 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 text-2xl font-serif">
            Shop Now
          </button>
        </div>

        {/* Card Container */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
            <img src="src/assets/male-fashion-model-wearing-leather-260nw-390084187.webp" alt="Card 1" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-50 flex flex-col justify-center items-center p-4">
              <h2 className="text-white text-xl font-bold mb-2 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">Card Title 1</h2>
              <p className="text-white text-base mb-4 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">This is a description for card 1. Customize it as needed.</p>
            </div>
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Men Clothes
            </button>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
            <img src="src/assets/pexels-jmendezrf-1536619.jpg" alt="Card 2" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-50 flex flex-col justify-center items-center p-4">
              <h2 className="text-white text-xl font-bold mb-2 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">Card Title 2</h2>
              <p className="text-white text-base mb-4 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">This is a description for card 2. Customize it as needed.</p>
            </div>
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Women Clothes
            </button>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
            <img src="src/assets/men-t-shirts-500x500.webp" alt="Card 3" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-0 transition duration-300 ease-in-out hover:bg-opacity-50 flex flex-col justify-center items-center p-4">
              <h2 className="text-white text-xl font-bold mb-2 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">Card Title 3</h2>
              <p className="text-white text-base mb-4 opacity-0 hover:opacity-100 transition duration-300 ease-in-out">This is a description for card 3. Customize it as needed.</p>
            </div>
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Polo T-Shirts
            </button>
          </div>
        </div>

        <div className="mt-12">
          <img src="src/assets/Screenshot (231).png" alt="" />
        </div>

        {/* New Circles Section */}
        <div className="mt-20 flex justify-around">
          {/* Circle 1 */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-white shadow-lg flex justify-center items-center">
              <img src="src/assets/download (1).jfif" alt="Circle 1" className="h-60 object-cover" />
            </div>
            <p className="mt-4 text-center text-xl font-semibold font-serif">Xinnua Mall</p>
          </div>

          {/* Circle 2 */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-white shadow-lg flex justify-center items-center">
              <img src="src/assets/download.jfif" alt="Circle 2" className="w-full h-60 object-cover" />
            </div>
            <p className="mt-4 text-center text-xl font-semibold font-serif">Siddique Trade Center</p>
          </div>

          {/* Circle 3 */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden bg-white shadow-lg flex justify-center items-center">
              <img src="src/assets/images (1).jfif" alt="Circle 3" className="w-full  object-cover" />
            </div>
            <p className="mt-4 text-center text-xl font-semibold font-serif">Imperial Mall</p>
          </div>
        </div>
        <div className="mt-10">
          <img src="src/assets/Black and White Simple Coming Soon Facebook Cover.png" className="w-full h-96" alt="" />
        </div>
        
      </main>
    </div>
  );
};

export default Main;
