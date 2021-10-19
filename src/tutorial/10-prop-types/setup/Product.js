import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({image, name, price}) => {
  return (
    <article className='product'>
      {image && <img src={image.url} alt={name} />}
      {name && <h4>{name}</h4>}
      {price && <p>${price}</p>}
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string.isRequired,
  price: PropTypes.number
}

Product.defaultProps = {
  image: { url: defaultImage },
  name: null,
  price: null
}

export default Product;
