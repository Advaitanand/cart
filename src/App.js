import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar';
import firebase from 'firebase'

class App extends React.Component {
  
  constructor (){
    super()
    this.state = {
      products: [],
      loading: true
    }
  }

  componentDidMount = () => {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     const products = snapshot.docs.map((doc) => {
          
    //       const data = doc.data();
          
    //       data['id'] = doc.id
    //       return data
    //     })

    //     this.setState({
    //       products,
    //       loading: false
    //     })

    //   })
    firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        const products = snapshot.docs.map((doc) => {
          
          const data = doc.data();
          
          data['id'] = doc.id
          return data
        })

        this.setState({
          products,
          loading: false
        })

      })
  }

  handleIncreaseQuantity = (product) => {
      const { products } = this.state
      const index = products.indexOf(product);

      // products[index].qty += 1

      // this.setState({
      //     products: products
      // })

      const docRef = firebase.firestore().collection('products').doc(products[index].id)

      docRef 
        .update({
          qty: products[index].qty + 1
        })
        .then(() => {
          console.log('Updated successfully')
        })
        .catch((err) => {
          console.log('Error', err)
        })

  }

  handleDecreaseQuantity = (product) =>{
      const { products } = this.state
      const index = products.indexOf(product)


      const docRef = firebase.firestore().collection('products').doc(products[index].id)

      docRef
        .update({
          qty: products[index].qty - 1 < 0 ? 0 : products[index].qty - 1
        })
        .then(() => {
          console.log('Updated Successfully')
        })
        .catch((err) => {
          console.log('Error',err)
        })
      // products[index].qty = products[index].qty - 1 < 0 ? 0 : products[index].qty - 1
      //
      // this.setState({
      //     products
      // })

  }

  handleDeleteProduct = (id) => {
      const { products } = this.state

      // const items = products.filter((item) => item.id !== id)
      // this.setState({
      //   products: items 
      // })

      const docRef = firebase.firestore().collection('products').doc(id)

      docRef
        .delete()
        .then(() => {
          console.log('Deleted Successfully')
        })
        .catch((err) => {
          console.log('Error',err)
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
      return ''
    })

    return cartTotal
  }

  addProduct = () =>{
    firebase
      .firestore()
      .collection('products')
      .add({
        img: '',
        price: 9999,
        qty: 1,
        title: 'Washing Machine'
      })
      .then((docRef) => {
        console.log('Product added',docRef)
      })
      .catch((error) => {
        console.log('Error',error)
      })
  }

  render(){
    const { products, loading } = this.state
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        {/* <button onClick={this.addProduct} style ={{padding: 20, fontSize: 20}}  >Add a product</button> */}
        <Cart 
          products = {products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete={this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ...</h1>}
        <div style={ {fontSize:20, padding: 10} }>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
