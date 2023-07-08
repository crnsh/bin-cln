import Stack from "@mui/material/Stack";
import LogInOrSignUp from "./LogInOrSignUp";
import CustomInputBox from "./tradingview/components/CustomInputBox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";

function getPairSecond() {
  return 'BNB';
}

function getPriceSecond() {
  return 100;
}
function getPriceFirst() {
  return 200;
}

function getPairFirst() {
  return 'USDT';
}


export default function OrderFormSpotColumn ({ first } : {
  first: boolean
}) {
    return (
      <Box
      m='1rem'
      >
        <Stack
        direction='row'
        >
          <Typography variant="h3" color='secondary'>Avbl-</Typography>
          <Typography variant="body1" color='text.primary'>{first ? getPairFirst() : getPairSecond()}</Typography>
        </Stack>
        <CustomInputBox
          leftTitle="Price"
          rightTitle={getPairSecond()}
          defaultValue={getPriceSecond()}
        />
        <CustomInputBox
          leftTitle="Amount"
          rightTitle={getPairFirst()}
        />
        <Slider
          aria-label="Amount"
          defaultValue={0}
          disabled
          step={5}
          marks
          min={0}
          max={100}
        />
        <Button>
          <LogInOrSignUp/>
        </Button>
      </Box>
    )
}