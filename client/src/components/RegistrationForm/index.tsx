import * as React from 'react'

export interface IRegistrationForm {
    primary?: boolean
    secondary?: boolean
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    children: React.ReactNode
    onClick: () => void
}

const RegistrationForm = () => <form>form</form>

export default RegistrationForm
