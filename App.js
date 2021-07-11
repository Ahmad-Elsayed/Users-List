import React from 'react';
import Home from './src/screens/Home';
import './ReactotronConfig';
import './src/services/axiosInstance';
import DetailsOverlayWrapper from './src/components/DetailsOverlayWrapper';

export default () => {
  return (
    <DetailsOverlayWrapper>
      <Home />
    </DetailsOverlayWrapper>
  );
};
