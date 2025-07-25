import React from 'react';
import Card from './Card'; // make sure path is correct

const Cards = ({productData}) => {
  console.log(productData)
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {productData.map((item, id) => (
        <Card
          key={id}
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
