import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {Provider} from "react-redux";
import {store} from "./store";
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: 'test',
        element: <h1>Hello test route</h1>
    }
]);

// https://reactrouter.com/en/main/start/tutorial

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <Provider store={store}>
            <RouterProvider router={router}/>
    </Provider>
)