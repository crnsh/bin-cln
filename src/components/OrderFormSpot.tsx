import { Stack, Box, Typography, Button, Slider } from "@mui/material";
import LogInOrSignUp from "./LogInOrSignUp";
import CustomInputBox from "./tradingview/components/CustomInputBox";
import OrderFormSpotColumn from "./OrderformSpotColumn";

export default function OrderFormSpot () {
  return (
    <Stack
    direction='row'
    >
      <OrderFormSpotColumn first={false}/>
      <OrderFormSpotColumn first={true}/>
    </Stack>
  );
}