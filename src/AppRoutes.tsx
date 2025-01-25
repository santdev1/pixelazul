import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/homepage/Homepage"
import Listgames from "./pages/listgames/Listgames"
import Gameinfo from "./pages/gameinfo/Gameinfo"
import ErrorPage from "./pages/error/Error"

const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/listgames/:category" element={<Listgames/>}/>
            <Route path="/gameinfo/:id" element={<Gameinfo/>}/>
            <Route path="/error" element={<ErrorPage />}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
}

export default AppRoutes