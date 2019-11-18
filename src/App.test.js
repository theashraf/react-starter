import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders without crashing', () => {
  render(<App />)
})

test('should has React TDD starter', () => {
  const { getByText } = render(<App />)
  expect(getByText(/react tdd starter/i)).toBeInTheDocument()
})
