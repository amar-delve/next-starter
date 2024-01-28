import React from 'react';

export default function HomeBanner() {
  return (
    <>
      <div
        className="relative bg-cover bg-center bg-gradient-to-r from-blue-500 to-purple-500 text-white py-40"
        style={{ backgroundImage: 'url("/images/homebanner.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="lg:w-1/2 sm:w-full pl-3 pr-8">
            <h1 className="text-4xl font-bold mb-4">Discover Your Perfect Destination</h1>
            <p className="text-lg mb-6">Explore and plan your next adventure with us. Find the best places to visit, stay, and enjoy unforgettable experiences.</p>
          </div>
          <div className="w-1/2 pl-3">
            <form className="flex items-center">
              <input
                type="text"
                placeholder="Search for destinations..."
                className="w-full py-2 px-4 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
