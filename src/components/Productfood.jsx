import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: '250 Bath', image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4ML4rWzJMONd6tMOwhn1urYCXJ3XzhUpaVRlOJhRyziSoe4aG7f.jpg' },
  { id: 2, name: 'Product 2', price: '399 Bath', image: 'https://files.vogue.co.th/uploads/healthy-food-7.jpg' },
  { id: 3, name: 'Product 3', price: '199 Bath', image: 'https://files.vogue.co.th/uploads/okeovkepv.jpg' },
  { id: 4, name: 'Product 4', price: '350 Bath', image: 'https://f.ptcdn.info/193/056/000/p487njai7zChLdaMdsC-o.jpg' },
  { id: 5, name: 'Product 5', price: '399 Bath', image: 'https://f.ptcdn.info/193/056/000/p487njai7zChLdaMdsC-o.jpg' },
  { id: 6, name: 'Product 6', price: '499 Bath', image: 'https://assets.brandinside.asia/uploads/2019/10/anna-pelzer.jpg' },
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
