/**
 * runs on server side
 * @returns books data
 */
export async function getBooks() {
    //This link is from firebase database
    const response = await fetch(
        "https://next-js-path-routing-default-rtdb.firebaseio.com/books.json"
    );
    console.log(response);
    return await response.json(); //Converts data to json format
}

export async function getBooksFromId(id) {
    const books = await getBooks();
    return books.find(book => book.id === id);
}