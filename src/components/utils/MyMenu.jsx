import {
  Popover,
  Box,
  Grid,
  ListItemButton as MuiListItemButton,
  styled,
  alpha,
} from "@mui/material";
import { navMenus } from "../../data";

const ListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1.5, 1),
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
}));

function MyMenu({ open, anchorEl, onClose, mainMenu }) {
  const menus = navMenus[mainMenu];
  const menusLength = menus && menus.length;
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      keepMounted={false}
      sx={{
        "& .MuiPaper-root": {
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
          width: menusLength > 11 ? 380 : 320,
          px: 2,
          py: 2,
          borderTop: 3,
          borderColor: "primary.main",
          boxShadow: 6,
        },
      }}
    >
      <Grid container spacing={1}>
        {menus &&
          (menusLength > 11
            ? menus.map(({ name, link }) => (
                <Grid item key={name} xs={6}>
                  <Box>
                    <ListItemButton
                      selected={name === "E-Learning"}
                      href={link}
                    >
                      {name}
                    </ListItemButton>
                  </Box>
                </Grid>
              ))
            : menus.map(({ name, link }) => (
                <Grid item key={name} xs={12}>
                  <Box>
                    <ListItemButton
                      selected={name === "E-Learning"}
                      href={link}
                    >
                      {name}
                    </ListItemButton>
                  </Box>
                </Grid>
              )))}
      </Grid>
    </Popover>
  );
}

export default MyMenu;
