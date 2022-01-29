import * as React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import LoginForm from './index'

describe('LoginForm', () => {
    test('Should render component', () => {
        render(<LoginForm />)

        const formEl = screen.getByText(/Log in/i)

        expect(formEl).toBeInTheDocument()
    })
    test('Should show error if field is empty', async () => {
        render(<LoginForm />)

        const buttonEl = screen.getByTestId(/submit-button/i)

        await act(async () => {
            await fireEvent.click(buttonEl)
        })

        const errorEl = screen.getByTestId(/username-error/i)

        expect(errorEl).toBeInTheDocument()
    })
})
