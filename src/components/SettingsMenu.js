import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { ParticleToggle } from "./ParticleToggle";
import { Settings } from "@mui/icons-material";
import { motion, Variants } from "framer-motion";


export default function SettingsMenu(props) {
  const {particles, setParticles} = props;

  return (<></>
    // <List>
    //   <ListItem disablePadding>
    //     <ListItemButton>
    //       <ListItemIcon>
    //         <Settings />
    //       </ListItemIcon>
    //     </ListItemButton>
    //   </ListItem>
    //   <ListItem disablePadding>
    //     <ListItemButton>
    //       <ListItemIcon>
    //         <ParticleToggle particles={particles} setParticles={setParticles} />
    //       </ListItemIcon>
    //     </ListItemButton>
    //   </ListItem>
    //   <ListItem disablePadding>
    //     <ListItemButton>
    //       <ListItemIcon>
    //         <ThemeToggle />
    //       </ListItemIcon>
    //     </ListItemButton>
    //   </ListItem>
    // </List>
  );
};