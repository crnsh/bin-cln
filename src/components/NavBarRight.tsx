import { Stack } from "@mui/material";
import RegisterButton from "./RegisterButton";
import StyledButton from "./StyledButton";

export default function NavBarRight () {

  return (
    <Stack
    direction="row"
    justifyContent="space-between"
    >
      <Login/>
      <RegisterButton/>
      <Announcements/>
      <Downloads/>
      <LanguageCurrency/>
      <HelpMenu/>
      <Settings/>
    </Stack>
  )
}