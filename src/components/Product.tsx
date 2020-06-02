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
  price: number
  img: string
}

let Products: Product[] = [
  { 
    "id": 0,
    "name":"Gant",
    "description": "Bra kvalite",
    "price": 899,
    "img": "../assets/produkt1.png"
  },
];

const Product = () => {
  
    return(
      <div>
         {Products.map((product) =>{
            return(
            <div>
              <p>{ product.id }</p>
              <h3>{ product.name }</h3>
              <p>{ product.description }</p>
              <p>{ product.price }</p>
              <img src={product.img} />
            </div>
            )
          })}
        
      </div>
);
};

export default Product;