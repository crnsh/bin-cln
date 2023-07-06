import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

export default function Market () {
  
  const rows: GridRowsProp = [
    { pair: 'BNB/BTC', price: 0.0003, change: '-0.71%'},
    { pair: 'BNB/BTC', price: 0.0003, change: '-0.71%'},
    { pair: 'BNB/BTC', price: 0.0003, change: '-0.71%'},
    { pair: 'BNB/BTC', price: 0.0003, change: '-0.71%'},
    { pair: 'BNB/BTC', price: 0.0003, change: '-0.71%'},
    { pair: 'BNB/BTC', price: 0.0003, change: '-0.71%'},
  ]

  const columns: GridColDef[] = [
    {field: 'pair', headerName: 'Pair'},
    {field: 'price', headerName: 'Price'},
    {field: 'change', headerName: 'Change'},
  ]
  
  return (
    <Box>
      <DataGrid density="compact" rows={rows} columns={columns}/>
    </Box>
  )
}