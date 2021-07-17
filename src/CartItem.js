import React from 'react'
import './index.css'
class CartItem extends React.Component {
    increaseQuantitiy = () => {

        // Form 1 of calling set state
        // React will do shallow merging

        // this.setState({
        //     qty: this.state.qty + 1
        // })

        // Form 2 - if prev state required, use this.

        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        })

    }
    decreaseQuantitiy = () => {
        this.setState({
            qty: this.state.qty - 1 < 0 ? 0 : this.state.qty - 1
        })
    }

    render(){
        const{price, title, qty} = this.props.product;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{ color: '#777'}}>{price}</div>
                    <div style={{ color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992651.png" 
                            onClick={this.increaseQuantitiy}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                            onClick={this.decreaseQuantitiy}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/3096/3096673.png" 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;