import {
  Box,
  Link,
  AppBar,
  Toolbar,
  styled,
  Button,
  useTheme,
  Typography as MuiTypography,
  alpha,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MuiExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import { ToggleTheme } from "../context/ThemeContext";
import BrandDarkModeLogo from "../assets/logo-negative.svg";
import BrandLightModeLogo from "../assets/logo.svg";
import { CustomContainer } from "./utils/CustomContainer";
import MyDrawer from "./utils/MyDrawer";
import MyMenu from "./utils/MyMenu";
import { navMenus } from "../data";

const StyledLink = styled((props) => (
  <Typography component={Link} variant="body1" underline="none" {...props} />
))``;

const Typography = styled(MuiTypography)(({ theme }) => ({
  color: alpha(
    theme.palette.text.primary,
    theme.palette.mode === "dark" ? 0.95 : 0.7
  ),
}));

const ExpandMoreIcon = styled(MuiExpandMoreIcon)(({ open, theme }) => ({
  fontSize: "1.4rem",
  marginLeft: "2px",
  color: theme.palette.text.primary,
  transition: theme.transitions.create("all"),
  ...(open && {
    transform: "rotate(180deg)",
  }),
}));

const StyledNavMenu = styled(
  forwardRef((props, ref) => {
    const { children, active, typographySx, containerSx, ...others } = props;
    return (
      <Box
        ref={ref}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          ...containerSx,
        }}
        {...others}
      >
        <Typography
          variant="body1"
          sx={{
            userSelect: "none",
            ...typographySx,
            ...(active && {
              fontWeight: 700,
            }),
          }}
        >
          {children}
        </Typography>
        <ExpandMoreIcon open={active} />
      </Box>
    );
  })
)``;

function Header() {
  const theme = useTheme();
  const [stickOnTop, setStickOnTop] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState({
    el: null,
    mainMenuName: "",
  });
  const darkMode = theme.palette.mode === "dark";
  const openMenu = Boolean(menuAnchorEl && menuAnchorEl.el);
  const headerRef = useRef(null);
  const { toggleTheme } = useContext(ToggleTheme);

  const handleMenuOpen = (event, mainMenuName) => {
    console.log("menu opened");
    setMenuAnchorEl({ el: event.currentTarget, mainMenuName });
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStickOnTop(false);
        } else {
          setStickOnTop(true);
        }
      });
    }, options);

    observer.observe(headerRef.current);

    return () => {
      observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <>
      <Box ref={headerRef} sx={{ bgcolor: "background.paper" }}>
        <CustomContainer sx={{ pt: "8px !important", pb: "0px !important" }}>
          <Box
            display="flex"
            alignItems="center"
            sx={{
              "& > *:not(:last-child)": {
                marginRight: theme.spacing(1.5),
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                ml: "auto",
              }}
            >
              <StyledLink href="#">Demos</StyledLink>
              <Box
                sx={{
                  ml: 1,
                  typography: "caption",
                  display: "inline",
                  padding: theme.spacing(0.1, 0.7),
                  bgcolor: "primary.main",
                  color: "#fff",
                  borderRadius: 1,
                }}
              >
                new
              </Box>
            </Box>
            <StyledLink href="#">Components</StyledLink>
            <StyledLink href="#">Docs</StyledLink>
            <Box>
              <Button
                size="small"
                color={darkMode ? "secondary" : "primary"}
                variant="outlined"
                sx={{
                  padding: theme.spacing(0.5),
                  minWidth: 0,
                  borderRadius: "8px",
                }}
                onClick={toggleTheme}
              >
                {darkMode ? (
                  <LightModeIcon sx={{ fontSize: "1.15rem" }} />
                ) : (
                  <DarkModeIcon sx={{ fontSize: "1.15rem" }} />
                )}
              </Button>
            </Box>
          </Box>
        </CustomContainer>
      </Box>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0,
          bgcolor: "background.paper",
          boxShadow: stickOnTop
            ? darkMode
              ? "rgba(0, 0, 0, 0.4) 0px 3px 7px 0px;"
              : "rgba(140, 152, 164, 0.25) 0px 3px 6px 0px"
            : 0,
        }}
      >
        <Toolbar
          component={CustomContainer}
          disableGutters
          sx={{ alignItems: "center", width: 1, py: "2px !important" }}
        >
          <Box
            sx={{
              width: { xs: "100px", md: "120px" },
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
              ml: "auto",
              display: { xs: "none", md: "flex" },
              "& > *:not(:first-child)": {
                ml: theme.spacing(2.7),
              },
            }}
          >
            {Object.keys(navMenus).map((mainMenu, i) => {
              return (
                <StyledNavMenu
                  key={mainMenu}
                  active={
                    menuAnchorEl && menuAnchorEl.mainMenuName === mainMenu
                  }
                  onClick={(e) => handleMenuOpen(e, mainMenu)}
                  typographySx={{
                    ...(i === 0 && {
                      color: "text.primary",
                      fontWeight: 700,
                    }),
                  }}
                >
                  {mainMenu}
                </StyledNavMenu>
              );
            })}
            <MyMenu
              open={openMenu}
              onClose={handleMenuClose}
              anchorEl={menuAnchorEl && menuAnchorEl.el}
              mainMenu={menuAnchorEl && menuAnchorEl.mainMenuName}
            />
            <Button variant="contained" size="large">
              Buy now
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              marginLeft: "auto",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                padding: theme.spacing(0.8),
                minWidth: 0,
                borderRadius: "8px",
              }}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </Button>
          </Box>
          <MyDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
