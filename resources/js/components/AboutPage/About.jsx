import React from 'react';
import Header from '../Header/Header';
import Home from './Home';
import About from './About';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import Contacts from '../Contacts/Contacts';
import { BrowserRouter, Route } from "react-router-dom";


class Index extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Home />
                <About />
                <Services />
                <Contacts />
                <Footer />
            </div>
        );
    }
}

export default Index;