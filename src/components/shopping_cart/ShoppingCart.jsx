import React from 'react'
import {Row, Col} from 'react-bootstrap';
import './ShoppingCart.css'
import store from '../../store'
import { REMOVE_TO_CART } from '../../actions_creators/cart'

class ShoppingCart extends React.Component {
  state = {
    cart: store.getState().cart
  }

  componentWillMount () {
    store.subscribe( () =>
      {this.setState({cart: store.getState().cart})}
    )
  }

  removeToCart (product_id) {
    store.dispatch(REMOVE_TO_CART(product_id))
  }

  renderItemsCart = (items) => {
    if (items.length === 0) {
      return(<p>Todavia no tienes autos agregados</p>)
    } else {
      return(
        <ul>
          { items.map( (item, index) => {
              return(<li key={index}>{item.name} <a href="#" onClick={() => this.removeToCart(item.id)}>Eliminar</a></li>)
            })
          }
        </ul>
      )
    }
  }

  render (){
    return (
      <Row className="show-grid">
        <Col md={12}>
          <div className="shopping-cart">
            <h4>Tus futuros autos!</h4>
            { this.renderItemsCart(this.state.cart) }
          </div>
        </Col>
      </Row>
    )
  }
}
export default ShoppingCart