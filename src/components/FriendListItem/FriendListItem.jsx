import PropTypes from 'prop-types';
import { Item } from './FriendListItem.Styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item isOnline={isOnline}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
