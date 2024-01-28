import React from 'react';

const LeftFormRightImage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Left side (Form) */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form className="space-y-4">
          {/* Your form fields go here */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right side (Image) */}
      <div className="hidden md:block md:w-1/2">
        <img
          src="/images/contactimg.png" // Replace with your image URL
          alt="Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LeftFormRightImage;
