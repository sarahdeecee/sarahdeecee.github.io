import { Card, List } from "@mui/material";
import LinksList from "./LinksList";

function LinksBar() {

  return (<Card variant="outlined" sx={{border: 0}}>

    <List id="links-bar" className="button-bar">
      <LinksList />
    </List>
  </Card>
  );
}

export default LinksBar;