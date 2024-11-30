import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>

    )
}

//version used is react router dom @6
const appRoutes = createBrowserRouter([
    { path: "/", element: <AppLayout />, errorElement: <Error /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/cart", element: <Cart /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);  
root.render(<RouterProvider router={appRoutes} />)