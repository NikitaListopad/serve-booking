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
                It is footer
            </footer>
        </>
    )
}

export default Layout