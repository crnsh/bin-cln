import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface OrderbookRow {
  id : number,
  color: 'red' | 'green',
  price : number,
  amount : number,
  total : number
}

export default function OrderbookTableFull ({ data } : {
  data : OrderbookRow[]
}) {

  // - Tab1 - Title : Market Trades
  //          Content - Table with columns (Price(BNB), Amount(ATOM), Total)
  //          Rows with data

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Price(BNB)</TableCell>
            <TableCell align='right'>Amount(ATOM)</TableCell>
            <TableCell align='right'>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell
                sx={{
                  color: ((row.color === 'green') ? 'success.main' : 'error.main')
                }}
              >
                {row.price}
              </TableCell>
              <TableCell align='right'>{row.amount}</TableCell>
              <TableCell align='right'>{row.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}