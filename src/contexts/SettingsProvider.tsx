import {
  Dispatch,
  createContext,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

import { PageView } from '../types';

type SettingsConextState = {
  view: PageView | null;
  sidebarOpen: boolean;
};

type SettingsContextType = {
  state: SettingsConextState;
  setSettingsState: Dispatch<SetStateAction<SettingsConextState>>;
  changeView: (view: PageView) => void;
  closeSidebar: () => void;
  openSidebar: () => void;
};

export const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettingsState] = useState<SettingsConextState>({
    sidebarOpen: false,
    view: null,
  });

  const closeSidebar = () =>
    setSettingsState(p => ({ ...p, sidebarOpen: false }));

  const openSidebar = () =>
    setSettingsState(p => ({ ...p, sidebarOpen: true }));

  const changeView = (view: PageView) =>
    setSettingsState(p => ({ ...p, view }));

  return (
    <SettingsContext.Provider
      value={{
        state: settings,
        setSettingsState,
        changeView,
        closeSidebar,
        openSidebar,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
