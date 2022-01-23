import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './index'

describe('Button', () => {
  test('Should render component', () => {
    render(<Button>Click</Button>)

    const buttonEl = screen.getByText(/Click/i)
      
    expect(buttonEl).toBeInTheDocument()
  })
  test('Should fire click event', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click</Button>)

    const buttonEl = screen.getByText(/Click/i)

    userEvent.click(buttonEl)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
  test('Should be disabled', () => {
    render(<Button disabled>Click</Button>)

    const buttonEl = screen.getByText(/Click/i)

    expect(buttonEl).toBeDisabled()
  })
})