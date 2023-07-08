import { Stack, Typography } from "@mui/material";
import PriceChangeHighLowEtc from "./PriceChangeHighLowEtc";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

export default function HeaderTopBodyLeftPairPrice () {
  return (
    <Stack
      direction='row'
    >
      <PriceChangeHighLowEtc/>
      <Stack
      direction='row'
      >
        <a href="">
          <PlayCircleIcon/>
          <Typography>Spot Tutorial</Typography>
        </a>
        <a href="">
          <OndemandVideoIcon/>
          <Typography>Spot Guidance</Typography>
        </a>
      </Stack>
    </Stack>
  );
}