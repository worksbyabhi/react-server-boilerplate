import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ReactNode } from 'react';

import GlobalStyle from './GlobalStyle';

import { theme } from './defaultTheme';

export function ThemeWrapper(props: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  );
}
