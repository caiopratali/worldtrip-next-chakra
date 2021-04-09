import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      50: "#F5F8FA",
      100: "#DADADA",
      500: "#999999",
      700: "#47585B"
    },
    yellow: "#FFBA08"
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.700'
      }
    }
  }
});