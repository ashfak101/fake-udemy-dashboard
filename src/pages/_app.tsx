import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material'
import Navbar from 'components/shared/Navbar'
import Head from 'next/head'


const theme = createTheme({
  palette: {

  }
})
function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>

    <Navbar />
    <Component {...pageProps} />

  </ThemeProvider>
}

export default MyApp
