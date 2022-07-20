import { Button, ListItemIcon, useTheme } from "@mui/material";
import { useContext } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { ColorContext } from "../ColorContext";

function SwitchModeButton(props) {
  const { openLinks } = props;
  const theme = useTheme();
  const colorMode = useContext(ColorContext);
  return (
    <ListItemIcon
      sx={{
        minWidth: 0,
        // mr: openLinks ? 3 : 'auto',
        justifyContent: 'center',
        width: "1em"
      }}
      onClick={colorMode.toggleColorMode}
    >
      {theme.palette.type === 'light' ? <DarkMode /> : <LightMode />}
    </ListItemIcon>
  );
};

export default SwitchModeButton;