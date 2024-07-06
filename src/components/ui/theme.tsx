import { CSSObject, createTheme } from '@mui/material/styles';

// neutral
const n900 = '#000';
const n800 = '#252525';
const n600 = '#505050';
const n400 = '#B5B5B5';
const n200 = '#dcdcdc';
const n100 = '#E9E9E9';
const n0 = '#ffffff';

// blue
const b600 = '#123e4e';
const b500 = '#0f4c63';
const b400 = '#206696';
const b300 = '#0097CF';
const b200 = '#96C3E2';
const b100 = '#CAE1F1';
const b0 = '#f3f6ff';

// green
const g800 = '#027B40';
const g600 = '#B4C846';
const g500 = '#55b3c0';
const g400 = '#7ED7E3';
const g200 = '#A9EBDF';
const g100 = '#D5F1F5';

// red
const r100 = '#F03D3F';

// yellow
const y100 = '#F3BF05';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    neutral: NeutralPaletteColor;
    blue: BluePaletteColor;
    green: GreenPaletteColor;
  }

  interface PaletteOptions {
    neutral: NeutralPaletteColor;
    blue: BluePaletteColor;
    green: GreenPaletteColor;
    accent: AccentPaletteColor;
  }

  interface NeutralPaletteColor {
    n900: string;
    n800: string;
    n600: string;
    n400: string;
    n200: string;
    n100: string;
    n0: string;
  }

  interface BluePaletteColor {
    b600: string;
    b500: string;
    b400: string;
    b300: string;
    b200: string;
    b100: string;
    b0: string;
  }

  interface GreenPaletteColor {
    g800: string;
    g600: string;
    g500: string;
    g400: string;
    g200: string;
    g100: string;
  }

  interface AccentPaletteColor {
    g600: string;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    alternitive: true;
    secondary: true;
  }
}

export const commonBtnStyles: CSSObject = {
  border: 'none',
  borderRadius: 30,
  height: 40,
  minWidth: 140,
  fontWeight: 600,
  fontSize: '0.813rem',
  lineHeight: 1.75,
  textDecoration: 'none',
  textTransform: 'none',
  cursor: 'pointer',
  paddingRight: 28,
  paddingLeft: 28,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: b200,
      dark: b300,
    },
    secondary: {
      main: g200,
    },
    success: {
      main: g800,
    },
    error: {
      main: r100,
    },
    warning: {
      main: y100,
    },
    accent: {
      g600,
    },
    neutral: {
      n900,
      n800,
      n600,
      n400,
      n200,
      n100,
      n0,
    },
    blue: {
      b600,
      b500,
      b400,
      b300,
      b200,
      b100,
      b0,
    },
    green: {
      g800,
      g600,
      g500,
      g400,
      g200,
      g100,
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontSize: '2rem',
      lineHeight: '2.5rem',
      fontWeight: 800,
    },
    h2: {
      fontSize: '1.75rem',
      lineHeight: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: 500,
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: '1.25rem',
      fontWeight: 300,
    },
    body2: {
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: 400,
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            ...commonBtnStyles,
            color: n0,
            backgroundColor: b300,
            '&:hover': {
              backgroundColor: b400,
            },
            '&:active': {
              backgroundColor: b500,
            },
            '&:disabled': {
              backgroundColor: b200,
              color: b100,
            },
          },
        },
        {
          props: { variant: 'alternitive' },
          style: {
            ...commonBtnStyles,
            color: b300,
            backgroundColor: g200,
            '&:hover': {
              backgroundColor: g400,
            },
            '&:active': {
              backgroundColor: g500,
            },
            '&:disabled': {
              backgroundColor: g100,
              color: b200,
            },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            ...commonBtnStyles,
            color: n600,
            backgroundColor: 'transparent',
            border: `1px solid ${n400}`,
            '&:hover': {
              backgroundColor: 'transparent',
              border: `1px solid ${n800}`,
            },
            '&:disabled': {
              color: n200,
              border: `1px solid ${n100}`,
            },
          },
        },
      ],
    },
  },
});
