import { Stack } from "@mui/material";
import HeaderTopBodyLeftPairPrice from "./HeaderTopBodyLeftPairPrice";
import HeaderTopBodyLeftPairTitle from "./HeaderTopBodyLeftPairTitle";

export default function HeaderTopBodyLeft () {

  return (
    <Stack
      direction='row'
      justifyContent="space-between"
      sx={{
        width: 1
      }}
    >
      <HeaderTopBodyLeftPairTitle/>
      <HeaderTopBodyLeftPairPrice/>
    </Stack>
  );
}