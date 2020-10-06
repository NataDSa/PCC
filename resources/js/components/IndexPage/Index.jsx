import React from 'react';
import Home from './Home';
import About from './About';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import { BrowserHistory, BrowserRouter, Route } from "react-router-dom";

class Index extends React.Component {

    render() {
        console.log(document.location.href)
        return (
            
            <BrowserRouter>
                <Header />
                <Route
                    path='/' exact
                    component={props => <Home {...props} />}
                />
                <Route
                    path='/about' exact
                    component={props => <About {...props} />}
                />
                <Route
                    path='/services' exact
                    component={props => <Services {...props} />}
                />
                <Footer />
            </BrowserRouter>
        );
    }
}
export default Index;