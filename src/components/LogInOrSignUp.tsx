import { Container, Stack, Typography } from "@mui/material";

export default function LogInOrSignUp () {
  return (
    <Container
    >
      <Stack
      direction='row'
      height={300}
      justifyContent='center'
      alignItems='center'>
        <Typography
        sx={{
          color: 'secondary.main'
        }}
        >
          Log In
        </Typography>
        <Typography
        sx={{
          color: 'text.primary'
        }}        
        >
          &nbsp;or&nbsp; 
        </Typography>
        <Typography
        sx={{
          color: 'secondary.main'
        }} 
        >
          Register Now
        </Typography>
        <Typography
        sx={{
          color: 'text.primary'
        }}        
        >
          &nbsp;to trade&nbsp;
        </Typography>
      </Stack>
    </Container>
  );
}