import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

import { Title } from './App.styled';

export const App = () => {
  return (
    <>
      <Title>Task 1:</Title>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Title>Task 2:</Title>
      <Statistics title="Upload stats" stats={data} />

      <Title>Task 3:</Title>
      <FriendList friends={friends} />
      {/* <FriendList
        name={friends.name}
        avatar={friends.avatar}
        isOnline={friends.isOnline}
      /> */}
    </>
  );
};
