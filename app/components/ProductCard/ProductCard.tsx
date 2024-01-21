import React from 'react';
import AddToCart from '../AddToCart';
import styles from './ProductCard.module.scss';

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <h1>Product Card</h1>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
