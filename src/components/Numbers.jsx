import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { CustomContainer } from "./utils/CustomContainer";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

function Numbers() {
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
          NUMBERS
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontWeight: 700, mt: 1 }}
          data-aos="fade-up"
        >
          Our global class is open for all
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "text.secondary", mt: 1 }}
          data-aos="fade-up"
          data-aos-delay="50"
        >
          The best way to learn is by using skills. <br />
          That's why every class has a project that lets you practice and get
          feedback.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            columnGap: 2,
            mt: 2,
          }}
        >
          <Button variant="contained" sx={{ flex: { xs: 1, md: "0 0 auto" } }}>
            Book a tutor
          </Button>
          <Button variant="outlined" sx={{ flex: { xs: 1, md: "0 0 auto" } }}>
            Explore more
          </Button>
        </Box>

        <Box>
          <Grid container spacing={4} mt={1}>
            <Grid item xs={12} sm={6} md>
              <Card
                variant="outlined"
                sx={{ p: (theme) => theme.spacing(2, 1.8), height: 1 }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <CardContent sx={{ textAlign: "start" }}>
                  <Avatar
                    sx={{ bgcolor: "primary.main", width: 60, height: 60 }}
                  >
                    <AccountBalanceOutlinedIcon />
                  </Avatar>
                  <Typography color="primary" variant="h4" sx={{ mt: 2 }}>
                    1000+
                  </Typography>
                  <Typography sx={{ mt: 2 }} variant="h6">
                    Online Courses
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mt: 1 }}>
                    Choose from over 1000+ online video courses.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md>
              <Card
                variant="outlined"
                sx={{ p: (theme) => theme.spacing(2, 1.8), height: 1 }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <CardContent sx={{ textAlign: "start" }}>
                  <Avatar
                    sx={{ bgcolor: "primary.main", width: 60, height: 60 }}
                  >
                    <GroupsOutlinedIcon />
                  </Avatar>
                  <Typography color="primary" variant="h4" sx={{ mt: 2 }}>
                    800+
                  </Typography>
                  <Typography sx={{ mt: 2 }} variant="h6">
                    Expert instructors
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mt: 1 }}>
                    Expert instructors to make sure courses are well.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md>
              <Card
                variant="outlined"
                sx={{ p: (theme) => theme.spacing(2, 1.8), height: 1 }}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <CardContent sx={{ textAlign: "start" }}>
                  <Avatar
                    sx={{ bgcolor: "primary.main", width: 60, height: 60 }}
                  >
                    <SchoolOutlinedIcon />
                  </Avatar>
                  <Typography color="primary" variant="h4" sx={{ mt: 2 }}>
                    100K+
                  </Typography>
                  <Typography sx={{ mt: 2 }} variant="h6">
                    Active students
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mt: 1 }}>
                    100K+ Active students arround the world.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md>
              <Card
                variant="outlined"
                sx={{ p: (theme) => theme.spacing(2, 1.8), height: 1 }}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <CardContent sx={{ textAlign: "start" }}>
                  <Avatar
                    sx={{ bgcolor: "primary.main", width: 60, height: 60 }}
                  >
                    <MenuBookOutlinedIcon />
                  </Avatar>
                  <Typography color="primary" variant="h4" sx={{ mt: 2 }}>
                    400+
                  </Typography>
                  <Typography sx={{ mt: 2 }} variant="h6">
                    Free resources
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mt: 1 }}>
                    Free resources for all students around the world.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </CustomContainer>
  );
}

export default Numbers;
