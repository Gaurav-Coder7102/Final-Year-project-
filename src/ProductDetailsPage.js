// ProductDetailsPage.jsx

import React from 'react';

const ProductDetailsPage = ({ location }) => {
  const {
    manufacturer,
    description,
    rawMaterials,
    quantity,
    transporter,
    wholesaler,
    distributor,
  } = location?.state || {};;

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product Manufacturer: {manufacturer}</p>
      <p>Description: {description}</p>
      <p>Product Raw Materials: {rawMaterials}</p>
      <p>Product Quantity: {quantity}</p>
      <p>Product Transporter: {transporter}</p>
      <p>Product Wholesaler: {wholesaler}</p>
      <p>Product Distributor: {distributor}</p>
      {/* Add additional information as needed */}
    </div>
  );
};

export default ProductDetailsPage;
