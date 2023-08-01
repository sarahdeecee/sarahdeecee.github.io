import { List } from "@mui/material";
import LinksList from "./LinksList";

function LinksBar() {

  return (
    <List id="links-bar" className="button-bar">
      <LinksList />
    </List>
  );
}

export default LinksBar;