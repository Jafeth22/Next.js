import Head from 'next/head';
import Title from '../components/Title';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-5" >
        <Title>Next Shop</Title>
        <p>
          [TODO: Display products]
        </p>
      </main>
    </>
  );
}
