import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';



import Home from '../../pages/index';



import HomePage from '@/src/components/screens/HomePage/HomePage';
import { store } from '@/src/store/store';


describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByText(/Test ok/i)

    expect(heading).toBeInTheDocument()
  })
})