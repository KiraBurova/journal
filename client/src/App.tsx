import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import Button from './ui/button'

const RegistrationPage = lazy(() => import('./components/RegistrationForm'))

const App = () => (
    <>
        <Button onClick={() => console.log(1)}>asasdas</Button>
        <Routes>
            <Route path="/" element={<RegistrationPage />} />
        </Routes>
    </>
)

export default App
