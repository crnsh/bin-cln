import { Stack } from "@mui/material";

export default function PriceChangeHighLowEtc () {
  return (
    <Stack>
      <Stack>
        <Typography>{getPrice()}</Typography>
        <Typography>{getPriceInCurrency()}</Typography>
      </Stack>
      <Stack>
        <Typography>24h Change</Typography>
        <Typography>{get24HourChange()}</Typography>
      </Stack>
      <Stack>
        <Typography>24h High</Typography>
        <Typography>{get24HourHigh()}</Typography>
      </Stack>
      <Stack>
        <Typography>24h Low</Typography>
        <Typography>{get24HourLow()}</Typography>
      </Stack>
      <Stack>
        <Typography>24h VolumeATOM</Typography>
        <Typography>{get24HourVolumeATOM()}</Typography>
      </Stack>
      <Stack>
        <Typography>24h VolumeBNB</Typography>
        <Typography>{get24HourVolumeBNB()}</Typography>
      </Stack>
    </Stack>
  );
}