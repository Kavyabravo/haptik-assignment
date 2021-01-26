import SearchFriend from "../components/SearchFriend";
import FriendRow from "../components/FriendRow";
import { useSelector, useDispatch } from "react-redux";
import {getFriendList} from '../api/apiHandler'
import { useState } from 'react';
import "./FriendList.css";

function FriendList() {
  console.log(useSelector(state => state.friendList))
  const dispatch = useDispatch()
  const [myFriendList, setMyFriendList] = useState([{"id":1,"name":"Kavya","isFav":false},{"id":2,"name":"Pavs","isFav":false},{"id":3,"name":"Ronga","isFav":false},{"id":4,"name":"Swathi","isFav":false},{"id":5,"name":"Spandana","isFav":false},{"id":6,"name":"Krishna","isFav":false}]);
  const [showAddedFriends, setshowAddedFriends] = useState(true)
  const handleRemoveFriend = (id) =>{
    dispatch(getFriendList())
    const newFriendList = myFriendList.filter(friend =>{
        return (friend.id!==id)?true:false
    })
    setMyFriendList(newFriendList)
  }
  const handleAddFriend = (newFriend) =>{
    console.log("add friend request",newFriend)
    if(newFriend.id){
      let isFriendAdded = false
      myFriendList.map(friend =>{
        if(friend.id===newFriend.id)
        {
          isFriendAdded = true
        }
        return friend
      })
      if(!isFriendAdded)
      {
        let newFriendList = myFriendList
        newFriendList.push(newFriend)
        setMyFriendList(newFriendList)
        console.log("adding friend",newFriend)
      }
    }
  }
  const handleAddToFav = (id) =>{
    const newFriendList = myFriendList.map(friend=>{
     if(friend.id===id){
      friend.isFav = !friend.isFav
     } 
     return friend;
    })
    setMyFriendList(newFriendList)
  }
  return (
    <div className="friend-list container">
      <div className="header row">Friends List</div>
        <SearchFriend 
        handleAddFriend={handleAddFriend}
        showAddedFriends= {showAddedFriends}
        setshowAddedFriends = {setshowAddedFriends}
        />
        {showAddedFriends?myFriendList.map(friend => (<FriendRow
        key={friend.id}
        friend = {friend}
        handleRemoveFriend = {handleRemoveFriend}
        handleAddToFav = {handleAddToFav}
        />)):null}

    </div>
  );
}

export default FriendList;