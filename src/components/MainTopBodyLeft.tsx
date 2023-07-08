import { Stack, useTheme } from "@mui/material";
import OrderForm from "./OrderForm";
import SpotOrderbook from "./SpotOrderbook";
import { AdvancedRealTimeChart } from "./tradingview/components";
import { useMode } from "@/app/theme";

function getTheme() {
  const theme = useTheme();
   if (theme.palette.primary.main === 'rgb(250, 250, 250)') {
    return 'light';
   }
   else {
    return 'dark';
   }
}

export default function MainTopBodyLeft () {

  const {theme, colorMode} = useMode();

  return (
    <Stack
    direction='row'
    >
      <SpotOrderbook/>
      <Stack
        height='100%'
      >
        <AdvancedRealTimeChart
          autosize
          theme={getTheme()}
        />
        <OrderForm/>
      </Stack>
    </Stack>
  );
}