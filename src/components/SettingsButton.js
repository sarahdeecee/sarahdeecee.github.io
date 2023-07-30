import { Settings } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { ParticleToggle } from "./ParticleToggle";

export default function SettingsButton(props) {
  const {particles, setParticles} = props;

  return (
    <List id="settings" className="button-bar">
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon sx={{minWidth: 0, justifyContent: 'center', width: '2em'}}>
            <Settings color="primary" fontSize="large" />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </List>
  );
};