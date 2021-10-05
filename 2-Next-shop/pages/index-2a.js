// Fetch products on CLIENT side
// Compare againt SERVER side, it is better because it fetches the latest products, but it will show the source of the products,
// case where SERVER side pre-load the data and just will render the data already processed, but in case there are changes, these won't be reflected, but it will do on CLIENT side

// From an EXTERNAL API
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
