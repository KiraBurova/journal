import * as React from 'react'
import { render, screen, act } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import userEvent from '@testing-library/user-event'

import RegistrationFrom from './index'

const mocks = []

const setup = () => {
    const component = render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <RegistrationFrom />
        </MockedProvider>,
    )

    return { component }
}
describe('RegistrationFrom', () => {
    test('Should render component', () => {
        setup()

        const formEl = screen.getByTestId('registration-form')

        expect(formEl).toBeInTheDocument()
    })
    test('Should show error if field is empty', async () => {
        setup()

        const buttonEl = screen.getByRole('button', { name: 'Submit' })

        await act(async () => {
            await userEvent.click(buttonEl)
        })

        const errorEl = screen.getByTestId(/username-error/i)

        expect(errorEl).toBeInTheDocument()
    })
    test('Should submit form and redirect', async () => {
        setup()

        const usernameInput = screen.getByLabelText(/username/i)
        const passwordInput = screen.getByLabelText(/password/i)
        const emailInput = screen.getByLabelText(/email/i)

        expect(usernameInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()

        await act(async () => {
            await userEvent.type(usernameInput, 'Username')
            await userEvent.type(emailInput, 'Email')
            await userEvent.type(passwordInput, 'Password')
        })

        expect(usernameInput.value).toBe('Username')
        expect(passwordInput.value).toBe('Password')
        expect(emailInput.value).toBe('Email')

        const buttonEl = screen.getByRole('button', { name: /submit/i })

        await act(async () => {
            await userEvent.click(buttonEl)
        })

        expect(await screen.findByText('Log in')).toBeInTheDocument()
    })
})
