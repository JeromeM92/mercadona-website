import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../login/login';
import Admin from "../admin/admin";
import CreateProductScreen from "../admin/createProductScreen";
import CustomerScreen from "../customer/customerScreen";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin-board" element={<Admin/>}/>
                <Route path="/admin-create-product" element={<CreateProductScreen/>}/>
                <Route path="/" element={<CustomerScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;