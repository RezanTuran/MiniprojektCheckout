import React from 'react'
import { Button } from '@material-ui/core';
import { CartConsumer, ContextState } from '../contexts/cartContxt'
import { RouteComponentProps } from 'react-router-dom'



export default function cartView() {
    return (
        <CartConsumer>
            {(contextData: ContextState) => {
                let totalPrice = 0;
                return (
                    <div>
                        <h1>Cart</h1>
                        {
                            contextData.cartItems.length ?
                                contextData.cartItems.map((cartItem, index: number) => {
                                    totalPrice = totalPrice + cartItem.theItem.price * cartItem.quantity;
                                    return (
                                        <div key={cartItem.theItem.id}>
                                            <h3 >Quantity: <br /> x {cartItem.quantity}</h3>
                                            <h3 >{cartItem.theItem.description}</h3>
                                            <img src={require("./../assets/images/" + cartItem.theItem.img)} alt="pic" />
                                            <h3>one item price: {cartItem.theItem.price} SEK</h3>
                                            <div >
                                                <Button onClick={() => contextData.deletefromcart(cartItem.theItem, index)}>Delete from cart</Button>
                                            </div>

                                        </div>
                                    )
                                }
                                )
                                :
                                (<div>
                                    <h4>No Items</h4>

                                </div>)
                        }
                        <h1>{contextData.cartItems.length ? "Total price is: " + totalPrice : "Total price is: 0"} kr</h1>
                    </div>
                )
            }}
        </CartConsumer>
    )
};
