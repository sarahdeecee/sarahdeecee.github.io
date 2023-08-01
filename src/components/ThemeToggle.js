import { Divider, ListItem, Stack, Switch, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorContext } from "../ColorContext";

function ThemeToggle(props) {
  const { style } = props;
  const theme = useTheme();
  const colorMode = useContext(ColorContext);
  return (
    <>
      <ListItem direction="column" spacing={1} alignItems="center">
        <Typography sx={style}>Dark Mode</Typography>
      </ListItem>
      <Divider />
      <ListItem>
        <Stack direction="row" sx={{alignItems: 'center', ml: 2}}>
          <Typography>Off</Typography>
          <Switch
            checked={theme.palette.type === 'light' ? false : true}
            onChange={colorMode.toggleColorMode}
            inputProps={{ 'aria-label': 'mode-switch' }}
          />
          <Typography>On</Typography>
        </Stack>
      </ListItem>
    </>
  );
};

export default ThemeToggle;