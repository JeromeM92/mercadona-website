import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../login/login';
import Admin from "../admin/admin";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin-board" element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;