import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="footer_container">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 footer_col">
                                <div className="footer_about">
                                    <ul className="footer_about_list">
                                        <li><div className="footer_about_icon"><img src="images/phone-call.svg" alt="" /></div><span>+7 900 000 00 00</span></li>
                                        <li><div className="footer_about_icon"><img src="images/envelope.svg" alt="" /></div><span>med@mail.ru</span></li>
                                        <li><div className="footer_about_icon"><img src="images/placeholder.svg" alt="" /></div><span>Ульяновск, Созидателей 13А</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 footer_col">
                                <div className="footer_links footer_column">
                                    <ul>
                                        <li><a href="#">Услуги</a></li>
                                        <li><a href="#">О нас</a></li>
                                        <li><a href="#">Контакты</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="copyright_content d-flex flex-lg-row flex-column align-items-lg-center justify-content-start">
                                    <div className="cr">
                                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> 2020 by <a href="https://vk.com/id148901808" target="_blank">SNS</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;