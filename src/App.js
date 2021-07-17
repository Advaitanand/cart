import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar';
import Footer from './Footer'

class App extends React.Component {
  
  constructor (){
    super()
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 2
        },
        {
          price: 9999,
          title: 'Laptop',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 3
        }
      ]
    }
  }


  handleIncreaseQuantity = (product) => {
      const { products } = this.state
      const index = products.indexOf(product);

      products[index].qty += 1

      this.setState({
          products: products
      })
  }

  handleDecreaseQuantity = (product) =>{
      const { products } = this.state
      const index = products.indexOf(product)

      products[index].qty = products[index].qty - 1 < 0 ? 0 : products[index].qty - 1
      
      this.setState({
          products
      })

  }

  handleDeleteProduct = (id) => {
      const { products } = this.state

      const items = products.filter((item) => item.id !== id)
      this.setState({
        products: items 
      })
  }

  getCartCount = () => {
    const { products } = this.state
    let count = 0;
    products.forEach((product) => {
      count += product.qty
    })
    return count
  }

  getCartTotal = () => {
    const { products } = this.state
    let cartTotal = 0;

    products.map((product) => {
      cartTotal += product.price*product.qty
    })
    return cartTotal
  }

  render(){
    const { products } = this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete={this.handleDeleteProduct}
        />
        <div style={ {fontSize:20, padding: 10} }>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
