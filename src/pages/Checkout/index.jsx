import React from "react";
import { useStateValue } from "../../StateProvider";
import "./checkout.css";
import { Link } from "react-router-dom";
import CheckoutProduct from "../../components/checkoutProduct";



const Checkout = (props) => {
  const [{ basket }] = useStateValue();
console.log("baskets",basket);
  return (
    <div className="checkout">
      <div className="checkout_left">
      {basket?.length === 0 ? (
        <div className="div_one">
          <img
            className="checkout_img"
            src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
            alt=""
          />
          <div className="div_cart">
            <h2>Your Amazon Cart is empty</h2>
            <div className="checkout_link">
              <Link to="/login" className="checkout_login" id="login">
                <span>Sign in to your account</span>
              </Link>
              <Link to="/" className="checkout_login">
                <span>Sign up now</span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="div_two">
          <h1>Shopping cart</h1>
          {/* list out all of checkout products */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              qte={item.qte}
            />
          ))}
        </div>
      )}
      </div>
      
    </div>
  );
};

export default Checkout;
