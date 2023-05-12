import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  outline: 1px solid grey;
  margin-top: 3px;
  color: grey;
`;

export const TableHeader = styled.thead`
  background-color: #00bcd5;
  color: white;
  text-align: center;
  text-transform: uppercase;
`;

export const TableRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #d1cfcb;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
`;
