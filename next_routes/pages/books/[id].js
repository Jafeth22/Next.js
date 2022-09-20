import React from 'react'
import { useRouter } from 'next/router'
import { getBookFromId } from '../../data/utils';
import Link from 'next/link';

export default function Books(){
    const router = useRouter(); // Get values from the URL
    const book = getBookFromId(router.query.id);
    // console.log(router);

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