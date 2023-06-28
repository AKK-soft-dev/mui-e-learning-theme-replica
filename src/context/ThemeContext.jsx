import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import { createContext, useCallback, useMemo, useState } from "react";

const getDesignTokens = (mode) => {
  const darkMode = mode === "dark";
  return {
    palette: {
      mode,
      primary: {
        main: "rgb(55, 125, 255)",
        dark: "rgb(47, 106, 217)",
      },
      secondary: {
        main: "rgb(255, 225, 2)",
        dark: "rgb(249, 185, 52)",
      },
      background: {
        paper: darkMode ? "#222b45" : "#ffffff",
        default: darkMode ? "#1a2138" : "#f7faff",
      },
      text: {
        primary: darkMode ? "rgb(238, 238, 239)" : "rgb(30, 32, 34)",
        secondary: darkMode ? "rgb(174, 176, 180)" : "rgb(30, 32, 34, 0.56)",
      },
    },
    typography: {
      fontSize: 15.2,
      fontFamily: ["Inter", "sans-serif"].join(", "),
      body1: {
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 6,
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            padding: "10px 22px",
            textTransform: "none",
          },
        },
      },
    },
  };
};

export const ToggleTheme = createContext({ toggleTheme: () => {} });

function ThemeContextProvider({ children }) {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") || "dark";
  });
  const theme = useMemo(
    () => responsiveFontSizes(createTheme(getDesignTokens(mode))),
    [mode]
  );

  const toggleTheme = useCallback(() => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <ToggleTheme.Provider value={{ toggleTheme, mode }}>
        {children}
      </ToggleTheme.Provider>
    </ThemeProvider>
  );
}

export default ThemeContextProvider;
