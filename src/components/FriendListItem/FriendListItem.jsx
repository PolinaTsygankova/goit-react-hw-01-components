import PropTypes from 'prop-types';
import { Item, Status, Photo } from './FriendListItem.styled';

export function FriendListItem({ name, avatar, status }) {
  return (
    <Item key={name}>
      <Status status={status.toString()}></Status>
      <Photo src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
