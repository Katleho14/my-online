import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard'
import CartPage from './Pages/CartPage'
import ContentSection  from './components/ContentSection'
import ItemView from './Pages/ItemView'
import DashboardBag from "./components/DashboardBag";
import Checkout from './Pages/Checkout'
import Address from './Pages/Address'
import PaymentMethod from "./components/PaymentMethod";  
import ShippingAdd from './components/ShippingAdd' 



function AppRoutes() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/dashboard" element={<ContentSection />} />
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/product/:id" element={<ItemView />} />
                    <Route path="/dashboard-bag" element={<DashboardBag />} />
                    <Route path="/Checkout" element={<Checkout />} /> 
                    <Route path="/address" element={<Address/>} />
                    <Route path="/payment-method" element={<PaymentMethod />} />  
                    <Route path="/shipping-add" element={<ShippingAdd />} />  


                </Routes>
            </div>
        </Router>
    );
}

export default AppRoutes;
