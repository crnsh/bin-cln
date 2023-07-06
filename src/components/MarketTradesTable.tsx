import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function MarketTradesTable () {

  // - Tab1 - Title : Market Trades
  //          Content - Table with columns (Price(BNB), Amount(ATOM), Time)
  //          Rows with data

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Price(BNB)</TableCell>
            <TableCell align='right'>Amount(ATOM)</TableCell>
            <TableCell align='right'>Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell
                sx={{
                  color: ((row.green === true) ? 'success.main' : 'error.main')
                }}
              >
                {row.price}
              </TableCell>
              <TableCell align='right'>{row.amount}</TableCell>
              <TableCell align='right'>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}

// ===================== SAMPLE DATA ===================================

function createData(
  id: number,
  green: boolean,
  price: number,
  amount: number,
  time: string,
) {
  return { id, green, price, amount, time };
}

const sampleData = [
  createData(1, false, 0.03899, 13.26, "19:38:44"),
  createData(2, true, 0.03899, 13.26, "19:38:44"),
  createData(3, false, 0.03839, 13.26, "19:38:44"),
  createData(4, false, 0.03899, 13.21, "19:38:44"),
  createData(5, true, 0.038956, 13.25, "19:38:44"),
  createData(6, false, 0.03899, 13.27, "19:38:44"),
  createData(7, true, 0.03829, 13.24, "19:38:44"),
  createData(8, true, 0.0381299, 13.26, "19:38:44"),
  createData(9, false, 0.03899, 14.26, "19:38:44"),
  createData(10, true, 0.03349, 13.26, "19:38:44"),
  createData(11, true, 0.07899, 15.26, "19:38:44"),
  createData(12, true, 0.034599, 13.26, "19:38:44"),
  createData(13, true, 0.03899, 13.26, "19:38:44"),
  createData(14, false, 0.03899, 13.26, "19:38:44"),
  createData(15, false, 0.03899, 13.26, "19:38:44"),
]
