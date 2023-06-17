import {Route, Routes} from 'react-router-dom';
import Home from "../pages/home/home";
import Details from "../pages/details/details";

const PRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/detail/:name' element={<Details/>}/>
            </Routes>
        </div>
    )
}

export default PRoutes