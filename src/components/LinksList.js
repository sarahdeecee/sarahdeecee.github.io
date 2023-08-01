import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { linksArr } from "../data/Links";

function LinksList() {
  const linksList = linksArr.map(link => (
    <ListItem key={`listitem-${link.text}`} disablePadding sx={{ display: 'block' }}>
      <ListItemText key={`'listitemtext-${link.text}`} className="mobile">{link.text}</ListItemText>
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

  return (<>
      {linksList}
    </>
    );
}

export default LinksList;