import { Container } from "@mui/material";
import TopBody from "./TopBody";
import UserTradeInfo from "./UserTradeInfo";

export default function MainBody () {
  return (
    <Container>
      <TopBody/>
      <UserTradeInfo/>
    </Container>
  );
}