import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { useState } from "react";
import MarketMoverRow from "./MarketMoverRow";
import TabPanel from "./TabPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function getNewData(value: number) {
  if (value === 0) {
    return ([{
      pairFirst : 'BNB', 
      pairSecond : 'USDT', 
      time : '10:12:48', 
      changeText: 'BigBuy', 
      changeColor: "green",
      changeIcon: null,
      pairLink: ""
    }, {
      pairFirst : 'BONK', 
      pairSecond : 'USDT', 
      time : '10:12:49', 
      changeText: 'BigBuy', 
      changeColor: "red",
      changeIcon: null,
      pairLink: ""      
    }])
  }
  else {
    return ([{
      pairFirst : 'WOW', 
      pairSecond : 'USDT', 
      time : '10:12:48', 
      changeText: 'Nice Try', 
      changeColor: "green",
      changeIcon: null,
      pairLink: ""
    }, {
      pairFirst : 'BONK', 
      pairSecond : 'USDT', 
      time : '10:12:49', 
      changeText: 'BigBuy', 
      changeColor: "green",
      changeIcon: null,
      pairLink: ""      
    }])
  }
}

interface MarketActivityRow {
  pairFirst : string,
  pairSecond : string,
  time : string,
  changeText: string ,
  changeColor: string,
  changeIcon: React.ReactNode,
  pairLink: string
}

export default function MarketActivityTabs () {

  const [value, setValue] = React.useState(0);
  const [data, setData] = useState<MarketActivityRow[]>([]);

  // data is a state that is supposed to changed upon the value of "value" changing

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} onChange={(value) => {
            setData(getNewData(value))
          }} 
          aria-label="basic tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Change" {...a11yProps(1)} />
          <Tab label="New High/Low" {...a11yProps(2)} />
          <Tab label="Fluctuation" {...a11yProps(2)} />
          <Tab label="Volume" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box
      sx={{
        overflow: 'auto'
      }}
      >
        {data.map((e) => (
          <MarketMoverRow 
            pairFirst={e.pairFirst}
            pairSecond={e.pairSecond}
            time={e.time}
            changeText={e.changeText}
            changeDesc={e.changeDesc}
            changeColor={e.changeColor}
            changeIcon={e.changeIcon}
            pairLink={e.link}
          />
        ))}
      </Box>
    </Box>
  );

}