import styled from 'styled-components';

export const Item = styled.li`
  font-weight: 400;
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 50%;
  background-color: ${props => (props.status === 'true' ? 'green' : 'red')};
`;
