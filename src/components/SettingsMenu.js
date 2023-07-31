import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { ParticleToggle } from "./ParticleToggle";
import { Settings } from "@mui/icons-material";
import { motion, Variants } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const style = {fontSize: '16px', fontWeight: 500};

export default function SettingsMenu(props) {
  const {particles, setParticles, open} = props;

  return (
    <List>
      <motion.div
        variants={{
          open: {
            // clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            // clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <motion.li variants={itemVariants}>
          <ThemeToggle style={style} />
        </motion.li>
        <motion.li variants={itemVariants}>
          <ParticleToggle style={style} particles={particles} setParticles={setParticles} />
        </motion.li>
      </motion.div>
    </List>
  );
};