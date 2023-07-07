import { Stack } from "@mui/material";
import OrderForm from "./OrderForm";
import SpotOrderbook from "./SpotOrderbook";
import { AdvancedRealTimeChart } from "./tradingview/components";

export default function MainTopBodyLeft () {
  return (
    <Stack
    direction='row'
    >
      <SpotOrderbook/>
      <Stack>
        <AdvancedRealTimeChart/>
        <OrderForm/>
      </Stack>
    </Stack>
  );
}