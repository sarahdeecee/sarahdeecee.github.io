import { Card, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import SettingsMenu from "./SettingsMenu";
import { AnimatePresence, motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

const sideVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  },
  closed: {
    opacity: 0,
    x: 20,
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
    <Card id="settings-card" variant="outlined" sx={{border: 0}}>
      <List id="settings" className="button-bar">
        <ListItem disablePadding id="settings-listitem" sx={{width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
          <AnimatePresence>
            {menuOpen && <motion.div
              initial={{right: 0, width: 0, opacity: 0,
                transition: { delay: 0.3, duration: 0.1 }
              }}
              animate={{opacity: 1}}
              exit={{width: 0, opacity: 0,
                transition: { delay: 0.3, duration: 0.1 }
              }}
            > 
              <ListItemText primary="Settings"
                primaryTypographyProps={{
                  color: 'primary',
                  fontWeight: 'medium',
                  fontSize: '16pt'
                }}
                sx={{px: 2, width: '100%'}}
              />
            </motion.div>}
          </AnimatePresence>
          <ListItemButton onClick={handleSettingsMenu} sx={{m: 0, pt: 1, px: '19px', width: '64px', display: 'flex', justifyContent: 'flex-end'}}>
            <motion.nav
              style={{border: 0, backgroundColor: 'transparent'}}
              animate={menuOpen ? "open" : "closed"}
            >
              <MenuToggle toggle={() => setMenuOpen()} />
            </motion.nav>
          </ListItemButton>
        </ListItem>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ width: 0, height: 0 }}
              animate={{
                width: 200,
                height: 'auto'
              }}
              exit={{
                height: 0,
                width: 0,
                transition: { delay: 0.5, duration: 0.3 }
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
    </Card>
  );
};