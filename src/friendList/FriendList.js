import SearchFriend from "./SearchFriend";
import FriendRow from "./FriendRow";
import { useState, useEffect } from 'react';
import "./FriendList.css";

function FriendList() {
  const [myFriendList, setMyFriendList] = useState([{"id":1,"name":"Kavya","isFav":false},{"id":2,"name":"Pavs","isFav":false},{"id":3,"name":"Ronga","isFav":false},{"id":4,"name":"Swathi","isFav":false},{"id":5,"name":"Spandana","isFav":false},{"id":6,"name":"Krishna","isFav":false}]);
  const handleRemoveFriend = (id) =>{
    const newFriendList = myFriendList.filter(friend =>{
      if(friend.id!==id){
        return true
      }
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
  // useEffect(
  //   console.log("Friend added"),[myFriendList]
  // )
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
        />
        {myFriendList.map(friend => (<FriendRow
        key={friend.id}
        friend = {friend}
        handleRemoveFriend = {handleRemoveFriend}
        handleAddToFav = {handleAddToFav}
        />))}

    </div>
  );
}

export default FriendList;
