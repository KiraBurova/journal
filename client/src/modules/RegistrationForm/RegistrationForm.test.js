import * as React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

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

        const formEl = screen.getByText(/Create new account/i)

        expect(formEl).toBeInTheDocument()
    })
    test('Should show error if field is empty', () => {
        setup()

        const buttonEl = screen.getByTestId(/submit-button/i)

        act(() => {
            fireEvent.click(buttonEl)
        })

        const errorEl = screen.getByTestId(/username-error/i)

        expect(errorEl).toBeInTheDocument()
    })
})
