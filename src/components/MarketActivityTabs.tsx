import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import MarketMoverRow from "./MarketMoverRow";
import TabPanel from "./TabPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MarketActivityTabs () {

  const [data, setData] = useState(null);

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