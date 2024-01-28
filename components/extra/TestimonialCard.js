import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-4">
      <div className="bg-white p-6 rounded-md shadow-md">
        <p className="text-gray-600">{testimonial.content}</p>
        <div className="mt-4 flex items-center justify-center">
          <img
            className="w-12 h-12 rounded-full object-cover mr-4"
            src={testimonial.avatar}
            alt={testimonial.author}
          />
          <div>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-gray-500">{testimonial.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
