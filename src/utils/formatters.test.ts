import { describe, it, expect } from 'vitest';
import { formatCurrency, formatDate, truncateText, slugify } from './formatters';

describe('formatters', () => {
  describe('formatCurrency', () => {
    it('formats USD currency by default', () => {
      expect(formatCurrency(1234.56)).toBe('$1,234.56');
    });

    it('formats different currencies', () => {
      expect(formatCurrency(1234.56, 'EUR')).toBe('€1,234.56');
    });

    it('handles zero', () => {
      expect(formatCurrency(0)).toBe('$0.00');
    });

    it('handles negative numbers', () => {
      expect(formatCurrency(-123.45)).toBe('-$123.45');
    });
  });

  describe('formatDate', () => {
    it('formats date with default options', () => {
      const date = new Date('2023-12-25');
      expect(formatDate(date)).toBe('December 25, 2023');
    });

    it('formats date string', () => {
      expect(formatDate('2023-12-25')).toBe('December 25, 2023');
    });

    it('accepts custom options', () => {
      const date = new Date('2023-12-25');
      const result = formatDate(date, {
        month: 'short',
        day: '2-digit',
      });
      expect(result).toBe('Dec 25, 2023');
    });
  });

  describe('truncateText', () => {
    it('returns original text if shorter than max length', () => {
      expect(truncateText('Hello', 10)).toBe('Hello');
    });

    it('truncates text longer than max length', () => {
      expect(truncateText('Hello World', 5)).toBe('Hello...');
    });

    it('handles exact length', () => {
      expect(truncateText('Hello', 5)).toBe('Hello');
    });

    it('trims whitespace before adding ellipsis', () => {
      expect(truncateText('Hello World ', 7)).toBe('Hello W...');
    });
  });

  describe('slugify', () => {
    it('converts to lowercase', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('replaces spaces with hyphens', () => {
      expect(slugify('hello world test')).toBe('hello-world-test');
    });

    it('removes special characters', () => {
      expect(slugify('Hello! @World#')).toBe('hello-world');
    });

    it('handles multiple consecutive spaces', () => {
      expect(slugify('hello    world')).toBe('hello-world');
    });

    it('removes leading and trailing hyphens', () => {
      expect(slugify('  hello world  ')).toBe('hello-world');
    });
  });
});
