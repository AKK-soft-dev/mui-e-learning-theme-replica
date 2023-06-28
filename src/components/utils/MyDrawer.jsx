import {
  Box,
  Drawer,
  Toolbar,
  useTheme,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails,
  Typography,
  ListItemButton as MuiListItemButton,
  Button,
  styled,
  alpha,
} from "@mui/material";
import BrandDarkModeLogo from "../../assets/logo-negative.svg";
import BrandLightModeLogo from "../../assets/logo.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { navMenus } from "../../data";

const drawerWidth = 260;

const Accordion = styled(MuiAccordion)({
  backgroundColor: "transparent",
  boxShadow: "none",
  "&::before": {
    display: "none",
  },
  "&.Mui-expanded": {
    margin: 0,
  },
});

const AccordionSummary = styled(MuiAccordionSummary)({
  minHeight: 50,
  maxHeight: 50,
  "&.Mui-expanded": {
    minHeight: 50,
    maxHeight: 50,
  },
});

const StyledTypography = styled(Typography)({ fontWeight: 400 });

const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  paddingLeft: 10,
  "&:last-of-type": {
    marginBottom: 0,
  },
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
}));

function MyDrawer({ open, onClose }) {
  const theme = useTheme();
  const darkMode = theme.palette.mode === "dark";

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        "& .MuiPaper-root": {
          width: drawerWidth,
        },
      }}
      variant="temporary"
      open={open}
      onClose={onClose}
    >
      <Toolbar>
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
      </Toolbar>
      <Box>
        {Object.keys(navMenus).map((mainMenu, i) => (
          <Accordion elevation={0} key={mainMenu}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <StyledTypography
                variant="body1"
                sx={{
                  ...(i === 0 && { color: "primary.main" }),
                }}
              >
                {mainMenu}
              </StyledTypography>
            </AccordionSummary>
            <AccordionDetails sx={{ py: 0 }}>
              {navMenus[mainMenu].map(({ name, link }) => (
                <ListItemButton
                  href={link}
                  selected={name === "E-Learning"}
                  key={name}
                  sx={{ mb: 2 }}
                >
                  <Typography variant="body2">{name}</Typography>
                </ListItemButton>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box sx={{ px: 2, my: 1 }}>
        <Button href="#" variant="outlined" fullWidth sx={{ mb: 1 }}>
          Documentation
        </Button>
        <Button href="#" variant="contained" fullWidth>
          Purchase Now
        </Button>
      </Box>
    </Drawer>
  );
}

export default MyDrawer;
