import { KeyboardDoubleArrowDown } from "@mui/icons-material";
import { Box } from "@mui/system";
import { AnimatePresence, motion } from "framer-motion";

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut"
  }
}
function ScrollDownIcon() {
  return (<>
      {/* <Box sx={{position: 'absolute', bottom: 0, zIndex: 5}}> */}
      <motion.span
        initial={{opacity: 0, y: 0 }}
        // exit={{ opacity: 0 }}
        // whileHover={{ scale: 1.2 }}
        transition={{
          y: {
            duration: 1,
            repeat: Infinity,
            ease: "easeOut"
          },
          opacity: {
            duration: 1,
            repeat: 0,
            delay: 1
          }
        }}
        animate={{ opacity: 1, y: 100 }}
        // whileTap={{ scale: 0.9 }}
      >
        <KeyboardDoubleArrowDown sx={{fontSize: '10em'}} />
      </motion.span>
      {/* </Box> */}
    </>
  )
}

export default ScrollDownIcon;