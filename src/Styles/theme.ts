import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '100': '#E1E1E6',
      '200': '#d3d3d3',
      '300': '#858599',
      '500': '#454545',
      '600': '#323238',
      '800': '#202024',
      '850': '#171923',
      '900': '#121214'
    },

    yellow: {
      '500': '#FFC632',
      '600': '#BF8845',
      '700': '#B78221',
      '800': '#996a11'
    }

  },

	styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.800'
      },
      a: {
        color: "yellow.600",
        _hover: {
          color: "yellow.700"
        }
      }
      
    }
  }
})