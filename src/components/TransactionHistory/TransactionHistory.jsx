import PropTypes from 'prop-types';
import { Table, Head, THead, Td, Tr } from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <Head>
        <tr>
          <THead>Type</THead>
          <THead>Amount</THead>
          <THead>Currency</THead>
        </tr>
      </Head>

      <tbody>
        {items.map(item => {
          const { id, type, amount, currency } = item;
          return (
            <Tr key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
