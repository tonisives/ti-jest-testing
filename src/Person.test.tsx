import React from 'react'
import { render, screen } from '@testing-library/react'
import { Person } from './Person'

test('renders learn react link', () => {
    render(<Person name="tonis" />)

    const linkElement = screen.getByText(/Name is tonis/i)
    expect(linkElement).toBeInTheDocument()

    const divElement = screen.getByRole('contentinfo')
    expect(divElement).toHaveTextContent('Name is tonis')

    expect(divElement).toHaveAttribute('role', 'contentinfo')
})
