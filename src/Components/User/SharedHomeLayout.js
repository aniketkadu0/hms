import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import HomePage from './HomePage';

class SharedHomeLayout extends Component {
    render() {
        return (
            <div>
                <HomePage />                
                <Outlet />                
            </div>
        );
    }
}

export default SharedHomeLayout;