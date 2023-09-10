import React from 'react'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Upload from './Components/UploadImage';
import { Routes, Route } from 'react-router-dom';
import "./style.css";

const App = (()=>{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}>
                    <Route path="upload" element={<Upload />}/>
                </Route>
                
            </Routes>
        </div>
    )
})

export default App