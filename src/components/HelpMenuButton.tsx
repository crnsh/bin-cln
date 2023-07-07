import { IconButton } from "@mui/material";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

export default function HelpMenuButton () {
  return (
    <IconButton
      sx={{
        textTransform: 'none',
        color: 'text.primary'
        
      }}
    >
      <HelpCenterIcon/>
    </IconButton>
  );
}