import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card as MuiCard,
  CardActions,
  CardContent,
  CardMedia as MuiCardMedia,
  Typography,
  styled,
  useTheme,
  Chip,
} from "@mui/material";
import { CustomContainer } from "./utils/CustomContainer";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import Star from "@mui/icons-material/Star";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CardDividerSvg from "./utils/CardDividerSvg";
import { courses } from "../data";

const CardContainer = styled(Box)``;
const Card = styled(MuiCard)({ backgroundImage: "none" });

const Slide = styled((props) => (
  <Box sx={{ px: { xs: 1.4, md: 2, lg: 3 }, mt: 1 }} {...props} />
))(({ theme }) => ({
  transition: theme.transitions.create("all"),
  "&:hover": {
    transform: "translateY(-5px)",
  },
}));

const CardMedia = styled(MuiCardMedia)(({ theme }) => ({
  height: "240px",
  [theme.breakpoints.up("sm")]: {
    height: "340px",
  },
  [theme.breakpoints.up("md")]: {
    height: "280px",
  },
  [theme.breakpoints.up("lg")]: {
    height: "300px",
  },
}));

const StarIcon = styled(Star)(({ theme }) => ({
  color: theme.palette.secondary.dark,
}));

const LearnMoreBtn = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5, 1.2),
}));

function PopularCourses() {
  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
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
          POPULAR COURSES
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mt: 1 }}
          data-aos="fade-up"
        >
          Browse our popular courses
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "text.secondary", mt: 1 }}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          Here are our popular course you might want to learn from your tutor.
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
            sx={{ flex: { xs: 1, md: "0 0 auto" } }}
          >
            View all
          </Button>
          <Button variant="outlined" sx={{ flex: { xs: 1, md: "0 0 auto" } }}>
            Explore more
          </Button>
        </Box>
        <Box sx={{ mt: 7, mb: 4, textAlign: "start" }}>
          <Box component={Slider} {...settings}>
            {courses.map(
              ({
                id,
                courseImgSrc,
                courseTitle,
                instructor,
                rating,
                subscriptionPlan,
                students,
              }) => (
                <Slide key={id}>
                  <CardContainer>
                    <Card>
                      <CardMedia
                        image={courseImgSrc}
                        title={courseTitle}
                        sx={{ position: "relative" }}
                      >
                        <CardDividerSvg
                          sx={{
                            width: 1,
                            position: "absolute",
                            left: 0,
                            right: 0,
                            bottom: -1,
                            zIndex: 1,
                          }}
                        />
                        <CardContent
                          sx={{
                            position: "absolute",
                            width: 1,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 2,
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Box
                            sx={{
                              p: (theme) => theme.spacing(1.5, 0.8),
                              bgcolor: "background.paper",
                              borderRadius: 1,
                              boxShadow: 5,
                            }}
                          >
                            <Typography>{subscriptionPlan} / Month</Typography>
                          </Box>
                          <Button
                            variant="contained"
                            startIcon={<FavoriteBorderOutlinedIcon />}
                          >
                            Save
                          </Button>
                        </CardContent>
                      </CardMedia>
                      <CardContent>
                        <Typography variant="h6">{courseTitle}</Typography>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mt: 2 }}
                        >
                          <SchoolOutlinedIcon />
                          <Typography
                            variant="body1"
                            sx={{ ml: 1, color: "text.secondary" }}
                          >
                            {instructor}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 1.5,
                          }}
                        >
                          <AvatarGroup total={5}>
                            {students.map((student, index) => (
                              <Avatar
                                key={index}
                                src={student.studentImgSrc}
                                alt={student.studentName}
                              />
                            ))}
                          </AvatarGroup>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Chip
                              sx={{
                                bgcolor: "transparent",
                                "& .MuiChip-label": { pl: 0.7 },
                              }}
                              icon={
                                <StarIcon fontSize="small" color="secondary" />
                              }
                              label={
                                <Typography
                                  sx={{ mt: 0.5, ml: 1 }}
                                  variant="body1"
                                >
                                  {rating}
                                </Typography>
                              }
                            />
                          </Box>
                        </Box>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "flex-end" }}>
                        <LearnMoreBtn>Learn more</LearnMoreBtn>
                      </CardActions>
                    </Card>
                  </CardContainer>
                </Slide>
              )
            )}
          </Box>
        </Box>
      </Box>
    </CustomContainer>
  );
}

export default PopularCourses;
