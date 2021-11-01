import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    // Name of the component
    MuiFormControl: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 30,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: 0,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS

          fontWeight: 700,
          textTransform: "none",
          fontSize: "1rem",
          borderRadius: 30,
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#0D9AFB",
    },
  },
  shape: {
    borderRadius: 20,
  },
});
