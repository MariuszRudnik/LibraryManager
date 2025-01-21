import { describe } from 'vitest';
import { sum } from './sum.ts';

describe('sum', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
