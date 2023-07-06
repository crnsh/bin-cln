import { Stack } from "@mui/material";

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