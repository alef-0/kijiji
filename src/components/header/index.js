import React, { Component } from 'react';
import LogoBar from './logoBar';
import SearchBar from './searchBar';

export default class Header extends Component {
    render() {
        return (
            <header>
                <LogoBar authorized={this.props.authorized}/>
                {this.props.location && !this.props.location.startsWith('/profile') ? <SearchBar/> : null}
            </header>
        );
    }
}

