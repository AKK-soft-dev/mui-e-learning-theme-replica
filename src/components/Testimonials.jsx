import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { CustomContainer } from "./utils/CustomContainer";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import StarIcon from "@mui/icons-material/Star";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import Client1 from "../assets/client-img/img1.jpg";
import Client2 from "../assets/client-img/img2.jpg";
import Client3 from "../assets/client-img/img3.jpg";

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 90,
  height: 90,
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
}));
function Testimonials() {
  return (
    <CustomContainer>
      <Box sx={{ textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            color: (theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.secondary.main
                : theme.palette.secondary.dark,
          }}
        >
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
          <StarIcon fontSize="small" />
        </Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mt: 2 }}
          data-aos="fade-up"
        >
          Rated 5 out of 5 stars by our customers!
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "text.secondary", mt: 1 }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Companies from across the globe have had fantastic experiences using
          theFront. <br /> Here’s what they have to say.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            columnGap: 2,
            mt: 2,
          }}
        >
          <Button
            variant="contained"
            endIcon={<TrendingFlatIcon />}
            sx={{ flex: "0 0 auto" }}
          >
            View all
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card
              variant="outlined"
              sx={{
                p: (theme) => theme.spacing(2, 1.8),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: 1,
              }}
              data-aos="fade-up"
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <StyledAvatar variant="rounded">
                  <TextsmsOutlinedIcon color="primary" fontSize="large" />
                </StyledAvatar>
                <Typography sx={{ color: "text.secondary", mt: 3 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </CardContent>
              <CardHeader
                sx={{ textAlign: "start" }}
                avatar={<Avatar src={Client1} alt="Clara Bertoletti" />}
                title="Clara Bertoletti"
                subheader="MUI lover"
                titleTypographyProps={{ sx: { typography: "body1" } }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              variant="outlined"
              sx={{
                p: (theme) => theme.spacing(2, 1.8),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: 1,
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <StyledAvatar variant="rounded">
                  <TextsmsOutlinedIcon color="primary" fontSize="large" />
                </StyledAvatar>
                <Typography sx={{ color: "text.secondary", mt: 3 }}>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </Typography>
              </CardContent>
              <CardHeader
                sx={{ textAlign: "start" }}
                avatar={<Avatar src={Client2} alt="Jhon Anderson" />}
                title="Jhon Anderson"
                subheader="Senior Frontend Developer"
                titleTypographyProps={{ sx: { typography: "body1" } }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              variant="outlined"
              sx={{
                p: (theme) => theme.spacing(2, 1.8),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                height: 1,
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <StyledAvatar variant="rounded">
                  <TextsmsOutlinedIcon color="primary" fontSize="large" />
                </StyledAvatar>
                <Typography sx={{ color: "text.secondary", mt: 3 }}>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </CardContent>
              <CardHeader
                sx={{ textAlign: "start" }}
                avatar={<Avatar src={Client3} alt="Chary Smith" />}
                title="Chary Smith"
                subheader="SEO at Comoti"
                titleTypographyProps={{ sx: { typography: "body1" } }}
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </CustomContainer>
  );
}

export default Testimonials;
