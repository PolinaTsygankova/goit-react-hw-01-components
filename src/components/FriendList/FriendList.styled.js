import styled from 'styled-components';

export const Item = styled.li`
  font-weight: 400;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 5px;
`;

export const Status = styled.span`
  margin-right: 5px;
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 50%;
  background-color: ${props => (props.status === 'true' ? 'green' : 'red')};
`;

export const List = styled.ul`
  margin: 0 auto;
  width: 200px;
`;

export const Photo = styled.img`
  margin-right: 10px;
`;
