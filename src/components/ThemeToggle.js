import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { ColorContext } from "../ColorContext";

function ThemeToggle(props) {
  const { openLinks, linkTextStyle } = props;
  const theme = useTheme();
  const colorMode = useContext(ColorContext);
  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
        }}
        onClick={colorMode.toggleColorMode}
      >
        <ListItemIcon
        >
          {theme.palette.type === 'light' ? <DarkMode color="primary" /> : <LightMode color="primary" />}
        </ListItemIcon>
        <ListItemText disableTypography primary={<Typography type="body1" sx={linkTextStyle}>{(theme.palette.type === 'light') ? "Dark Mode" : "Light Mode"}</Typography>} sx={{ opacity: openLinks ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

export default ThemeToggle;