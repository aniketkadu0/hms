import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import SideStudentNavBar from './SideStudentNavBar';

class SharedStudentLayout extends Component {
    render() {
        return (
            <div className='flex'>
                <SideStudentNavBar />                
                <Outlet /> 
            </div>
        );
    }
}

export default SharedStudentLayout;