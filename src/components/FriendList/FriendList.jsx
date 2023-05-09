import  PropTypes  from "prop-types";

import {FriendListItem} from "../FriendListItem/FriendListItem"
export const FriendList = ({friends} ) =>{
 
    return(
        
        <ul className="friend-list"> 
         {friends.map(({avatar, name, isOnline, id}) =>(
    <FriendListItem  avatar={avatar} name={name} isOnline = {isOnline} key = {id}/>
      ))}  
        </ul>
    )
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};