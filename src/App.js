import React, { lazy, Suspense, use, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// import About from './components/About';
// import Contact from './components/Contact';
// import Cart from './components/Cart';
// import Groceries from './components/Groceries';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Menu from './components/Menu';

import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/APPsTORE.JS';


const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Cart = lazy(() => import("./components/Cart"));
const Groceries = lazy(() => import("./components/Groceries"));


const AppLayout = () => {

    //perform authentication and get sample data
    const [username, setUserName] = useState("Rahul");

    return (
        <>
            <Provider store={appStore}>
                <UserContext.Provider value={{ loggedInUser: username, setUserName }}>
                    <Header />
                    <Outlet />
                    <Footer />
                </UserContext.Provider>
            </Provider>
        </>

    )
}

//version used is react router dom @6
const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/groceries',
                element: <Suspense fallback={<p>Loading...</p>}><Groceries /></Suspense>
            },
            {
                path: '/about',
                element: <Suspense fallback={<p>Loading...</p>}><About /></Suspense>
            },
            {
                path: '/contact',
                element: <Suspense fallback={<p>Loading...</p>}><Contact /></Suspense>
            },
            {
                path: '/cart',
                element: <Suspense fallback={<p>Loading...</p>}><Cart /></Suspense>
            },
            {
                path: 'restaurant/:resId',
                element: <Menu />
            }

        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);  
root.render(<RouterProvider router={appRoutes} />)