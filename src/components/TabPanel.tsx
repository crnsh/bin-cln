import { Box, Typography } from "@mui/material";

export default function TabPanel ({ value, index, children, ...other } : {
  value : number,
  index: number,
  children? : React.ReactNode
}) {

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );

}