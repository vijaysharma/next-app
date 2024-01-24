import React from 'react';

interface Props {
  params: {
    slug: String[];
  };
}

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductsPage = async ({ params: { slug } }: Props) => {
  const productsJson = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store'
  });
  const products: Product[] = await productsJson.json();
  return (
    <>
      <div>Products Page </div>
      {!slug ? (
        <ul>
          {products.map((product) => (
            <li>
              {product.name} - <strong>${product.price}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>{slug}</p>
      )}
    </>
  );
};

export default ProductsPage;
