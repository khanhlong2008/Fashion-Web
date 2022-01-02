import React from 'react';
import FachionLits from '../../../Blog/fashion/FachionLits';

import ProductFilterBy from './ProductFilterBy';

const ProductFilter = () => {
  return (
    <div>
      <ProductFilterBy />
      <FachionLits title="Featured Collection" />
    </div>
  );
};

export default ProductFilter;
