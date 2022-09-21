import React from 'react';
import { books } from '../../data/utils';
import Link from 'next/link';

export default function BooksHomePage() {
    return books.map((book) => (
            <div key={book.id} 
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
                    <Link href={`/books/${book.id}`} >Detail</Link>
                </article>
            </div>
        ))
}