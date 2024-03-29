import { render, screen } from '../../setupTests';
import Buble from '.';

describe('Buble component', () => {
  
  it('should render the buble with correct styles', () => {
    render(<Buble />);
    const buble = screen.getByTestId('buble');
    expect(buble).toBeInTheDocument();
    expect(buble).toHaveStyle(`
      width: 30rem;
      height: 30rem;
      background: gray.500;
      border-radius: 15rem;
      position: absolute;
      top: -200px;
      left: -200px;
    `);
  });
  
  it('renders without throwing an error', () => {
    expect(() => render(<Buble />)).not.toThrow();
  });
});
