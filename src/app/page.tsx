'use client'

import { ThemeProvider, createTheme, TypeText, PaletteColor, PaletteColorOptions, PaletteOptions } from "@mui/material/styles";

import FooterButton from "@/components/FooterButton";

declare module '@mui/material/styles' {
  interface TypeText {
    tertiary?: string;
  }

  interface PaletteOptions {
    logo?: PaletteColorOptions
  }

  interface Palette {
    logo?: PaletteColor
  }
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    logo: {
      main: '#F0B90B',
    },
    primary: {
      main: 'rgb(22, 26, 30)',
    },
    secondary: {
      main: 'rgb(252, 213, 53)',
    },
    background: {
      default: 'rgb(22, 26, 30)',
      paper: 'rgb(30, 32, 38)',
    },
    text: {
      primary: '#EAECEF',
      secondary: 'rgb(183, 189, 198)',
      disabled: 'rgba(249,246,246,0.38)',
      tertiary: '#848E9C',
    },
    error: {
      main: 'rgb(246, 70, 93)',
    },
    success: {
      main: 'rgb(14, 203, 129)',
    },
    divider: '#3a3b3f',
  },
  typography: {
    fontFamily: [
      'IBM Plex Sans', 
      'Open Sans'
    ].join(','),
  },
})

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <FooterButton 
        displayText='Announcements'
        onClickFn={() => (null)}
        onHoverFn={() => (null)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="t.secondary" className='w-3 h-3'><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z" fill="currentColor"></path></svg>
      </FooterButton>
    </ThemeProvider>
  );
}
