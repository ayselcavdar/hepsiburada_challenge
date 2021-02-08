import React from "react";
import './cart.css';
import { useHistory } from "react-router-dom";


const EmptyCart = () => {
    const history = useHistory()
    const onClick = () => {
        history.push("/")
    }
  return (
    <div className="emptyCart-container" onClick={onClick}>
      <div className="text-title">
     
        <h1>Sepetin şu an boş </h1>
      
          <p >
            {" "}
            Sepetini Hepsiburada'nın fırsatlarla dolu dünyasından doldurmak için
            buraya tıklayarak ürünleri incelemeye başlayabilirsin.
          </p>
    
      </div>
    </div>
  );
};

export default EmptyCart;
