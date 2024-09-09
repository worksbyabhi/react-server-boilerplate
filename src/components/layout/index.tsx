import React, { ReactNode } from 'react';

import { Header } from './Header';
import { GridContainer } from '../../designSystem/grid';

export const LayoutComponent = (props: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <GridContainer $isRootParent>{props.children}</GridContainer>
    </>
  );
};
