import {
  Avatar,
  Box,
  Card as MuiCard,
  CardActions,
  CardContent,
  Grid,
  Typography,
  alpha,
  Button,
  styled,
  Divider,
} from "@mui/material";
import { CustomContainer } from "./utils/CustomContainer";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";

const Card = styled(MuiCard)(({ theme }) => ({
  transition: theme.transitions.create("all"),
  "&:hover": {
    transform: "translateY(-6px)",
  },
}));

const StyledAvatar = styled((props) => <Avatar variant="rounded" {...props} />)(
  { width: 65, height: 65 }
);

function Categories() {
  return (
    <CustomContainer>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            color: (theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.secondary.main
                : theme.palette.secondary.dark,
          }}
        >
          CATEGORIES
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mt: 1 }}
          data-aos="fade-up"
        >
          Choose your course by categories
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "text.secondary", mt: 1 }}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          The best way to learn is by using skills. <br />
          Browse the available course categories, choose your favourite one and
          start learning.
        </Typography>
      </Box>

      <Box>
        <Grid container spacing={4} mt={1}>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{ p: (theme) => theme.spacing(2, 1.8), height: 1 }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <CardContent sx={{ textAlign: "start" }}>
                <StyledAvatar
                  sx={{
                    backgroundColor: (theme) =>
                      alpha(theme.palette.info.main, 0.1),
                  }}
                >
                  <PaletteOutlinedIcon color="info" />
                </StyledAvatar>
                <Typography sx={{ mt: 2 }} variant="h6">
                  Web design
                </Typography>
                <Typography sx={{ color: "text.secondary", mt: 1 }}>
                  Choose thousands of Web design online course.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button endIcon={<TrendingFlatIcon />}>Learn more</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{ p: (theme) => theme.spacing(2, 1.8), height: 1 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardContent sx={{ textAlign: "start" }}>
                <StyledAvatar
                  sx={{
                    backgroundColor: alpha("#9c27b0", 0.1),
                  }}
                >
                  <ImportContactsOutlinedIcon sx={{ color: "#9c27b0" }} />
                </StyledAvatar>
                <Typography sx={{ mt: 2 }} variant="h6">
                  Business analytics
                </Typography>
                <Typography sx={{ color: "text.secondary", mt: 1 }}>
                  Choose thousands of Business analytics online course.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button endIcon={<TrendingFlatIcon />}>Learn more</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{ p: (theme) => theme.spacing(2, 1.8), height: 1 }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <CardContent sx={{ textAlign: "start" }}>
                <StyledAvatar
                  sx={{
                    backgroundColor: (theme) =>
                      alpha(theme.palette.secondary.main, 0.1),
                  }}
                >
                  <CameraAltOutlinedIcon color="secondary" />
                </StyledAvatar>
                <Typography sx={{ mt: 2 }} variant="h6">
                  Photography
                </Typography>
                <Typography sx={{ color: "text.secondary", mt: 1 }}>
                  Choose thousands of photography online course.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button endIcon={<TrendingFlatIcon />}>Learn more</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{ p: (theme) => theme.spacing(2, 1.8), height: 1 }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <CardContent sx={{ textAlign: "start" }}>
                <StyledAvatar
                  sx={{
                    backgroundColor: (theme) =>
                      alpha(theme.palette.primary.main, 0.1),
                  }}
                >
                  <VideocamOutlinedIcon color="primary" />
                </StyledAvatar>
                <Typography sx={{ mt: 2 }} variant="h6">
                  Video creating
                </Typography>
                <Typography sx={{ color: "text.secondary", mt: 1 }}>
                  Choose thousands of Video creating online course.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button endIcon={<TrendingFlatIcon />}>Learn more</Button>
              </CardActions>
            </Card>
          </Grid>
          {/** Second row */}
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{ p: (theme) => theme.spacing(2, 1.8), height: 1 }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <CardContent sx={{ textAlign: "start" }}>
                <StyledAvatar
                  sx={{
                    backgroundColor: (theme) =>
                      alpha(theme.palette.error.main, 0.1),
                  }}
                >
                  <FavoriteBorderOutlinedIcon color="error" />
                </StyledAvatar>
                <Typography sx={{ mt: 2 }} variant="h6">
                  Health & fitness
                </Typography>
                <Typography sx={{ color: "text.secondary", mt: 1 }}>
                  Choose thousands of Health & fitness online course.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button endIcon={<TrendingFlatIcon />}>Learn more</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{ p: (theme) => theme.spacing(2, 1.8), height: 1 }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <CardContent sx={{ textAlign: "start" }}>
                <StyledAvatar
                  sx={{
                    backgroundColor: (theme) =>
                      alpha(theme.palette.success.main, 0.1),
                  }}
                >
                  <DonutSmallOutlinedIcon color="success" />
                </StyledAvatar>
                <Typography sx={{ mt: 2 }} variant="h6">
                  Marketing
                </Typography>
                <Typography sx={{ color: "text.secondary", mt: 1 }}>
                  Choose thousands of marketing online course.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button endIcon={<TrendingFlatIcon />}>Learn more</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{ p: (theme) => theme.spacing(2, 1.8), height: 1 }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <CardContent sx={{ textAlign: "start" }}>
                <StyledAvatar
                  sx={{
                    backgroundColor: (theme) =>
                      alpha(theme.palette.warning.main, 0.1),
                  }}
                >
                  <MonetizationOnOutlinedIcon color="warning" />
                </StyledAvatar>
                <Typography sx={{ mt: 2 }} variant="h6">
                  Finances & sales
                </Typography>
                <Typography sx={{ color: "text.secondary", mt: 1 }}>
                  Choose thousands of finances & sales online course.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button endIcon={<TrendingFlatIcon />}>Learn more</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{ p: (theme) => theme.spacing(2, 1.8), height: 1 }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <CardContent sx={{ textAlign: "start" }}>
                <StyledAvatar
                  sx={{
                    backgroundColor: alpha("rgb(103, 58, 183)", 0.1),
                  }}
                >
                  <DesignServicesOutlinedIcon
                    sx={{ color: "rgb(103, 58, 183)" }}
                  />
                </StyledAvatar>
                <Typography sx={{ mt: 2 }} variant="h6">
                  Graphic design
                </Typography>
                <Typography sx={{ color: "text.secondary", mt: 1 }}>
                  Choose thousands of Graphic design online course.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button endIcon={<TrendingFlatIcon />}>Learn more</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ position: "absolute", bottom: 0, left: 0, width: 1 }} />
    </CustomContainer>
  );
}

export default Categories;
