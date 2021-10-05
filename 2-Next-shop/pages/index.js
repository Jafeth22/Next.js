import Head from 'next/head';
import Title from '../components/Title';

const products = [
  {id: 1, title: 'Product 1'},
  {id: 2, title: 'Product 2'}
];

export default function HomePage() {
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
