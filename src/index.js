import React from 'react'
import ReactDOM from'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline'
import TokenProvider from './Context/TokenProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <TokenProvider>
            <CssBaseline>
                <App />
            </CssBaseline>
        </TokenProvider> 
        
    </BrowserRouter>
)

reportWebVitals();