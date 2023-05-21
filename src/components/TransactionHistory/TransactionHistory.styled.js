import styled from 'styled-components';

export const Table = styled.table`
  background-color: white;
  width: 550px;
  margin: 0 auto;
`;

export const Head = styled.thead`
  background-color: rgb(88, 135, 254);
`;

export const THead = styled.th`
  font-weight: 500;
  font-size: 26px;
`;

export const Td = styled.td`
  font-weight: 400;
  font-size: 22px;
`;

export const Tr = styled.tr`
  &:nth-child(2n + 1) {
    background-color: rgb(198, 214, 255);
  }
`;
// export const  = styled.``;
// export const  = styled.``;
// export const  = styled.``;
// export const  = styled.table``;
