import React from 'react';

import { StyledLinkAnchor } from './styled';
import { LinkAnchorProps } from './types';

import { LinkArrow } from '../../assets/images';

export const LinkAnchor = (props: LinkAnchorProps) => {
  const { children, ...rest } = props;
  return (
    <StyledLinkAnchor {...rest}>
      {children}
      <LinkArrow />
    </StyledLinkAnchor>
  );
};
