import React from 'react';
import ProductCard from '../extra/ProductCard';
import Heading from '../extra/Heading';

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet.',
      price: 19.99,
      image: 'https://example.com/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Consectetur adipiscing elit.',
      price: 29.99,
      image: 'https://example.com/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Pellentesque habitant morbi tristique senectus.',
      price: 39.99,
      image: 'https://example.com/product3.jpg',
    },
    // Add more product objects as needed
  ];

  return (
    <div className='w-11/12 mx-auto'>
      <Heading title="Our Products" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
