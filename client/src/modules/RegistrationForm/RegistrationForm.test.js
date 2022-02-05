import * as React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import RegistrationFrom from './index'

describe('RegistrationFrom', () => {
    test('Should render component', () => {
        render(<RegistrationFrom />)

        const formEl = screen.getByText(/Create new account/i)

        expect(formEl).toBeInTheDocument()
    })
    test('Should show error if field is empty', () => {
        render(<RegistrationFrom />)

        const buttonEl = screen.getByTestId(/submit-button/i)

        act(() => {
            fireEvent.click(buttonEl)
        })

        const errorEl = screen.getByTestId(/username-error/i)

        expect(errorEl).toBeInTheDocument()
    })
})
