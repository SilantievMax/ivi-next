import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';



import Home from '../../pages/index';



import HomePage from '@/src/components/screens/HomePage/HomePage';
import { store } from '@/src/store/store';
import Movies from '../../pages/movies'


describe('Movies', () => {
  it('renders homepage unchanged', () => {
    const { container } = render(<Movies />)
    expect(container).toMatchSnapshot()
  })
})
