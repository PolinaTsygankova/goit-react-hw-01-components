import PropTypes from 'prop-types';
import {
  ProfileCard,
  Photo,
  Text,
  List,
  ListItem,
  Label,
} from './Profile.styled';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileCard>
      <div className="description">
        <Photo src={avatar} alt="User avatar" />
        <Text>{username}</Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </div>
      <List>
        <ListItem>
          <Label>Followers</Label>
          <span>{stats.followers}</span>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <span>{stats.views}</span>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <span>{stats.likes}</span>
        </ListItem>
      </List>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
