import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./header";
import Main from "./main";

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