import { ProjectProvider } from '@/context/project'
import '@/styles/globals.css'
import { darkTheme, lightTheme } from '@/themes'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  
  return ( 
    <ProjectProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </ProjectProvider>

  )
}
