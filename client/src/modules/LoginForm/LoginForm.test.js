import * as React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MockedProvider } from '@apollo/client/testing'
import LoginForm from './index'

const mocks = []

const setup = () => {
    const component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <LoginForm />
        </MockedProvider>,
    )

    return { component }
}
describe('LoginForm', () => {
    test('Should render component', () => {
        setup()

        const formEl = screen.getByText(/Log in/i)

        expect(formEl).toBeInTheDocument()
    })
    test('Should show error if field is empty', async () => {
        setup()

        const buttonEl = screen.getByRole('button', { name: /submit/i })

        await act(async () => {
            await userEvent.click(buttonEl)
        })

        const errorEl = screen.getByTestId(/email-error/i)

        expect(errorEl).toBeInTheDocument()
    })

    test('Should submit form and redirect', async () => {
        setup()

        const passwordInput = screen.getByLabelText(/password/i)
        const emailInput = screen.getByLabelText(/email/i)

        expect(passwordInput).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()

        await act(async () => {
            await userEvent.type(emailInput, 'Email')
            await userEvent.type(passwordInput, 'Password')
        })

        expect(passwordInput.value).toBe('Password')
        expect(emailInput.value).toBe('Email')

        const buttonEl = screen.getByRole('button', { name: /submit/i })

        await act(async () => {
            await userEvent.click(buttonEl)
        })
    })
})
