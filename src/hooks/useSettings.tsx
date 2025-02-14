import { useContext } from 'react';

import { SettingsContext } from '../contexts';

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within the SettingsProvider');
  }
  return context;
};
