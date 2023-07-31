import { Settings } from "@mui/icons-material";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { ParticleToggle } from "./ParticleToggle";
import { useState } from "react";
import SettingsMenu from "./SettingsMenu";
import { AnimatePresence, motion } from "framer-motion";

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

export default function SettingsButton(props) {
  const {particles, setParticles} = props;
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSettingsMenu = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  }
  
  return (
    <List id="settings" className="button-bar" sx={{zIndex: 2}}>
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
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 200
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 }
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
      <motion.nav
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        className="menu"
      >
        
        <SettingsMenu open={menuOpen} particles={particles} setParticles={setParticles} />
      </motion.nav>
      </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </List>
  );
};