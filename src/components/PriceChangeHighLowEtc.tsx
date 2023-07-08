import { Stack, Typography } from "@mui/material";

function getPrice() {
  return 10
}

function getPriceInCurrency() {
  return 100
}

function get24HourChange() {
  return 10
}

function get24HourHigh() {
  return 10
}

function get24HourLow() {
  return 10
}

function get24HourVolumeATOM() {
  return 100
}

function get24HourVolumeBNB() {
  return 1000
}


export default function PriceChangeHighLowEtc () {
  return (
    <Stack direction='row'>
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