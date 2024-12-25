import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from 'app/App'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from 'app/providers/StoreProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <App />
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>
)
