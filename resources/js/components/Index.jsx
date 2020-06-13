import React from 'react';
import Header from './Header/Header';

import About from './About/About';
import Services from './Services/Services';
import Footer from './Footer/Footer';

class Index extends React.Component {

    render() {
        return (
            <div>
                <Header />
                
                <About />
                <Services />
                <Footer />
            </div>
        );
    }
}

export default Index;