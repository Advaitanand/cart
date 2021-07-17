import React from 'react'
import './index.css'
class CartItem extends React.Component {

    render(){

        const{price, title, qty} = this.props.product;
        const{onDecreaseQuantity, onIncreaseQuantity, product, onDelete} = this.props
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
                            onClick={() => onIncreaseQuantity(product)}  
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                            onClick={() => onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/png/512/3096/3096673.png" 
                            onClick={() => onDelete(product.id)}
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