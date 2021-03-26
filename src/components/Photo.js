import React from "react";

const Photo = props => (
    <div>
        <h3>{props.photo.title}</h3>
        <img src={props.photo.url} alt={props.photo.title} />
        <p>{props.photo.explanation}</p>
        <br />
        <h3>{props.photo.date}</h3>
    </div>
);

export default Photo;