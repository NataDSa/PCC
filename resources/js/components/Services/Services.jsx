import React from 'react';

class Services extends React.Component {

    render() {
        return (
            <div>
                <div className="services">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div cclassNamelass="section_title"><h2>Наши услуги</h2></div>
                            </div>
                        </div>
                        <div className="row services_row">
                            <div className="col-lg-4 col-md-6 service_col">
                                <a href="services.html">
                                    <div className="service text-center trans_200">
                                        <div className="service_icon"><img className="svg" src="images/service_1.svg" alt="" /></div>
                                        <div className="service_title trans_200">Полное обследование</div>
                                        <div className="service_text">
                                            <p>Комплекс диагностических процедур, состав которых корректируется в зависимости от разных факторов – возраста, пола, наследственности</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-4 col-md-6 service_col">
                                <a href="services.html">
                                    <div className="service text-center trans_200">
                                        <div className="service_icon"><img className="svg" src="images/service_2.svg" alt="" /></div>
                                        <div className="service_title trans_200">Скрининговое обследование</div>
                                        <div className="service_text">
                                            <p>Медицинский осмотр направленный на выявление на ранних сроках заболеваний у клинически бессимптомных лиц</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-4 col-md-6 service_col">
                                <a href="services.html">
                                    <div className="service text-center trans_200">
                                        <div className="service_icon"><img className="svg" src="images/service_3.svg" alt="" /></div>
                                        <div className="service_title trans_200">МРТ</div>
                                        <div className="service_text">
                                            <p>Медицинская диагностика, направленная на выявление патологических и физиологических изменений в тканях и внутренних органах</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-4 col-md-6 service_col">
                                <a href="services.html">
                                    <div className="service text-center trans_200">
                                        <div className="service_icon"><img className="svg" src="images/service_4.svg" alt="" /></div>
                                        <div className="service_title trans_200">Лечение зубов</div>
                                        <div className="service_text">
                                            <p>Стоматологическая помощь оказываемой при заболеваниях и повреждениях зубов, челюстно-лицевой области и других органов полости рта</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-4 col-md-6 service_col">
                                <a href="services.html">
                                    <div className="service text-center trans_200">
                                        <div className="service_icon"><img className="svg" src="images/service_5.svg" alt="" /></div>
                                        <div className="service_title trans_200">Неонатология</div>
                                        <div className="service_text">
                                            <p>Медицинская помощь новорождённым, изучение их роста и развития, их заболеваний и патологического состояния</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-lg-4 col-md-6 service_col">
                                <a href="services.html">
                                    <div className="service text-center trans_200">
                                        <div className="service_icon"><img className="svg" src="images/service_6.svg" alt="" /></div>
                                        <div className="service_title trans_200">Анализы</div>
                                        <div className="service_text">
                                            <p>Комплекс физико-химических лабораторных методов, направленных на получение информации о клеточном и химическом составах материалов</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;