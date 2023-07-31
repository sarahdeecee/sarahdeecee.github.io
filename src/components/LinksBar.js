import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import { linksArr } from "../data/Links";

function LinksBar() {
  const linksList = linksArr.map(link => (
    <ListItem key={`listitem-${link.text}`} disablePadding sx={{ display: 'block' }}>
      <ListItemButton key={`listbutton-${link.text}`}
        sx={{
          minHeight: 48,
          justifyContent: 'center',
          px: 2.5,
          backgroundColor: "inherit"
        }}
        href={link.link}
        target="_blank"
      >
        <ListItemIcon key={`listicon-${link.text}`}
          sx={{
            minWidth: 0,
            mr: 'auto',
            justifyContent: 'center',
          }}
        >
          {link.icon}
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  ));

  return (
    <List id="links-bar" className="button-bar">
      {linksList}
    </List>
  );
}

export default LinksBar;