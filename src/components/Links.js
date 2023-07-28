import { List } from "@mui/material";

function Links(props) {
  const {themeToggle, particleToggle, linksList} = props;

  return (
    <List>
      {linksList}
      {themeToggle}
      {particleToggle}
    </List>
  );
}

export default Links;