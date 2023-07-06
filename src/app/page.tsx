'use client'

import * as React from 'react';
import { PaletteMode, CssBaseline, ThemeProvider, createTheme, 
  TypeText, PaletteColor, PaletteColorOptions, PaletteOptions 
} from "@mui/material";

import { ColorModeContext, useMode } from './theme';

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

export default function Home() {

  const {theme, colorMode} = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <main>
            <Mobile/>
            <Tablet/>
            <Desktop/>
          </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
