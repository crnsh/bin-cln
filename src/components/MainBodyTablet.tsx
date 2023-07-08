import { Box, Stack, useTheme } from "@mui/material";
import HeaderTopBodyLeft from "./HeaderTopBodyLeft";
import MarketTradesTable from "./MarketTradesTable";
import OrderForm from "./OrderForm";
import SpotOrderbook from "./SpotOrderbook";
import Trades from "./Trades";
import { AdvancedRealTimeChart } from "./tradingview/components";
import UserTradeInfo from "./UserTradeInfo";

function getTheme() {
  const theme = useTheme();
   if (theme.palette.primary.main === 'rgb(250, 250, 250)') {
    return 'light';
   }
   else {
    return 'dark';
   }
}

export default function MainBodyTablet () {
  return (
    <Box
      maxWidth='xl'
      width='100%'
      height='100%'
      sx={{
        display: {
          xs: 'none',
          sm: 'block',
          md: 'none'
        }
      }}
    >
      <HeaderTopBodyLeft/>
      <Stack
      direction='row'>
        <Stack>
          <Box
            height='500px'
          >
            <AdvancedRealTimeChart
              height='500px'
              autosize
              theme={getTheme()}
            />
          </Box>
          <Stack
          direction='row'
          >
            <MarketTradesTable/>
            <SpotOrderbook/>
          </Stack>
          <UserTradeInfo/>
        </Stack>
        <OrderForm/>
      </Stack>
    </Box>
  );
}