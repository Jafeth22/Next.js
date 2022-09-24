import { getBooks } from '../../utils/api-ultils';
import Link from 'next/link';

/**
 * This runs only on Server Side, but it is static because
 * It gets the data from server, next build the data and then,
 * it renders the informacion to the browser.
 * 
 * This function runs during the build time and not after that.
 * 
 * revalidate = It makes call to the server every 10sec (for this case),
 * it makes this an Incremental Static Generation (ISG), it means after
 * X time of second, if you refresh the page, it will bring the new informacion.
 */
export async function getStaticProps() {
    const books = await getBooks();
    return {
        props: { books },
        revalidate: 10,
    }
}


export default function BooksHome ({ books }) {
    return (<div>
        <ul>
            {books.map((book) => (
                <li key={book.id}>
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