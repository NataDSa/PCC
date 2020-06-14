import React from 'react';

class About extends React.Component {

    render() {
        return (
            <div>
                <div className="about">
                    <div className="container">
                        <div className="row row-lg-eq-height">
                            <div className="col-lg-7">
                                <div className="about_content">
                                    <div className="section_title"><h2>Наши специалисты работают для Вас</h2></div>
                                    <div className="about_text">
                                        <p>Полное оснащение современным оборудованием и материалами, применение новейших технологий в лечении различных заболеваний, внимательное отношение добродушных специалистов к проблемам каждого пациента – именно такой подход позволяет нам оставаться в числе лучших на рынке медицинских услуг.</p>
                                    </div>
                                    <div className="button about_button">
                                        <a href="#">Подробнее</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="about_image"><img src="images/about.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;