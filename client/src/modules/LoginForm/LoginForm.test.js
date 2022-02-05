import * as React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
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

        const buttonEl = screen.getByTestId(/submit-button/i)

        await act(async () => {
            await fireEvent.click(buttonEl)
        })

        const errorEl = screen.getByTestId(/username-error/i)

        expect(errorEl).toBeInTheDocument()
    })
})
