import { Stack } from "@mui/material";

export default function HeaderTopBodyLeftPairTitle () {

  return (
    <Stack>
      <Stack
      direction='row'
      >
        <Typography>{getFirstPair() + '/' + getSecondPair()}</Typography>
        <a href="">
          <Stack
            direction='row'
            >
            <BookIcon/>
            <Typography>
              Cosmos Price
            </Typography>
          </Stack>
        </a>
      </Stack>
      <Link>
        Layer 1 / Layer 2
      </Link>
    </Stack>
  );

}