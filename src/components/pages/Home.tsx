import React from 'react';
import Slider from 'infinite-react-carousel';

export  interface Products{
    img: string
  }
  
  export const Products: Products[] = [
    { 
      "img": "Adidas.png"
    },
    { 
      "img": "Gant.png"
    },
    { 
      "img": "Nike3.png"
    },
    { 
        "img": "Nike2.png"
    },
    { 
        "img": "Nike4.png"
    },
    { 
        "img": "Nike3.png"
    },
    { 
        "img": "Nike2.png"
    },
    { 
        "img": "Nike4.png"
    },
    { 
        "img": "Gant.png"
    },
    { 
        "img": "Adidas5.png"
    },
  ];

const Home = () => {
    const settings =  {
        autoplay: true,
        dots: true
      };
    return(
     <div style={{height:'100vh'}}>
        <span style={{textAlign: 'center'}}>Populära Produkter</span>
        <Slider { ...settings }>
          <div>
            <img src={ require("../../assets/images/" + Products[0].img) } alt="produktImg" />
          </div>
          <div>
            <img src={ require("../../assets/images/" + Products[1].img) } alt="produktImg" />
          </div>
          <div>
            <img src={ require("../../assets/images/" + Products[2].img) } alt="produktImg" />
          </div>
          <div>
            <img src={ require("../../assets/images/" + Products[3].img) } alt="produktImg" />
          </div>
          <div>
            <img src={ require("../../assets/images/" + Products[4].img) } alt="produktImg" />
          </div>
          <div>
            <img src={ require("../../assets/images/" + Products[5].img) } alt="produktImg" />
          </div>
          <div>
            <img src={ require("../../assets/images/" + Products[6].img) } alt="produktImg" />
          </div>
          <div>
            <img src={ require("../../assets/images/" + Products[7].img) } alt="produktImg" />
          </div>
          <div>
            <img src={ require("../../assets/images/" + Products[8].img) } alt="produktImg" />
          </div>
          <div>
            <img src={ require("../../assets/images/" + Products[9].img) } alt="produktImg" />
          </div>
        </Slider>
      </div>
    );
};




export default Home;