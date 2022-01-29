import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const RegistrationPage = lazy(() => import('./components/RegistrationForm'))

const App = () => (
    <Routes>
        <Route path="/" element={<RegistrationPage />} />
    </Routes>
)

export default App
