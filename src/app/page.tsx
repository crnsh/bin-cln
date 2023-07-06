'use client'

import { ThemeProvider, createTheme, TypeText, PaletteColor, PaletteColorOptions, PaletteOptions } from "@mui/material/styles";

import Mobile from "@/components/views/Mobile";
import Desktop from "@/components/views/Desktop";
import Tablet from "@/components/views/Tablet";

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
  <>
    <Mobile/>
    <Tablet/>
    <Desktop/>
  </>
  );
}
