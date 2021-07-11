import React, { useState, createContext } from 'react';
import DetailsOverlay from '../DetailsOverlay';

export const DetailsOverlayContext = createContext({
  overlayDetails: null,
  setOverlayDetails: () => {},
});

const DetailsOverlayWrapper = ({ children }) => {
  const [overlayDetails, setOverlayDetails] = useState(null);

  return (
    <DetailsOverlayContext.Provider
      value={{ overlayDetails, setOverlayDetails }}>
      {children}
      {overlayDetails && (
        <DetailsOverlay
          onClose={() => {
            setOverlayDetails(false);
          }}>
          {overlayDetails}
        </DetailsOverlay>
      )}
    </DetailsOverlayContext.Provider>
  );
};

export default DetailsOverlayWrapper;
