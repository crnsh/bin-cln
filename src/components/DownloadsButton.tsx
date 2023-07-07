import { IconButton } from "@mui/material";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export default function DownloadsButton () {
  return (
    <IconButton
      sx={{
        textTransform: 'none',
        color: 'text.primary'
        
      }}
    >
      <DownloadForOfflineIcon/>
    </IconButton>
  );
}