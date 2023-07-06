import { Box, Tabs, Tab, Container, Typography, Stack } from "@mui/material";
import React from "react";
import LogInOrSignUp from "./LogInOrSignUp";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function UserTradeInfo () {

  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // create a tab list with each entry pointing to nothing

  return (
    <Box width={1}>
      <Box>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          indicatorColor="primary"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
      <LogInOrSignUp/>
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
    </Box>
  );
}