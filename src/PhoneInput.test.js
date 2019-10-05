import React from 'react';
import PhoneInput from './PhoneInput';

import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <PhoneInput inputProps={{ 'data-testid': 'phone-input' }} />
  );
  const input = utils.getByTestId('phone-input');
  return {
    ...utils,
    input
  };
};

describe('<PhoneInput>', () => {
  test('should render an input', () => {
    const { container } = setup();
    expect(container.querySelector('input')).toBeInTheDocument();
  });

  test('should only allow numbers', () => {
    const { input } = setup();

    fireEvent.change(input, { target: { value: '1a*|~' } });
    expect(input.value).toBe('1');
  });

  describe('should create a dash after the', () => {
    test('3rd number', () => {
      const { input } = setup();
      fireEvent.change(input, { target: { value: '1234' } });
      expect(input.value).toBe('123-4');
    });

    test('6th number', () => {
      const { input } = setup();
      fireEvent.change(input, { target: { value: '1234567' } });
      expect(input.value).toBe('123-456-7');
    });
  });

  test('should only allow 10 numbers', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '12345678901234567890' } });
    expect(input.value).toBe('123-456-7890');
  });
});
