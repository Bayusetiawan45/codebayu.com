import { render, screen } from '../../setupTests';
import { Navbar } from '../Navbar';

describe('Framer Motion component', () => {

  it('should render the Home link', () => {
    render(<Navbar />)
    const home = screen.getByText(/Home/i);
    expect(home).toBeInTheDocument()
  });

  it('should render the Experience link', () => {
    render(<Navbar />)
    const experience = screen.getByText(/Experience/i);
    expect(experience).toBeInTheDocument()
  });

  // it('should render the My Project link', () => {
  //   render(<Navbar />)
  //   const project = screen.getByText(/My Project/i);
  //   expect(project).toBeInTheDocument()
  // });

  it('should render the Tech Stack link', () => {
    render(<Navbar />)
    const stack = screen.getByText(/Tech Stack/i);
    expect(stack).toBeInTheDocument()
  });

  it('should render the download cv button', () => {
    render(<Navbar />)
    const button = screen.getByTestId('download-cv');
    expect(button).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<Navbar />)).not.toThrow();
  });
});
