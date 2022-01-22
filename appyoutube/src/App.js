import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "bootstrap/dist/css/bootstrap.css";
import Home from './components/Home';
import './App.css';
import InitialVideo from './components/InitialVideo';
import Prueba from './components/Prueba';
class App extends React.Component {

    
    
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Prueba />} />
                    <Route path="/InitialVideo" element={<Home />} />
                </Routes>
            </div>
        )
    }
}

export default App;