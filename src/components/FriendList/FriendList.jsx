import  PropTypes  from "prop-types";
import { FriendsList } from "./Friends.Styled";
import {FriendListItem} from "../FriendListItem/FriendListItem"
export const FriendList = ({friends} ) =>{
 
    return(
        
        <FriendsList> 
         {friends.map(({avatar, name, isOnline, id}) =>(
    <FriendListItem  avatar={avatar} name={name} isOnline = {isOnline} key = {id}/>
      ))}  
        </FriendsList>
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