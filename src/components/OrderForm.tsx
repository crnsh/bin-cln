import { Box, Tabs, Tab } from "@mui/material";
import OrderFormSpot from "./OrderFormSpot";
import TabPanel from "./TabPanel";

export default function OrderForm () {

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Spot" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OrderFormSpot/>
      </TabPanel>
    </Box>
  );

}