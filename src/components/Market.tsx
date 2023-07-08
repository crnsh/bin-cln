import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

export default function Market () {
  
  const rows: GridRowsProp = [
    { id : 1, pair: 'BNB/BTC', price: 0.0003, priceColor: 'green', change: '-0.71%', changeColor: 'green'},
    { id : 1, pair: 'BNB/BTC', price: 0.0003, priceColor: 'green', change: '-0.71%', changeColor: 'green'},
    { id : 1, pair: 'BNB/BTC', price: 0.0003, priceColor: 'green', change: '-0.71%', changeColor: 'green'},
    { id : 1, pair: 'BNB/BTC', price: 0.0003, priceColor: 'green', change: '-0.71%', changeColor: 'green'},
    { id : 1, pair: 'BNB/BTC', price: 0.0003, priceColor: 'green', change: '-0.71%', changeColor: 'green'},
    { id : 1, pair: 'BNB/BTC', price: 0.0003, priceColor: 'green', change: '-0.71%', changeColor: 'green'},
    { id : 1, pair: 'BNB/BTC', price: 0.0003, priceColor: 'green', change: '-0.71%', changeColor: 'green'},
    { id : 1, pair: 'BNB/BTC', price: 0.0003, priceColor: 'green', change: '-0.71%', changeColor: 'green'},
  ]

  const columns: GridColDef[] = [
    {field: 'pair', headerName: 'Pair'},
    {field: 'price', headerName: 'Price'},
    {field: 'change', headerName: 'Change'},
  ]
  
  return (
    <Box
      borderBottom={1}
      pb="1rem"
      borderColor="divider"
    >
      <DataGrid density="compact" rows={rows} columns={columns}/>
    </Box>
  )
}