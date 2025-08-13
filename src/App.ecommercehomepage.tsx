import React from 'react';
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import EcommerceHomepage from './components/EcommerceHomepage';
import theme from './theme';
import { mockRootProps } from './ecommerceMockData';

const createEmotionCache = () => {
  return createCache({
    key: "mui",
    prepend: true, // Theme styles will be inserted at lower precedence than other styles
  });
};

const emotionCache = createEmotionCache();

const App: React.FC = () => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <EcommerceHomepage {...mockRootProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;