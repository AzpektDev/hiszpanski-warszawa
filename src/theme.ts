import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  //TODO: update background color (visible on scroll)
  colors: {
    brand: {
      bgMain1: '#202020',
      bgMain2: '#282828',
      bgMain3: '#303030',
      bgMain4: '#383838',

      textMain1: '#ffffff',
      textMain2: '#777777',
      textAccent: '#128300',

      buttonMain1: '#2c7c12',
      buttonHover1: '#13560d',
      buttonSelected: '#0f410a',
      buttonDisabled: '#0f410a',
    },
  },
  fonts: {
    body: `'DMSans', 'Open Sans', sans-serif`
  }
});

export default theme;
