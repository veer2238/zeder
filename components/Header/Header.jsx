import "./Header.scss";
import { useEffect,useState,useContext } from "react";
import {useNavigate} from "react-router-dom";
import {AiOutlineHeart, AiOutlineSearch} from  "react-icons/ai";
import {CgShoppingCart} from "react-icons/cg"
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/Context";
import { icons } from "react-icons";
const Header = () => {
    return (
        <header className="main-header">
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">Vx Men</div>
                <div className="right">
                    <AiOutlineSearch/>
                    <AiOutlineHeart/>
                    <span className="cart-icon ">
                        <CgShoppingCart/>
                        <span>5</span>
                    </span>
                </div>
            </div>
        </header>
    )
    
    
};

export default Header;
