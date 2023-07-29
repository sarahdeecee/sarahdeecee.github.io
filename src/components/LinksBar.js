import { List } from "@mui/material";

function LinksBar(props) {
  const {themeToggle, particleToggle, linksList} = props;

  return (
    <List>
      {linksList}
      {themeToggle}
      {particleToggle}
    </List>
  );
}

export default LinksBar;