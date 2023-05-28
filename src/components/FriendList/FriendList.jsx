import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { List } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <List>
      {friends.map(({ avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={name}
            name={name}
            avatar={avatar}
            status={isOnline}
          />
        );
      })}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
