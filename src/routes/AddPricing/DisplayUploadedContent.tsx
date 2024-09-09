import React, { useState } from 'react';

import { PricingRecord } from '../../models';
import { Button } from '../../designSystem/button';
import { Placeholder } from '../../designSystem/placeholder';
import { ErrorMessage } from './styled';

export interface DisplayUploadedContentProps {
  data: PricingRecord[];
}

export const DisplayUploadedContent = (props: DisplayUploadedContentProps) => {
  const [saveError, setSaveError] = useState(false);
  const { data } = props;

  return <p>Please upload a valid csv file to continue</p>;
};
