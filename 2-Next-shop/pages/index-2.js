// Fetch products on CLIENT side
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Title from '../components/Title';
import { getProducts } from '../lib/products';

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  console.log('HomePage', products);
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-5" >
        <Title>Next Shop</Title>
        <ul>
          {products.map((product) => (
            <li key={product.id} >
              {product.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
