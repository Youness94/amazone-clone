import React from 'react';
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from '../../StateProvider'
import './header.css'



const Header= props => {
      const [{basket}]=useStateValue();
   
      return (
            <nav className="header">
                  {/* logo e-commerce */}
                  <Link to="/" className="header_logo">
                        <img className="logo_amazon" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
                  </Link>
                  {/* search input*/}
                  <div className="header_search">
                        <input type="text" className="header_input"/>
                        <SearchIcon className="header_searchIcon"/>
                  </div>
                  {/* 3 links  */}
                  <div className="headerNav">
                        {/* 1st link */}
                        <Link to="/login" className="headerLink">
                              <div className="headerOption">
                                    <span className="header_optionLineOne">Hello,</span>
                                    <span className="header_optionLineTow">Sing In</span>
                              </div>
                        </Link>
                       
                        {/* 2nd link */}
                        <Link to="/" className="headerLink">
                              <div className="headerOption">
                                    <span className="header_optionLineOne">Returns</span>
                                    <span className="header_optionLineTow">& Orders</span>
                              </div>
                        </Link>
                       
                        {/* 3rd link */}
                        <Link to="/" className="headerLink">
                              <div className="headerOption" >
                                    <span className="header_optionLineOne">Your</span>
                                    <span className="header_optionLineTow">Prime</span>
                              </div>
                        </Link>
                        {/* 4th link */}
                        <Link to="/checkout" className="headerLink">
                              <div className="header_optionBasket">
                                    {/* shopping basket icon */}
                                    <ShoppingBasketIcon className=""/>
                                    {/* number of items in the basket */}
                                    <span className="header_optionLineTow basketCount">{basket.length}</span>

                              </div>
                        </Link>
                       
                  </div>
                  {/* basket icon with number */}
                  
                  <div></div>
            </nav>
      );
};



export default Header;