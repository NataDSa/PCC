import React from 'react';
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {

    render() {
        return (
            <header className="header trans_200">
                <div className="super_container">
                    <div className="top_bar">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                                        <div className="top_bar_item"><a href="#">Записаться на приём</a></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header_container">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                        <nav className="main_nav ml-auto">
                                            <ul>
                                                <li>
                                                    <NavLink exact to="/">Главная</NavLink> 
                                                </li>
                                                <li>
                                                    <NavLink to='/about'>О нас</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/services'>Услуги</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/contacts'>Контакты</NavLink>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div className="hamburger ml-auto"><i className="fa fa-bars" aria-hidden="true"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="logo_container_outer">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="logo_container">
                                        <a href="#">
                                            <div className="logo_content d-flex flex-column align-items-start justify-content-center">
                                                <div className="logo_line"></div>
                                                <div className="logo d-flex flex-row align-items-center justify-content-center">
                                                    <div className="logo_text">Care<span>Med</span></div>
                                                    <div className="logo_box">+</div>
                                                </div>
                                                <div className="logo_sub">Health Care Center</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;