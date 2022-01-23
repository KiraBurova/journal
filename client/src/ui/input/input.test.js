import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Input from './index'

describe('Input', () => {
    test('Should render component', () => {
        render(<Input id="id" label="Label" />)

        const inputEl = screen.getByText(/Label/i)

        expect(inputEl).toBeInTheDocument()
    })
    test('Should have placeholder', () => {
        render(<Input id="id" label="Label" placeholder="Placeholder" />)

        const inputEl = screen.getByPlaceholderText(/Placeholder/i)

        expect(inputEl).toBeInTheDocument()
    })
})
