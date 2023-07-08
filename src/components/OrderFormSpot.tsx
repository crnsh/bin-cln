import { Stack, Box, Typography, Button, Slider } from "@mui/material";
import LogInOrSignUp from "./LogInOrSignUp";
import CustomInputBox from "./tradingview/components/CustomInputBox";

function getPairSecond() {
  return 'BNB';
}

function getPriceSecond() {
  return 100;
}

function getPairFirst() {
  return 'USDT';
}

function getPriceFirst() {
  return 200;
}

export default function OrderFormSpot () {
  return (
    <Stack
    direction='row'
    >
      <Box>
        <Stack
        direction='row'
        >
          <Typography>Avbl</Typography>
          <Typography>{getPairSecond()}</Typography>
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
      <Box>
        <Stack
        direction='row'
        >
          <Typography>Avbl</Typography>
          <Typography>{getPairFirst()}</Typography>
        </Stack>
        <CustomInputBox
          leftTitle="Price"
          rightTitle={getPairSecond()}
          defaultValue={getPriceSecond()}
        />
        <CustomInputBox
          leftTitle="Amount"
          rightTitle={getPriceFirst()}
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
    </Stack>
  );
}