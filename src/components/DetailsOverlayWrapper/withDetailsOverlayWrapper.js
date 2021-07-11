import React from 'react';
import { DetailsOverlayWrapper } from './DetailsOverlayWrapper';
const withDetailsOverlayWrapper = WrappedComponent => props =>
  (
    <DetailsOverlayWrapper>
      <WrappedComponent {...props} />
    </DetailsOverlayWrapper>
  );

export default withDetailsOverlayWrapper;
