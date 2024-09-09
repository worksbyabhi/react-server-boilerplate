import React, { useEffect, useState } from 'react';

import { GridColumn, GridContainer } from '../../designSystem/grid';
import { Placeholder } from '../../designSystem/placeholder';

import { PricingRecord } from '../../models';

export const UserDashboard = () => {
  const [storeContent, setStoreContent] = useState<PricingRecord[]>([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    // fetch('/api/v1/pricing', {
    //   credentials: 'include',
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Invalid session');
    //     } else {
    //       return response.json();
    //     }
    //   })
    //   .then((data) => {
    //     setStoreContent(data);
    //     setFetchError(false);
    //   })
    //   .catch(() => {
    //     setFetchError(true);
    //   });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GridContainer>
      <GridColumn>
        <Placeholder height="1rem" />
        <h1>Dashboard</h1>
        <Placeholder height="2rem" />
      </GridColumn>
    </GridContainer>
  );
};
