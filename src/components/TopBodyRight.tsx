import { Stack } from "@mui/material";
import Market from "./Market";
import MarketActivity from "./MarketActivity";
import Trades from "./Trades";

export default function TopBodyRight () {

  return (
    <Stack>
      <Market/>
      <Trades/>
      <MarketActivity/>
    </Stack>
  )

}