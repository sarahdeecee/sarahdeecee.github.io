import { Typography } from "@mui/material";

function ContentFooter() {
  return (
    <footer id="content-footer" height="32">
      <Typography variant="body1" fontWeight="500" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img alt="Small Logo" src="./Pink Sakura Flowers Logo.png" width='32' />&nbsp;Designed and coded by Sarah Dela Cruz
      </Typography>
    </footer>
  );
}

export default ContentFooter;