import React,{useContext}from 'react';

import { GatsbyContext } from "../context/context"
import NavBar from './NavBar'
import SideBar from "./SideBar"
import Footer from "./Footer"

const Layout = ({children}) => {
     const { isSidebarOpen } = useContext(GatsbyContext)
    return (
        <>
          <NavBar></NavBar>
          {isSidebarOpen && <SideBar></SideBar>}
          {children}
          <Footer></Footer>
        </>
    );
};

export default Layout;