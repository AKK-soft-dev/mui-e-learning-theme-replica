import {
  FormControl,
  Grid,
  TextField,
  Typography,
  Button,
  alpha,
  Box,
  styled,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { CustomContainer } from "./utils/CustomContainer";
import AirbnbLogo from "../assets/company-logo/airbnb-original.svg";
import AmazonLogo from "../assets/company-logo/amazon-original.svg";
import FitbitLogo from "../assets/company-logo/fitbit-original.svg";
import GoogleLogo from "../assets/company-logo/google-original.svg";
import NetflixLogo from "../assets/company-logo/netflix-original.svg";
import PaypalLogo from "../assets/company-logo/paypal-original.svg";
import HeroImg from "../assets/img2.jpg";

const HeroContainer = styled(CustomContainer)(({ theme }) => ({
  display: "flex",
  flexDirection: "column-reverse",
  paddingTop: "0 !important",
  paddingBottom: "0 !important",
  paddingLeft: "0 !important",
  paddingRight: "0 !important",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "100%",
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    paddingLeft: `${theme.spacing(2)} !important`,
    paddingRight: `${theme.spacing(2)} !important`,
  },

  [theme.breakpoints.up("lg")]: {
    maxWidth: "1350px !important",
  },
  [theme.breakpoints.up("xl")]: {
    maxWidth: "1400px !important",
  },
}));

function Hero() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <HeroContainer>
      <Box sx={{ flex: 1 }}>
        <CustomContainer
          data-aos={md ? "fade-right" : "fade-up"}
          sx={{
            px: { md: "0 !important" },
            maxWidth: { sm: "700px" },
            height: 1,
          }}
        >
          <Box>
            <Typography
              color="primary"
              variant="h3"
              sx={{
                display: "inline",
                fontWeight: 700,
                backgroundImage: (theme) =>
                  `linear-gradient(transparent 83%, ${alpha(
                    theme.palette.secondary.dark,
                    0.5
                  )} 10%)`,
              }}
            >
              Learn new skills,
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              gain more experience
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", typography: "h6", mt: 3 }}
            >
              Our mission is to spread education that is easy accessible and
              everyone can learn.
            </Typography>
          </Box>

          <FormControl component="form" sx={{ width: 1, mt: 3 }}>
            <Typography variant="body1" mb={1.5}>
              Join over 5000 subscribers for our newsletter
            </Typography>
            <Grid container columnGap={2}>
              <Grid item xs={12} sm>
                <TextField
                  label="Enter your email"
                  type="email"
                  sx={{ backgroundColor: "rgba(255, 255, 255, 0.044)" }}
                  fullWidth
                  id="email"
                />
              </Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  flex: { xs: "0 0 100%", sm: "0 0 auto" },
                  mt: { xs: 2, sm: 0 },
                }}
              >
                Subscribe
              </Button>
            </Grid>
          </FormControl>

          <Box mt={7}>
            <Typography variant="body1">
              TRUSTED BY INDUSTRY LEADING COMPANIES
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                "& > img": {
                  width: "90px",
                  filter: (theme) =>
                    theme.palette.mode === "dark"
                      ? "brightness(0) invert(0.7)"
                      : "none",
                },
                columnGap: 4,
                rowGap: 2,
                flexWrap: "wrap",
              }}
            >
              <Box component="img" src={AirbnbLogo} alt="Airbnb" />
              <Box component="img" src={AmazonLogo} alt="Amazon" />
              <Box component="img" src={FitbitLogo} alt="Fitbit" />
              <Box component="img" src={NetflixLogo} alt="Netflix" />
              <Box component="img" src={GoogleLogo} alt="Google" />
              <Box component="img" src={PaypalLogo} alt="Paypal" />
            </Box>
          </Box>
        </CustomContainer>
      </Box>
      <Box
        sx={{
          width: { xs: "100vw", md: "50%" },
          flex: "1",
          order: { xs: 1, md: 0 },
        }}
      >
        <Box
          sx={{
            width: { xs: "100vw", md: "50vw" },
            position: "relative",
            height: { xs: 300, md: 1 },
            maxHeight: 1,
            overflow: "hidden",
            clipPath: {
              xs: "none",
              md: "polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 1,
              height: 1,
            }}
          >
            <Box
              component="img"
              sx={{
                width: 1,
                height: 1,
                objectFit: "cover",
              }}
              src={HeroImg}
              alt="Hero image"
            />
          </Box>
        </Box>
      </Box>
    </HeroContainer>
  );
}

export default Hero;
