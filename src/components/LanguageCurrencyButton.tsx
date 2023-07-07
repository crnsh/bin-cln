import { IconButton } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';

export default function LanguageCurrencyButton () {
  return (
    <IconButton
      sx={{
        textTransform: 'none',
        color: 'text.primary'
        
      }}
    >
      <LanguageIcon/>
    </IconButton>
  );
}