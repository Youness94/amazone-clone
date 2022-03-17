import React from "react";
import StarRateTwoToneIcon from "@material-ui/icons/StarRateTwoTone";
import { ADD_ITEM, ADD_COUNTER, DELETE_ITEM } from "../../actions/type";
import "./checkoutP.css";
import { useStateValue } from "../../StateProvider";



const CheckoutProduct = (props) => {
  const myIcons = [1, 2, 3, 4, 5];
  const [{ basket }, dispatch] = useStateValue();
 

  const removeFromBasket = (s) => {
   
    dispatch({
      type: DELETE_ITEM,
      payload: { id:s.target.id },
    });
  };



  return (
    <div className="CheckoutProduct">
      <img src={props.image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{props.title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {myIcons.map((item) => (
            <StarRateTwoToneIcon className="icon" />
          ))}
        </div>
        <button className="button_remove" onClick={removeFromBasket} id={props.id}>
          Remove from basket
        </button>
        <span className="qte">{props.qte}</span>
      </div>
    </div>
  );
};

export default CheckoutProduct;
