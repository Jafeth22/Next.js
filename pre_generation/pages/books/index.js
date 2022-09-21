import { getBooks } from '../../utils/api-ultils';
import Link from 'next/link';

/**
 * This runs only on Server Side, but it is static because
 * It gets the data from server, next build the data and then,
 * it renders the informacio to the browser.
 * 
 * This fucntion runs during the build time and it generates
 * the pages that we want
 */
export async function getStaticProps() {
    const books = await getBooks();
    return {
        props: { books }
    }
}


export default function BooksHome ({ books }) {
    return (<div>
        <ul>
            {books.map((book) => (
                <li>
                    <div>
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
                </li>
            ))}
        </ul>
    </div>);
}