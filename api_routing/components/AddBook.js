import React, { useState } from 'react';
import classes from '../styles/Form.module.css';

const AddBook = () => {
    const [input, setInput] = useState({
        name: '',
        description: '',
        imgURL: '',
    });

    const handleOnChange = (event) => {
        setInput((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const sendRequest = () => {
        fetch('/api/books/', {
            method: 'POST',
            body: JSON.stringify({
                name: input.name,
                description: input.description,
                imgURL: input.imgURL,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
    };

    const handleSubmit = (event) => {
        console.log(input);
        event.preventDefault(); 
        setInput({
            name: '',
            description: '',
            imgURL: '',
        });

        if(input.name && input.description && input.imgURL) {
            sendRequest();
        } else {
            return;
        }
    };

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit} className={classes.formControl}>
                <label htmlFor="name"> Name </label>
                <input 
                    name="name"
                    type="text"
                    value={input.name}
                    onChange={handleOnChange}
                />
                <label htmlFor="description"> Description </label>
                <input
                    name="description"
                    type="text"
                    value={input.description}
                    onChange={handleOnChange}
                />
                <label htmlFor="imgURL"> Img URL </label>
                <input
                    name="imgURL"
                    type="text"
                    value={input.imgURL}
                    onChange={handleOnChange}
                />

                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
        </div>
    );
};

export default AddBook;