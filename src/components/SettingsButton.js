import { Close, Menu, Settings } from "@mui/icons-material";
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { ParticleToggle } from "./ParticleToggle";
import { useState } from "react";
import SettingsMenu from "./SettingsMenu";
import { AnimatePresence, motion } from "framer-motion";

const sideVariants = {
  open: {
    opacity: 1,
    // y: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  },
  closed: {
    opacity: 0,
    // y: 20,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
};

export default function SettingsButton(props) {
  const {particles, setParticles} = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSettingsMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  }
  
  return (
    <List id="settings" className="button-bar">
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={handleSettingsMenu}
        style={{border: 0, backgroundColor: 'transparent'}}
      >
           <Menu color="primary" fontSize="large"
            sx={{
              width: '64px',
              mr: 'auto',
              justifyContent: 'center',
            }}
          />
      </motion.button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ width: 0, height: 0 }}
            animate={{
              width: 200,
              height: 200
            }}
            exit={{
              height: 0,
              width: 0,
              transition: { delay: 0.3, duration: 0.3 }
            }}
            style={{position: 'relative', left: 0, zIndex: 2}}
          >
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <SettingsMenu open={menuOpen} particles={particles} setParticles={setParticles} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </List>
  );
};