import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
import './ProductList.css';
import ProductItem from './ProductItem';
import store from '../../store';

class ProductList extends Component {
  state = {
    products: store.getState().products
  }
  
  componentWillMount() {
    store.subscribe( () =>{
      this.setState(
        {products: store.getState().products}
      )}
    )
  }

  render(){
    return(
      <Row className="show-grid">
        { this.state.products.map( product => 
            <ProductItem key={product.id} product={product}/>
        )}
      </Row>
    )
  }
}

export default ProductList