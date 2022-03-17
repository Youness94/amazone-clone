import React from "react";
import StarRateTwoToneIcon from "@material-ui/icons/StarRateTwoTone";
import "./product.css";
import { ADD_ITEM, ADD_COUNTER, DELETE_ITEM ,INCREASE_QTE} from "../../actions/type";
import { useStateValue } from "../../StateProvider";

const Product = (props) => {
  const myIcons = [1, 2, 3, 4, 5];
  const [{ basket }, dispatch] = useStateValue();
  
  const addToBasket = () => {
    const itemList=basket.filter(item=>item.id===props.id);
    itemList.length>0 ? dispatch({
      type: INCREASE_QTE,
      id: props.id,
    }):  dispatch({
      type: ADD_ITEM,
      item: {
        id: props.id,
        title: props.title,
        price: props.price,
        rating: props.rating,
        image: props.image,
        qte:props.qte,
      },
    });
  
  };
  return (
    <div className="products">
      {/* product id, title, price, rating, image */}
      <div className="product_info">
        <p>{props.title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
          {myIcons.map((item) => (
            <StarRateTwoToneIcon className="icon" />
          ))}
        </div>
      </div>
      <img src={props.image} alt="" className="card_image" />
      <button onClick={addToBasket}>ADD to basket</button>
    </div>
  );
};

export default Product;

