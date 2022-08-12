import { Chip } from "@mui/material";

function StackChip(props) {
  const {stack} = props;

  return (
    <Chip label={stack} size="small" sx={{mr: 1, mb: 1}} />
  );
}

export default StackChip;