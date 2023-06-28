import {
  Box,
  Card,
  CardContent,
  Button,
  FormControl,
  FormGroup,
  Typography,
  OutlinedInput,
} from "@mui/material";
import { CustomContainer } from "./utils/CustomContainer";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

function Subscription() {
  return (
    <CustomContainer
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        bgcolor: "transparent",
      }}
    >
      <Card
        sx={{
          transform: {
            xs: "translateY(-40%)",
            sm: "translateY(-50%)",
            md: "translateY(-60%)",
          },
          py: (theme) => theme.spacing(3),
          width: 1,
          boxShadow: 15,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700 }}
            data-aos="fade-up"
            data-aos-offset="-100"
          >
            Subscribe to our newsletter
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "text.secondary", mt: 1 }}
            data-aos="fade-up"
            data-aos-offset="-100"
          >
            Don't lose a chance to be among the firsts to know about our
            upcoming news and updates.
          </Typography>
          <Box mt={3}>
            <FormControl
              component="form"
              sx={{ width: 1, maxWidth: { xs: 1, md: "80%" } }}
            >
              <FormGroup row sx={{ gap: 2, justifyContent: "center" }}>
                <OutlinedInput
                  color="primary"
                  type="email"
                  placeholder="Enter your email"
                  sx={{
                    flex: { xs: "0 0 100%", sm: "1 1 0", md: "1 1 auto" },
                    maxWidth: { xs: 1, sm: 400 },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<NotificationsOutlinedIcon sx={{ fontSize: 22 }} />}
                  sx={{ flex: { xs: "0 0 100%", sm: "1 1 0", md: "0 0 auto" } }}
                >
                  Subscribe
                </Button>
              </FormGroup>
            </FormControl>
          </Box>
        </CardContent>
      </Card>
    </CustomContainer>
  );
}

export default Subscription;
