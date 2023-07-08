import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

export default function Market () {
  
  const rows: GridRowsProp = [
    { id : 1, pair: 'BNB/BTC', price: 0.0003, change: '-0.71%'},
    { id : 2, pair: 'BNB/BTC', price: 0.0003, change: '-0.71%'},
    { id : 3, pair: 'BNB/BTC', price: 0.0003, change: '-0.71%'},
    { id : 4, pair: 'BNB/BTC', price: 0.0003, change: '-0.71%'},
    { id : 5, pair: 'BNB/BTC', price: 0.0003, change: '-0.71%'},
    { id : 6, pair: 'BNB/BTC', price: 0.0003, change: '-0.71%'},
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