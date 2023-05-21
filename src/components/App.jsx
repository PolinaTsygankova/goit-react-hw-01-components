import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <p>Task 1:</p>
      <Profile
        username={user.dataname}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <p>Task 2:</p>
      <Statistics title="Upload stats" stats={data} />
      <FriendList />
    </>
  );
};
