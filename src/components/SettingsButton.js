import { Settings } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { ParticleToggle } from "./ParticleToggle";
import { useState } from "react";
import SettingsMenu from "./SettingsMenu";
import { motion } from "framer-motion";

export default function SettingsButton(props) {
  const {particles, setParticles} = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSettingsMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  }
  
  return (
    <List id="settings" className="button-bar" sx={{zIndex: 2}}>
      {/* <ListItem disablePadding>
        {!menuOpen && <ListItemButton onClick={handleSettingsMenu}>
          <ListItemIcon sx={{minWidth: 0, justifyContent: 'center', width: '2em'}}>
            <Settings color="primary" fontSize="large" />
          </ListItemIcon>
        </ListItemButton>}
        {menuOpen && <ListItemButton onClick={handleSettingsMenu}>
          <ListItemText>Settings</ListItemText>
        </ListItemButton>}
      </ListItem>
      <SettingsMenu /> */}
      <motion.nav
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        className="menu"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleSettingsMenu}
        >
          <Settings color="primary" fontSize="large" />
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
            transition={{ duration: 0.20 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <SettingsMenu open={menuOpen} />
      </motion.nav>
    </List>
  );
};