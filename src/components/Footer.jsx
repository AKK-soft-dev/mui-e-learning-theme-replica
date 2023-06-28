import { Box, Button, Link, Typography, useTheme } from "@mui/material";
import { CustomContainer } from "./utils/CustomContainer";
import BrandDarkModeLogo from "../assets/logo-negative.svg";
import BrandLightModeLogo from "../assets/logo.svg";

function Footer() {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper" }}>
      <CustomContainer sx={{ py: (theme) => `${theme.spacing(4)} !important` }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "80px", md: "90px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={darkMode ? BrandDarkModeLogo : BrandLightModeLogo}
              alt="Brand Logo"
              sx={{
                width: 1,
                height: 1,
              }}
            />
          </Box>
          <Box
            sx={{
              mt: { xs: 1, sm: 0 },
              "& > *:not(:last-child)": {
                marginRight: (theme) => theme.spacing(2.4),
              },
            }}
          >
            <Link
              typography="subtitle2"
              href="#"
              underline="none"
              sx={{ color: "text.primary" }}
            >
              Home
            </Link>
            <Link
              href="#"
              typography="subtitle2"
              underline="none"
              sx={{ color: "text.primary" }}
            >
              Documentation
            </Link>
            <Button
              variant="outlined"
              size="small"
              sx={{ p: (theme) => theme.spacing(1.5, 1.2) }}
            >
              Purchase Now
            </Button>
          </Box>
        </Box>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
            &copy; theFront. 2021, Maccarian. All rights reserved
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "text.secondary",
              lineHeight: 1.5,
              mt: 1,
              display: "inline-block",
            }}
          >
            When you visit or interact with our sites, services or tools, we or
            our authorised service providers may use cookies for storing
            information to help provide you with a better, faster and safer
            experience and for marketing purposes.
          </Typography>
        </Box>
      </CustomContainer>
    </Box>
  );
}

export default Footer;
