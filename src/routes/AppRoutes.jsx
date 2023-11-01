import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Login } from '../pages/login/Login';
import { Cadastro } from "../pages/cadastro/Cadastro";
import { ProductManagement } from "../pages/menu/Menu";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ < Home /> }/>
                <Route path="/login" element={ < Login /> }/>
                <Route path="/cadastro" element={ < Cadastro /> }/>
                <Route path="/menu" element={ < ProductManagement /> }/>
            </Routes>
        </BrowserRouter>
    );
}

export { AppRoutes };