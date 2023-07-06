import { AppBar, Container, Stack, Toolbar } from "@mui/material";
import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";


export default function NavBar () {


  // Left Nav Bar and Right Nav Bar

  return (
    <AppBar>
      <Toolbar
      sx={{
        width: 1
      }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            width : 1
          }}
        >
          <NavBarLeft></NavBarLeft>
          <NavBarRight></NavBarRight>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}