import React, { useContext, useState, useEffect } from "react";
import "./Product.css"
import { CartContext } from "../../../context/CartContext";
const Product = ({ id, name, description }) => {
  const {
    addItemToCart, 
    updateItemCount,
    removeItemFromCart,
    getCartItemCountByProductId,} = useContext(CartContext);
  
  const [count, setCount] = useState(0);

  const handleUpdate = async (newCount) => {
    await updateItemCount(id, newCount);
    setCount(newCount);
  };

  const handleDelete = async () => {
    await removeItemFromCart(id);
    setCount(0);
  };

  useEffect(() => {
    if (id) {
      setCount(getCartItemCountByProductId(id));
    }
  }, [id, getCartItemCountByProductId]);

  return (
    <div className="product"
      data-cy="product"

      style={{
        border: "1px solid black",
        borderRadius: "10px",
        padding: "20px",
        Width: "350px",
        height:"150px",
        marginTop:"50px",
        gap:"20px"
      }}>
    
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      {count === 0 ? (
        <button
          data-cy="product-add-item-to-cart-button"
          onClick={() => {
            addItemToCart({
              productId: id,
              count: 1,
            });
          }}>Add To Cart </button> 
      ) : (
        <div>
          <button
            data-cy="product-increment-cart-item-count-button"
            onClick={() => handleUpdate(count + 1)}> + </button>
          
          <span data-cy="product-count">{count}</span>
          <button
            data-cy="product-decrement-cart-item-count-button"
            onClick={() => handleUpdate(count - 1)}> - </button>
          
          <button
            data-cy="product-remove-cart-item-button"
            onClick={handleDelete}> Remove from cart </button>  
        </div>
      )}
    </div>
  );
};

export default Product;
