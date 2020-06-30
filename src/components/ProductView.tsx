import React from 'react';
import {Products} from './Product';
import { RouteProps } from 'react-router-dom';



export interface State {
    location: any
    pathname: any
}
interface Props {
    location: any
    pathname: any
}
export class ProductView extends React.Component<Props & RouteProps, State> {

        render() {
            console.log(this.props.location)
            let test = this
            
            let newString = test.props.location.pathname.replace("/product/", "");
            
            let productToDisplay = Products.filter(function (product) {
            return product.name === newString;
        }); 
        return(
            <div>
                    <div>
                        <h1>{productToDisplay[0].price}</h1>
                        <h1>{productToDisplay[0].name} </h1>
                        <h1>{productToDisplay[0].description} </h1>
                        <h1>{productToDisplay[0].size} </h1>
                        <img src={ require("./../assets/images/" + productToDisplay[0].img) } alt="produktImg" />
                        
                    </div>
            </div>
        )
            }
           }


