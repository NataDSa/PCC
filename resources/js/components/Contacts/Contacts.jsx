import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

class Contacts extends React.Component {

    render() {
        return (
            <div>
                <div className="contact">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6">
                                <div className="section_title"><h2>Get in touch</h2></div>
                                <div className="contact_text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa.</p>
                                </div>
                                <ul className="footer_about_list">
                                    <li><div className="footer_about_icon"><img src="images/phone-call.svg" alt="" /></div><span>+7 900 000 00 00</span></li>
                                    <li><div className="footer_about_icon"><img src="images/envelope.svg" alt="" /></div><span>med@mail.ru</span></li>
                                    <li><div className="footer_about_icon"><img src="images/placeholder.svg" alt="" /></div><span>Ульяновск, Созидателей 13А</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 form_col">

                            </div>
                            <div className="row map_row">
                                <div className="col">


                                    <div className="contact_map">

                                        <div className="map">
                                            <div id="google_map" className="google_map">
                                                <div className="map_container">
                                                    <div id="map"></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="box working_hours">
                                            <div className="box_icon d-flex flex-column align-items-start justify-content-center"><div style="width:29px; height:29px;"><img src="images/alarm-clock.svg" alt="" /></div></div>
                                            <div className="box_title">Working Hours</div>
                                            <div className="working_hours_list">
                                                <ul>
                                                    <li className="d-flex flex-row align-items-center justify-content-start">
                                                        <div>Monday – Friday</div>
                                                        <div className="ml-auto">8.00 – 19.00</div>
                                                    </li>
                                                    <li className="d-flex flex-row align-items-center justify-content-start">
                                                        <div>Saturday</div>
                                                        <div className="ml-auto">9.30 – 17.00</div>
                                                    </li>
                                                    <li className="d-flex flex-row align-items-center justify-content-start">
                                                        <div>Sunday</div>
                                                        <div className="ml-auto">9.30 – 15.00</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;