import "aos/dist/aos.css";
import AOS from "aos";
import { useContext, useEffect, useRef } from "react";
import { ToggleTheme } from "../../context/ThemeContext";
import { Box } from "@mui/material";

function ReanimationWrapper({ children }) {
  const { mode } = useContext(ToggleTheme);
  const wrapperRef = useRef(null);
  useEffect(() => {
    AOS.refresh();
  }, [mode]);
  return <Box ref={wrapperRef}>{children}</Box>;
}

export default ReanimationWrapper;
