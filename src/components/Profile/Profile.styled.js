import styled from 'styled-components';

export const ProfileCard = styled.div`
  border-radius: 5px;
  margin: 0 auto;
  width: 300px;
  padding: 50px 20px;
  background-color: white;
`;

export const Photo = styled.img`
  width: 200px;
  border-radius: 50%;
`;

export const Text = styled.p`
  color: grey;
`;

export const List = styled.ul`
  margin-top: 30px;
  display: flex;
  list-style: none;
  justify-content: space-between;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Label = styled.span`
  font-weight: 700;
  color: rgb(0, 8, 66);
  margin-bottom: 10px;
`;
