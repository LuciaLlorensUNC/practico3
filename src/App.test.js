import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my custom title', () => {
  render(<App />);
  const titleElement = screen.getByTestId("tituloJuego");
  expect(titleElement).toHaveTextContent(/piedra, papel o tijera/i);
});
