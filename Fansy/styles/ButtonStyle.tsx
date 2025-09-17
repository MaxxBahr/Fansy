import { useColorScheme } from 'react-native';

const ButtonStyle = {
  AppButtonContainer: {
    backgroundColor: '#8b00a0ff',
    borderRadius: 100,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AppButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
};

export const Colors = {
  light: {
    background: '#ffffff',
    text: '#000000',
    card: '#f8f9fa',
    border: '#e9ecef',
    placeholder: '#666666',
  },
  dark: {
    background: '#121212',
    text: '#ffffff',
    card: '#1e1e1e',
    border: '#333333',
    placeholder: '#888888',
  }
};

export const useTheme = () => {
  const colorScheme = useColorScheme();
  return Colors[colorScheme ?? 'dark'];
};

export default ButtonStyle;