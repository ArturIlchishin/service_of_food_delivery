import {Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/basic_pages/HomePage";
import {LoginPage} from "../pages/basic_pages/LoginPage";
import {RegisterPage} from "../pages/basic_pages/RegisterPage";
import {StartPage} from "../pages/menu_pages/start_page/StartPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/login'} element={<LoginPage />} />
            <Route path={'/registration'} element={<RegisterPage />} />
            <Route path={'/start'} element={<StartPage />} />
        </Routes>
    )
}
