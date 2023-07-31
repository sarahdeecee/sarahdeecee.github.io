import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Switch, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { ColorContext } from "../ColorContext";

function ThemeToggle(props) {
  const { openLinks, linkTextStyle } = props;
  const theme = useTheme();
  const colorMode = useContext(ColorContext);
  return (
    <Stack direction="column" spacing={1} alignItems="center">
    <Typography type="body1" sx={linkTextStyle}>Dark Mode</Typography>
    <Divider />
    <Stack direction="row">
      <Typography>Off</Typography>
      <Switch
        checked={theme.palette.type === 'light' ? false : true}
        onChange={colorMode.toggleColorMode}
        inputProps={{ 'aria-label': 'mode-switch' }}
      />
      <Typography>On</Typography>
    </Stack>
  </Stack>
  );
};

export default ThemeToggle;