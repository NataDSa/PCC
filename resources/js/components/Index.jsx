import React from 'react';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Footer from './Footer/Footer';

class Index extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Home />
                <About />
                <Services />
                <Footer />
            </div>
        );
    }
}

export default Index;