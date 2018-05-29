import React from 'react';
import {Col, Button} from 'react-bootstrap';
import store from '../../store'
import { ADD_TO_CART } from '../../actions_creators/cart'

const addToCart = (product) => {
  store.dispatch(ADD_TO_CART(product))
}

const ProductItem = (props) => {
  return(
    <Col md={4}>
      <div className="product-item">
        <figure>
          <img src={props.product.img} alt={props.product.name}/>
        </figure>
        <p>{props.product.name}</p>
        <Button onClick={ () => addToCart(props.product)}>
          Agregar
        </Button>
      </div>
    </Col>
  )
}

export default ProductItem