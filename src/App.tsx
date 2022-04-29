import React from 'react';
import './Global.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Market from "./pages/Market";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={':marketCode'} element={<Market/>}/>
        </Routes>
    );
}

export default App;
