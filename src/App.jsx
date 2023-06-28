import "aos/dist/aos.css";
import { CssBaseline, Box, Divider } from "@mui/material";
import ThemeContextProvider from "./context/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Numbers from "./components/Numbers";
import Categories from "./components/Categories";
import PopularCourses from "./components/PopularCourses";
import DividerSvg from "./components/utils/DividerSvg";
import Testimonials from "./components/Testimonials";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import AOS from "aos";
import { useEffect } from "react";
import ReanimationWrapper from "./components/utils/ReanimationWrapper";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <ReanimationWrapper>
        <Header />
        <Box component="section" sx={{ overflowX: "hidden" }}>
          <Hero />
        </Box>
        <Divider />
        <Box component="section" sx={{ bgcolor: "background.paper" }}>
          <Numbers />
        </Box>
        <Box component="section">
          <Categories />
        </Box>
        <Box component="section">
          <PopularCourses />
        </Box>
        <DividerSvg />
        <Box
          component="section"
          sx={{ bgcolor: "background.paper", mt: -3, pb: 20 }}
        >
          <Testimonials />
        </Box>
        <Box
          component="section"
          sx={{ bgcolor: "primary.main", maxHeight: { xs: 300, sm: 230 } }}
        >
          <Subscription />
        </Box>
        <Footer />
      </ReanimationWrapper>
    </ThemeContextProvider>
  );
}

export default App;
