import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../containers/header';
import '../styles/main.scss';

class App extends Component {
    render() {
        return (
            <div>
                <Header location={this.props.location.pathname}/>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
export default App;
