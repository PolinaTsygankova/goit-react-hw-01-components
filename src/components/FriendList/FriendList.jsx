import PropTypes from 'prop-types';
import { Item, Status, List, Photo } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <List className="friend-list">
      {friends.map(friend => (
        <Item key={friend.name}>
          <Status status={friend.isOnline.toString()}></Status>
          <Photo
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </Item>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
