import { useContext } from 'react';
import { DetailsOverlayContext } from '.';

export default function () {
  const { setOverlayDetails } = useContext(DetailsOverlayContext);

  return {
    setOverlayDetails,
  };
}
