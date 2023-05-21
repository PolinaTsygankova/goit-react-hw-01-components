import PropTypes from 'prop-types';
import { Item, Status } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <Item key={friend.name}>
          <Status status={friend.isOnline.toString()}></Status>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{friend.name}</p>
        </Item>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
