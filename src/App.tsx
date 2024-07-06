import { useMemo } from 'react';
import { CSSObject, Stack } from '@mui/material';

import { useSettings } from './hooks';
import { Home, Sidebar } from './components';
import { PageView } from './types';

const styles: Record<string, CSSObject> = {
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const App = () => {
  const {
    state: { view },
  } = useSettings();

  const page = useMemo(() => {
    switch (view) {
      case PageView.HOME:
      default:
        return <Home />;
    }
  }, [view]);

  return (
    <main>
      <Stack sx={styles.root}>
        {page}
        <Sidebar />
      </Stack>
    </main>
  );
};

export default App;
