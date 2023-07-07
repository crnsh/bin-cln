import { Stack, Typography } from "@mui/material";
import PriceChangeHighLowEtc from "./PriceChangeHighLowEtc";

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
          <PlayIcon/>
          <Typography>Spot Tutorial</Typography>
        </a>
        <a href="">
          <CalculatorIcon/>
          <Typography>Spot Guidance</Typography>
        </a>
      </Stack>
    </Stack>
  );
}