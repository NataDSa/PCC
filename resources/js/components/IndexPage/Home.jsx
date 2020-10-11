import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <div className="menu_container menu_mm">
                    <div className="menu_close_container">
                        <div className="menu_close"></div>
                    </div>
                </div>
                <div className="home">
                    <div className="owl-carousel owl-theme home_slider">
                        <div className="home_slider_background">
                            <div className="home_slider_background" style={{ backgroundImage: "url(images/home_background_1.jpg)" }}></div>
                            <div className="home_content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="home_content_inner">
                                                <div className="home_title"><h1>Медицинский центр</h1></div>
                                                <div className="home_text">
                                                    <p>Надежность и качество работы - наши основные приоритеты. В нашей клинике работают лучшие специалисты в своей области, а клиенты всегда останутся довольны качеством наших услуг.</p>
                                                </div>
                                                <div className="button home_button">
                                                    <a href="/about">Подробнее</a>
                                                </div>
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

export default Home;