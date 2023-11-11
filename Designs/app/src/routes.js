import React , {Suspense} from "react";
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import { AuthProvider } from './utils/AuthContext';

//history
import { history } from './utils/history';

//pages
import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Orders"
import Login from "./pages/Login"

function RoutesWrapper () {
    return (
        <BrowserRouter>
            <Suspense fallback={
                <div className="fallback-body">
                    <div className="">
                        Loading...
                    </div>
                </div>
            }>
                <AuthProvider>
                    <Routes history={history}>
                        <Route path="/" element={<Login/>} />
                        <Route path="/Dashboard" exact element={<Dashboard/>} />
                        <Route path="/Orders" exact element={<Orders/>} />

                        <Route path="/*"  element={''} />
                    </Routes>
                </AuthProvider>
            </Suspense>
        </BrowserRouter>
    );
}

export default RoutesWrapper
