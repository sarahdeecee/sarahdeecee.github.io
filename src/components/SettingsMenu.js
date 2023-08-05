import { Divider, Link, List, ListItem, Typography } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { ParticleToggle } from "./ParticleToggle";
import { motion } from "framer-motion";
import { pages } from "../data/pages";

const itemVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, x: 20, transition: { duration: 0.2 } }
};

const style = {fontSize: '16px', fontWeight: 500};

export default function SettingsMenu(props) {
  const {particles, setParticles, open} = props;
  const settingsArr = [
    <ThemeToggle style={style} />,
    <ParticleToggle style={style} particles={particles} setParticles={setParticles} />
  ]

  const settingsLi = settingsArr.map((item, index) => <motion.li key={`motion-${index}`} variants={itemVariants}>{item}</motion.li>)
  
  const pagesParsed = pages.map(item => <motion.li key={`motion-${item.link}`} variants={itemVariants} className="mobile-motion">
      <ListItem>
        <Link href={`#${item.link}`} sx={{ml: 2, textDecoration: 'none'}}>{item.label}</Link>
      </ListItem>
    </motion.li>
  )

  const pagesLi = <>
    <motion.li key='menu-pages' variants={itemVariants} className="mobile-motion">
      <ListItem direction="column" spacing={1} alignItems="center">
        <Typography color="primary" sx={style}>Pages</Typography>
      </ListItem>
      <Divider />
    </motion.li>
    {pagesParsed}
  </>

  return (
    <List>
      <motion.div
        variants={{
          open: {
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
              delayChildren: 0.1,
              staggerChildren: 0.05
            }
          },
          closed: {
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        {pagesLi}
        {settingsLi}
      </motion.div>
    </List>
  );
};