import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import ShareIcon from '@material-ui/icons/Share';
// import { Avatar,IconButton, CardMedia } from '@material-ui/core';

export  interface Product{
  id: number
  name: string
  description: string
  size:number
  price: number
  img: string
}

let Products: Product[] = [
  { 
    "id": 0,
    "name":"Gant",
    "description": "Bra kvalite",
    "size": 41,
    "price": 899,
    "img": "Gant.png"
  },
  { 
    "id": 1,
    "name":"Nike",
    "description": "Bra kvalite",
    "size": 43,
    "price": 589,
    "img": "Nike.jpg"
  },
];

const Product = () => {
  
    return(
      <div style={productContainer}>
         {Products.map((product) =>{
            return(
            <div>
              <p>{ product.id }</p>
              <h3>{ product.name }</h3>
              <p>{ product.description }</p>
              <p>{ product.size }</p>
              <p>{ product.price }</p>
              <img src={ require("./../assets/images/" + product.img) } alt="produktImg" />
            </div>
            )
          })}
      </div>
);
};

let productContainer  ={
  display: "flex",
}


export default Product;
