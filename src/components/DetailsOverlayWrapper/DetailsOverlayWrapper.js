import React, { useState, createContext } from 'react';
import Animated, {
  useAnimatedStyle,
  Easing,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import DetailsOverlay from './DetailsOverlay';
import styles from './styles';

const DetailsOverlayContext = createContext({
  setOverlayDetails: () => {},
});

const opacityAnimationConfig = {
  duration: 500,
  easing: Easing.bezier(0.5, 0.01, 0, 1),
};

const DetailsOverlayWrapper = ({ children }) => {
  const opacity = useSharedValue(0);
  const [overlayDetails, setOverlayDetails] = useState(null);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  function handleSetOverlayDetails(detailsView) {
    setOverlayDetails(detailsView);
    opacity.value = withTiming(1, opacityAnimationConfig);
  }

  function onCloseOverlay() {
    opacity.value = withTiming(0, opacityAnimationConfig, function () {
      runOnJS(setOverlayDetails)(false);
    });
  }

  return (
    <DetailsOverlayContext.Provider
      value={{ setOverlayDetails: handleSetOverlayDetails }}>
      {children}
      {overlayDetails && (
        <Animated.View style={[styles.animatedViewStyle, animatedStyles]}>
          <DetailsOverlay onClose={onCloseOverlay}>
            {overlayDetails}
          </DetailsOverlay>
        </Animated.View>
      )}
    </DetailsOverlayContext.Provider>
  );
};

export { DetailsOverlayContext, DetailsOverlayWrapper };
