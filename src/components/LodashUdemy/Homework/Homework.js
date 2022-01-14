import React, { useState, useEffect } from "react";
import _ from "lodash";

const Homework = () => {
  let basket = [];

  const setBasket = (newBasket) => {
    basket = newBasket;
  };

  const addProduct = (product) => {
    let newBasket = _.concat(basket, product);
    setBasket(newBasket);
  };

  const removeProduct = (productId) => {
    setBasket(
      _.filter(basket, (item) => {
        return item.id !== productId;
      })
    );
  };

  const changeAmount = (productId, increase) => {
    let newBasket = _.assign({}, basket);
    let updatedBasket = _.map(newBasket, (item) => {
      if (item.id === productId) {
        if (increase) {
          item.amount++;
        } else {
          item.amount--;
        }
      }
      return item;
    });
    setBasket(updatedBasket);
  };

  const increaseAmount = (productId) => {
    changeAmount(productId, true);
  };

  const decreaseAmount = (productId) => {
    changeAmount(productId, false);
  };

  const getTotalAmount = () => {
    let acc = 0;
    _.reduce(
      basket,
      (item) => {
        return item.amount++;
      },
      acc
    );

    return acc;
  };

  const getTotalPrice = () => {
    let acc = 0;
    _.reduce(
      basket,
      (item) => {
        return item.amount * item.price;
      },
      acc
    );

    return acc;
  };

  useEffect(() => {
    addProduct({ id: 1, name: "Milk", amount: 2, price: 3 });
    addProduct({ id: 2, name: "Bread", amount: 1, price: 5 });
    console.log("Total Amount: " + getTotalAmount());
    increaseAmount(1);
    console.log("Total Amount: " + getTotalAmount());
    decreaseAmount(1);
    console.log("Total Amount: " + getTotalAmount());
    console.log("Total Price: " + getTotalPrice());
    removeProduct(2);
  }, []);

  return <div>{JSON.stringify(basket)}</div>;
};

export default Homework;
