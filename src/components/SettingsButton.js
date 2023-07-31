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
    <List id="settings" className="button-bar" sx={{zIndex: 2, float: 'right'}}>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={handleSettingsMenu}
        // transition={{ duration: 0.50 }}
      >
        {/* {menuOpen ? <ListItem secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Close color="primary" fontSize="large" />
            </IconButton>
          }>
            <ListItemText>Settings</ListItemText>
          </ListItem> : */}
           <Menu color="primary" fontSize="large" />
        {/* } */}
        {/* <motion.div
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
        </motion.div> */}
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
              // opacity: 0
              // width: '2em',
              // height: '2em',
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
              {/* <motion.nav
                initial={false}
                animate={menuOpen ? "open" : "closed"}
                className="menu"
              > */}
                <SettingsMenu open={menuOpen} particles={particles} setParticles={setParticles} />
              {/* </motion.nav> */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </List>
  );
};