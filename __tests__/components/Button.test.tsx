import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Button } from '@/src/components/Button/Button'

describe('Button', () => {
  it('Button size: img ', () => {
    const { container } = render(<Button size='img' />)
    expect(container.firstChild).toHaveClass('img')
  })
  it('Button size: icon ', () => {
    const { container } = render(<Button size='icon' />)
    expect(container.firstChild).toHaveClass('icon')
  })
  it('Button size: smart ', () => {
    const { container } = render(<Button size='smart' />)
    expect(container.firstChild).toHaveClass('smart')
  })
  it('Button size: circle ', () => {
    const { container } = render(<Button size='circle' />)
    expect(container.firstChild).toHaveClass('circle')
  })
  it('Button size: border ', () => {
    const { container } = render(<Button size='border' />)
    expect(container.firstChild).toHaveClass('border')
  })
  it('Button size: reviews ', () => {
    const { container } = render(<Button size='reviews' />)
    expect(container.firstChild).toHaveClass('reviews')
  })
  it('Button size: comment ', () => {
    const { container } = render(<Button size='comment' />)
    expect(container.firstChild).toHaveClass('comment')
  })
  it('Button size: iconGoBack ', () => {
    const { container } = render(<Button size='iconGoBack' />)
    expect(container.firstChild).toHaveClass('iconGoBack')
  })
  it('Button color: red ', () => {
    const { container } = render(<Button color='red' />)
    expect(container.firstChild).toHaveClass('red')
  })
  it('Button color: gray ', () => {
    const { container } = render(<Button color='gray' />)
    expect(container.firstChild).toHaveClass('gray')
  })
  it('Button color: darkRed ', () => {
    const { container } = render(<Button color='darkRed' />)
    expect(container.firstChild).toHaveClass('darkRed')
  })
  it('Button color: gradient ', () => {
    const { container } = render(<Button color='gradient' />)
    expect(container.firstChild).toHaveClass('gradient')
  })
  it('Button color: lightGray ', () => {
    const { container } = render(<Button color='lightGray' />)
    expect(container.firstChild).toHaveClass('lightGray')
  })
  it('Button color: redOpacity ', () => {
    const { container } = render(<Button color='redOpacity' />)
    expect(container.firstChild).toHaveClass('redOpacity')
  })
})
