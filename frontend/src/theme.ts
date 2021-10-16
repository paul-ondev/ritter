// @ts-nocheck
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontWeight: 700,
          textTransform: "none",
          fontSize: "1rem",
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
    borderRadius: 30,
  },
});
