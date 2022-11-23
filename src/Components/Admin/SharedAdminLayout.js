import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import SideAdminNavBar from './SideAdminNavBar';

class SharedAdminLayout extends Component {
    render() {
        return (
            <div className='flex'>
                <SideAdminNavBar />                
                <Outlet />                 
            </div>
        );
    }
}

export default SharedAdminLayout;