import React from 'react';
import NavBar from './NavBar'
import SideBar from "./SideBar"
import Footer from "./Footer"

const Layout = ({children}) => {
    return (
        <>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </>
    );
};

export default Layout;