import { render } from '@testing-library/react'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
  it('shoul display the right text based on ordeer status', () => {
    const wrapper = render(<OrderStatus status="pending" />)

    const statusText = wrapper.getByAltText('Pendente')

    console.log(statusText.outerHTML)

    expect(statusText).toBeInTheDocument()
  })
})
