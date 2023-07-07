import { Box, Stack, Tab, Tabs } from "@mui/material";
import React from "react";
import GreenOrderbookIcon from "./GreenOrderbookIcon";
import OrderbookTableFull from "./OrderbookTableFull";
import OrderbookTableHeaderless from "./OrderbookTableHeaderless";
import OrderbookTicker from "./OrderbookTicker";
import RedOrderbookIcon from "./RedOrderbookIcon";
import SplitOrderbookIcon from "./SplitOrderbookIcon";
import TabPanel from "./TabPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SpotOrderbook () {

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack>
      <Stack
      direction='row'
      >
        <Box>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label={<SplitOrderbookIcon/>} {...a11yProps(0)} />
            <Tab label={<GreenOrderbookIcon/>} {...a11yProps(1)} />
            <Tab label={<RedOrderbookIcon/>} {...a11yProps(2)} />
          </Tabs>  
        </Box>
      </Stack>
      <TabPanel value={value} index={0}>
        <Stack>
          <OrderbookTableFull data={dataRed}/>      
          <OrderbookTicker price={price} currencyValue={currencyValue}/>
          <OrderbookTableHeaderless data={dataGreen}/>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}> 
      {/* Green one */}
        <Stack>
          <OrderbookTableFull data={dataGreen}/>      
          <OrderbookTicker price={price} currencyValue={currencyValue}/>
        </Stack>
      </TabPanel>
      {/* Red one */}
      <TabPanel value={value} index={2}>
        <Stack>
          <OrderbookTableFull data={dataRed}/>      
          <OrderbookTicker price={price} currencyValue={currencyValue}/>
        </Stack>
      </TabPanel>
    </Stack>
  );
}

function getSampleData() {

  let dataRed = 

  return {dataRed, dataGreen, currencyValue, price}
}

let {dataRed, dataGreen, currencyValue, price} = getSampleData();