/* eslint-disable */
import calculate from '../calculate';

describe('calculate', () => {
  it('should return the initial state when "AC" is pressed', () => {
    const initialState = {
      total: '100',
      next: '50',
      operation: '+',
    };
    const result = calculate(initialState, 'AC');
    expect(result).toMatchSnapshot();
  });

  it('should handle number button presses', () => {
    const state1 = {
      total: null,
      next: null,
      operation: null,
    };
    const result1 = calculate(state1, '5');
    expect(result1).toMatchSnapshot();

    const state2 = {
      total: '10',
      next: null,
      operation: null,
    };
    const result2 = calculate(state2, '0');
    expect(result2).toMatchSnapshot();

    const state3 = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result3 = calculate(state3, '3');
    expect(result3).toMatchSnapshot();
  });

  it('should handle "." button presses', () => {
    const state1 = {
      total: null,
      next: '5',
      operation: null,
    };
    const result1 = calculate(state1, '.');
    expect(result1).toMatchSnapshot();

    const state2 = {
      total: '10',
      next: '5',
      operation: null,
    };
    const result2 = calculate(state2, '.');
    expect(result2).toMatchSnapshot();

    const state3 = {
      total: '10',
      next: '5.2',
      operation: '+',
    };
    const result3 = calculate(state3, '.');
    expect(result3).toMatchSnapshot();
  });
});
