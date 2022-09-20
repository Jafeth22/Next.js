export const books = [
    {
        id: '1',
        name: 'First Book',
        description: 'This is the description of my First Book'
    },
    {
        id: '2',
        name: 'Second Book',
        description: 'This is the description of my Second Book'
    },
    {
        id: '3',
        name: 'Third Book',
        description: 'This is the description of my Third Book'
    },
    {
        id: '4',
        name: 'Fourth Book',
        description: 'This is the description of my Fourth Book'
    },
    {
        id: '5',
        name: 'Fiveth Book',
        description: 'This is the description of my Fiveth Book'
    },
];

export const getBookFromId = (id) => (books.find((book) => book.id === id));