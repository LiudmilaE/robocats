import React from 'react';
import './Card.css';

const Card = ({title, name}) => (
  <section className="Card-box">
    <img src={`https://robohash.org/${title}.png?size=200x200&set=set4`}
      alt={title}/>
    <h3>{title}</h3>
    <p>Owner - {name}</p>
  </section>
);

export default Card;