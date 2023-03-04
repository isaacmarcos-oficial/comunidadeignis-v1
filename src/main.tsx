import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { HelmetProvider } from 'react-helmet-async';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './Styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
