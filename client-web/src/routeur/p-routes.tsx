import {Route, Routes} from 'react-router-dom';
import Home from "../pages/home";
import Detail from "../pages/detail";

const PRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/detail/:name' element={<Detail/>}/>
            </Routes>
        </div>
    )
}

export default PRoutes