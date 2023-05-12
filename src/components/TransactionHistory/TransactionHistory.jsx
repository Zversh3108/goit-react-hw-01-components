import PropTypes from 'prop-types';
import { Table, TableHeader, TableCell, TableRow } from './Transaction.Styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <TableHeader>
        <TableRow>
          <TableCell>Type</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Currency</TableCell>
        </TableRow>
      </TableHeader>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
