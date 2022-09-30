import React, { useEffect, useState } from "react";
import { BookItem } from "./BookItem";
import classes from '../styles/Books.module.css';

export const BookList = () => {
    const [data, setData] = useState();
    const sendRequest = () => {
        fetch('/api/books')
            .then(response => response.json())
            .then(data => setData(data.message))
            .catch(e => console.log(e));
    };

    useEffect(() => { sendRequest() }, []);

    return (
        <div className={classes.listContainer} >
            {data && 
                data.map((item) => (
                    <BookItem key={item.id} {...item} />
                )
            )}
        </div>
    );
}