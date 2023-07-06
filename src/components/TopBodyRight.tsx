import { Stack } from "@mui/material";
import Market from "./Market";
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