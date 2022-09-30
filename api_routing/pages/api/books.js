// // This is to work with a local json file
// import fs from 'fs'; // fs = file system, it is implemented with NODE
// import path from 'path'; // to generate the path and access to the file
// This function is no longer needed due to we won't use anymore the fileSystem
// intead, we are going to use mongoDb
// function getData() {
//     // first param = process.cwd() = to get the current directory
//     // sec param = folder name
//     // third param = file name
//     const filePath = path.join(process.cwd(), "data", "books.json");
//     const fileData = fs.readFileSync(filePath);
//     return JSON.parse(fileData);
// }

import mongodb, { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    // Here we are getting the link to our DB
    const client = await MongoClient.connect("mongodb+srv://admin:admin_1234@cluster0.pge8for.mongodb.net/?retryWrites=true&w=majority");
    const db = client.db("books");

    if (req.method === 'GET') {
        // const data = getData();
        let books;
        try {
            books = await db.collection("books").find().sort().toArray();
        } catch (error) {
            return console.log(error);
        }


        if (books) {
            return res.status(200).json({ message: books });
        } else {
            return res.status(500).json({ message: 'Internal Server Error' });
        }

    } else if (req.method === 'POST') {
        const { name, description, imgURL } = req.body;

        if(!name?.trim() && !description?.trim() && !imgURL?.trim()){
            return res.status(422).json({ message: 'Invalid Data' }); // 422 == invalid value comes from FE
        }

        const newBook = {
            name,
            description,
            imgURL,
            id: Date.now()
        }
        // const filePath = path.join(process.cwd(), "data", "books.json");
        // const data = getData();
        // data.push(newBook);
        // fs.writeFileSync(filePath, JSON.stringify(data));
        let responseNewBook;
        try {
            responseNewBook = await db.collection('books').insertOne(newBook);
        } catch (error) {
            return console.log(error);
        }

        return res.status(200).json({ message: 'New book added', book: newBook });
    }
}