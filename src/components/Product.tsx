import React, { CSSProperties } from 'react';
import { Button } from '@material-ui/core';

export interface Product {
  id: number
  name: string
  description: string
  size: number
  price: number
  img: string
}

let Products: Product[] = [
  {
    "id": 0,
    "name": "Gant",
    "description": "Bra kvalite",
    "size": 41,
    "price": 899,
    "img": "Gant.png"
  },
  {
    "id": 1,
    "name": "Nike",
    "description": "Bra kvalite",
    "size": 43,
    "price": 589,
    "img": "Nike.png"
  },
  {
    "id": 2,
    "name": "Addidas",
    "description": "Bra kvalite",
    "size": 38,
    "price": 675,
    "img": "Addidas.png"
  },
  {
    "id": 3,
    "name": "Puma",
    "description": "Bra kvalite",
    "size": 41,
    "price": 499,
    "img": "Puma.png"
  },
  {
    "id": 4,
    "name": "Nike",
    "description": "Bra kvalite",
    "size": 40,
    "price": 359,
    "img": "Nike2.png"
  },
  {
    "id": 5,
    "name": "Puma",
    "description": "Bra kvalite",
    "size": 40,
    "price": 359,
    "img": "Puma2.png"
  },
  {
    "id": 6,
    "name": "Lacoste",
    "description": "Bra kvalite",
    "size": 40,
    "price": 359,
    "img": "Nike3.png"
  },
  {
    "id": 7,
    "name": "Gant",
    "description": "Bra kvalite",
    "size": 41,
    "price": 899,
    "img": "Gant.png"
  },
  {
    "id": 8,
    "name": "Gant",
    "description": "Bra kvalite",
    "size": 41,
    "price": 899,
    "img": "Gant.png"
  },
  {
    "id": 9,
    "name": "Puma",
    "description": "Bra kvalite",
    "size": 40,
    "price": 359,
    "img": "Puma2.png"
  },
  {
    "id": 10,
    "name": "Puma",
    "description": "Bra kvalite",
    "size": 41,
    "price": 499,
    "img": "Puma.png"
  },
  {
    "id": 11,
    "name": "Nike",
    "description": "Bra kvalite",
    "size": 43,
    "price": 589,
    "img": "Nike.png"
  },
];



const Product = () => {

  return (
    <div style={productCardContainer}>
      {Products.map((product, index) => {
        return (
          <div key={index} style={productCard}>
            <img style={imgStyle} src={require("./../assets/images/" + product.img)} alt="produktImg" />
            {/* <p>{ product.id }</p> */}
            <h3 style={{ color: 'red' }}>{product.name}</h3>
            <p style={price}>{product.price} :- </p>
            <p>{product.description}</p>
            <p>{product.size}</p>
            <Button style={button} variant="contained" color="primary">KÖP</Button>
          </div>
        )
      })}
    </div>
  );
};

let productCard: CSSProperties = {
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  maxWidth: '300px',
  margin: 'auto',
  marginTop: '20px',
  textAlign: 'center',
  fontFamily: 'arial',

}

let productCardContainer: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
}

let imgStyle: CSSProperties = {
  width: '100%',
  height: '200px'
}

let price: CSSProperties = {
  color: 'gray',
  fontSize: '22px'
}

let button: CSSProperties = {
  width: '100%',
  borderRadius: '0'
}


export default Product;
