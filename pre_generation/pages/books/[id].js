import React from 'react'
import { useRouter } from 'next/router'
import { getBooks, getBooksFromId } from '../../utils/api-ultils';
import Link from 'next/link';

/**
 * getStaticProps has default the context object inside it,
 * and it has all the features of this function
 */
export async function getStaticProps({params}) {
    const book = await getBooksFromId(params.id);
    return {
        props: { book }
    }
}

export async function getStaticPaths() {
    const books = await getBooks();
    const paths = books.map((book) => ({params: { id: book.id }}));
    return {
        paths,
        fallback: false,
    };
}

export default function Books({book}){
    if(!book) return <h2>This book is not available yet. Please, try with another book.</h2>;

    return <div key={book.id} 
            style={{
                width: 400,
                margin: 'auto',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1>{book.name}</h1>
            <p>{book.description}</p>
            <article
                style={{
                    border: '1px solid while',
                    borderRadius: '4px',
                    padding: '8px',
                    backgroundColor: 'gray',
                }}
            >
                <Link href='/books' >Back to Books Page</Link>
            </article>
        </div>
}