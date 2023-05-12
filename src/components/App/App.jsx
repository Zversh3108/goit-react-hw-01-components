import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from '../../transactions.json';
import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stat" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
};
