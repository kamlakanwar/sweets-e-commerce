import React from 'react';
import Card from './Card';

const Cards = ({ productData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {productData.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          img={item.img}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Cards;
