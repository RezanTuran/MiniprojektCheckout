import React from 'react';


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
    "img": "Gant.png"
  },
  { 
    "id": 2,
    "name":"Addidas",
    "description": "Bra kvalite",
    "size": 38,
    "price": 675,
    "img": "Gant.png"
  },
  { 
    "id": 3,
    "name":"Puma",
    "description": "Bra kvalite",
    "size": 41,
    "price": 499,
    "img": "Gant.png"
  },
  { 
    "id": 4,
    "name":"Nike",
    "description": "Bra kvalite",
    "size": 40,
    "price": 359,
    "img": "Gant.png"
  },
];



const Product = () => {
  
    return(
      <div>
         {Products.map((product) =>{
            return(
            <div>
              <img src={ require("./../assets/images/" + product.img) } alt="produktImg" />
              <p>{ product.id }</p>
              <h3>{ product.name }</h3>
              <p>{ product.description }</p>
              <p>{ product.size }</p>
              <p>{ product.price } :- </p>
              <button>Köp</button>
            </div>
            )
          })}
      </div>
);
};



export default Product;
