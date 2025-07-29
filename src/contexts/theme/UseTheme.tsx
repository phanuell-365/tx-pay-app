import { use } from 'react';
import ThemeContext from '@/contexts/theme/ThemeContext.tsx';

export const useTheme = () => {
  const context = use(ThemeContext);
  // Ensure that the context is not null
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};