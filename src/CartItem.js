import React from 'react'
import './index.css'
class CartItem extends React.Component {
    constructor (){
        super()
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    render(){
        return(
            <div className="cart-item">
                <div clasName="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>Phone</div>
                    <div style={{ color: '#777'}}>Rs 999</div>
                    <div style={{ color: '#777'}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img alt="increase" className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992651.png" />
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/png/512/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/512/3096/3096673.png" />
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