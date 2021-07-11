import { darkThemeColors, lightThemeColors } from '../assets';
import { useColorScheme } from 'react-native';
export default function () {
  const currentColorScheme = useColorScheme();

  return {
    colors: currentColorScheme === 'dark' ? darkThemeColors : lightThemeColors,
  };
}
