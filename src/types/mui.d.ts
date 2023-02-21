import {
    Palette as MuiPallete,
    PaletteOptions as MuiPaletteOptions,
} from '@mui/material/styles/createPalette';
  
declare module '@mui/material/styles' {
    interface Palette extends MuiPallete {
        otherColor: {
            main: string
        }
    }
    
    interface PaletteOptions extends MuiPaletteOptions {
        otherColor?: {
            main: string
        }
    }
}