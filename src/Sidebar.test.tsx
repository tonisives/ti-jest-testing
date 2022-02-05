import React from 'react'
import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

test('renders learn react link', () => {
    const items = [
        {
            name: 'test',
            href: '/test',
        },
        {
            name: 'test2',
            href: '/test2',
        },
    ]
    render(<Sidebar items={items} />)

    const anchorElements = screen.getAllByRole('navigation')
    expect(anchorElements[0]).toHaveTextContent(items[0].name)
    expect(anchorElements[0]).toHaveAttribute('href', items[0].href)
})
