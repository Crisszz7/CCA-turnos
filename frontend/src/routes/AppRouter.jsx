import { Route, Routes } from "react-router"
import {Module} from "../pages/Admin/Module.jsx";
import {Services} from "../pages/Admin/Services.jsx";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={ <Module />} />
            <Route path="/servicios" element={ <Services />} />
        </Routes>
    )
}