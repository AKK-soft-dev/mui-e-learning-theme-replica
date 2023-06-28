import { Box, useTheme } from "@mui/material";

function CardDividerSvg(props) {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  return (
    <Box
      component="svg"
      {...props}
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1921 273"
    >
      <polygon
        fill={darkMode ? theme.palette.background.paper : "#ffffff"}
        points="0,273 1921,273 1921,0 "
      ></polygon>
    </Box>
  );
}

export default CardDividerSvg;
{
  /* <svg
  class="MuiBox-root css-14ayjd5"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  viewBox="0 0 1921 273"
>
  <polygon fill="#222B45" points="0,273 1921,273 1921,0 "></polygon>
</svg>; */
}
