import { Box, Fade, useScrollTrigger } from "@mui/material";

export default function ScrollTop(props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#top',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        // behavior: 'smooth'
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        id="back-to-top-arrow-box"
      >
        {children}
      </Box>
    </Fade>
  );
};