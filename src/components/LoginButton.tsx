import { Button } from "@mui/material";

export default function LoginButton () {
  return (
    <Button
    variant="text"
    sx={{
      textTransform: 'none',
      color: 'text.primary'
      
    }}
    >
      Login
    </Button>
  );
}