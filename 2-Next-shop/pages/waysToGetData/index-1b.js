// Fetch products on the SERVER side
// On this case, we are going to use REVALIDATE, it will make the page refresh every X seconds
import Head from 'next/head';
import Title from '../../components/Title';
import { getProducts } from '../../lib/products';

// Incremental Static Generation
export async function getStaticProps() {
  console.log('[HomePage] getStaticProps()');
  const products = await getProducts();
  return { 
    props: { products },
    revalidate: 30 //On this case, it will refresh every 30s
  }
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
