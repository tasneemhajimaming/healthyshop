import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: '$10', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: '$20', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: '$30', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: '$40', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: '$50', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: '$60', image: 'https://via.placeholder.com/150' },
];

export default function ProductGrid() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-lg shadow-md" />
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
