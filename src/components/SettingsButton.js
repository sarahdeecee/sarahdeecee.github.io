import { Settings } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { ParticleToggle } from "./ParticleToggle";
import { useState } from "react";
import SettingsMenu from "./SettingsMenu";
import { motion } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

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
          onClick={() => setMenuOpen(!menuOpen)}
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
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          style={{ pointerEvents: menuOpen ? "auto" : "none" }}
        >
          <motion.li variants={itemVariants}>
            <ThemeToggle />
          </motion.li>
          <motion.li variants={itemVariants}>
            <ParticleToggle particles={particles} setParticles={setParticles} />
          </motion.li>
        </motion.ul>
      </motion.nav>
    </List>
  );
};