import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

const Layout = () => {
    return(
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <footer>
                it is a footer
            </footer>
        </>
    )
}

export default Layout