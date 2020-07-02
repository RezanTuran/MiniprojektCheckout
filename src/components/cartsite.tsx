import React, { CSSProperties } from 'react';
import { Button, Typography, IconButton } from '@material-ui/core';
import { CartConsumer, ContextState } from '../contexts/cartContxt'
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';


export default function cartView() {
    return (
        <CartConsumer>
            {(contextData: ContextState) => {
                let totalPrice = 0;
                
                function cardValidation(){
                    if(totalPrice === 0){
                        alert("Kundvagnen är tomt")
                        window.location.reload();
                    }
                }

                return (
                    <div>
                        <h4 style={{textAlign: 'center'}}>Kundkorg</h4>
                    <div style={productCardContainer}>
                        {
                            contextData.cartItems.length ?
                                contextData.cartItems.map((cartItem, index: number) => {
                                    totalPrice = totalPrice + cartItem.theItem.price * cartItem.quantity;
                                    return (
                                    <div style={productCard}>  
                                        <div key={cartItem.theItem.id}>
                                            <p>{cartItem.theItem.name}</p>
                                            <img style={imgStyle} src={require("./../assets/images/" + cartItem.theItem.img)} alt="pic" />
                                            <p style={price}> {cartItem.theItem.price} SEK</p>
                                            <div >
                                                <Button variant="contained" style={addItem} onClick={() => contextData.addProductToCart(cartItem.theItem)}> + </Button>
                                                <Button variant="contained" style={deleteItem} onClick={() => contextData.deletefromcart(cartItem.theItem, index)}> - </Button>
                                                <IconButton aria-label="delete" onClick={() => contextData.deletefromcart(cartItem.theItem, index)}><DeleteIcon fontSize="large"/></IconButton>
                                                <Typography>Antal: x {cartItem.quantity}</Typography>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }
                                )
                                :
                                (<div>
                                    <h6>Din varukorg är tom</h6>
                                </div>)
                        }
                    </div>
                        <h6>{contextData.cartItems.length ? "Total pris är: " + totalPrice : "Total pris är: 0"} kr</h6>
                        <Link to="/Checkout">
                            <Button onClick={cardValidation} variant="contained" color="primary">Till Betalning</Button>
                        </Link>
                    </div>
                )
            }}
        </CartConsumer>
    )
};

let productCard:CSSProperties ={
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    maxWidth: '300px',
    margin: 'auto',
    marginTop: '20px',
    textAlign: 'center',
    fontFamily: 'arial',
}
let imgStyle:CSSProperties ={
    width: '100%',
    height: '200px'
}
let productCardContainer:CSSProperties  ={
    display: 'flex',
    flexWrap: 'wrap',
}
let price:CSSProperties ={
    color: 'gray',
    fontSize: '22px'
  }

let addItem:CSSProperties ={
    backgroundColor: 'green',
    color: 'white'
}

let deleteItem:CSSProperties ={
    backgroundColor: 'red',
    color: 'white'
}

