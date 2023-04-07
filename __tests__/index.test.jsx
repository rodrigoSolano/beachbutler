/* eslint-disable no-undef */
import { render } from '@testing-library/react'
import Index from '../pages/index'
import '@testing-library/jest-dom'

describe('Index', () => {
  it('renders the component', () => {
    render(<Index />)
  })
})
