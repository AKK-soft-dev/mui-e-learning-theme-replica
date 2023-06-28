import Box from "@mui/material/Box/Box";
import styled from "@mui/material/styles/styled";

export const CustomContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  margin: "auto",
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  maxWidth: "100%",
  [theme.breakpoints.up("sm")]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    maxWidth: 700,
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    maxWidth: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: 1350,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: 1400,
  },
}));
