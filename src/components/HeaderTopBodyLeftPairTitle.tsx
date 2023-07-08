import { Link, Stack, Typography } from "@mui/material";
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';

function getFirstPair() {
  // some database call or checking params
  return "BTC"
}

function getSecondPair() {
  // some database call or checking params
  return "USDT"
}

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
            <CollectionsBookmarkIcon/>
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