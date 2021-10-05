// Fetch products on the SERVER side,
// every time the refresh the page
import Head from 'next/head';
import Title from '../../components/Title';
import { getProducts } from '../../lib/products';

// getServerSideProps
export async function getServerSideProps() {
  console.log('[HomePage] getServerSideProps()');
  const products = await getProducts();
  return { props: { products } }
}

export default function HomePage({ products }) {
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
