import React from 'react';
import classes from '../styles/Books.module.css';

export const BookItem = ({ name, description, id, imgURL }) => {
    return (
        <div id={id} className={classes.listItem}>
            <img src={imgURL} alt={name}/>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
};