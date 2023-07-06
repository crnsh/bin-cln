import { Container } from "@mui/material";
import UserTradeInfo from "./UserTradeInfo";

export default function MainBody () {
  return (
    <Container>
      <TopBody/>
      <UserTradeInfo/>
    </Container>
  );
}