import React from 'react';
import Card from './Card'; // make sure path is correct

const Cards = ({productData}) => {

  return (
    <div className="flex flex-wrap justify-center gap-4 mx-10">
      {productData.map((item) => (
        <Card key={item.id}
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
