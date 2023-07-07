import { Stack } from "@mui/material";
import TopBodyLeft from "./TopBodyLeft";
import TopBodyRight from "./TopBodyRight";

export default function TopBody () {

  return(
    <Stack
    direction='row'
    >
      <TopBodyLeft/>
      <TopBodyRight/>
    </Stack>
  );

}