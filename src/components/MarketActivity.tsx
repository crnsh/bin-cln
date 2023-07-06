import { Typography, Stack } from "@mui/material";
import Link from "next/link";

export default function MarketActivity () {

  return (
    <Stack
    direction='column'
    >
      <Stack
      direction='row'
      >
        <Typography>
          Top Movers&nbsp;
        </Typography>
        <Link href="">
          FAQ&gt;
        </Link>
      </Stack>
      <MarketActivityTabs/>
    </Stack>
  )
}