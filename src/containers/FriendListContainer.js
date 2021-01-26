import { useSelector, useDispatch } from "react-redux";
import {getFriendList} from '../api/apiHandler';
import { removeFromMyFriendList, addToMyFriendList, updateFavourites, sortMyFriendList } from "../actions/index";
import { useState, useEffect } from 'react';
import FriendList from "../components/FriendList";
import "./FriendList.css";

function FriendListContainer() {
  const dispatch = useDispatch()
  const myFriendList = useSelector(state => state.friendList)
  // const [myFriendList, setMyFriendList] = useState([{"id":1,"name":"Kavya","isFav":false},{"id":2,"name":"Pavs","isFav":false},{"id":3,"name":"Ronga","isFav":false},{"id":4,"name":"Swathi","isFav":false},{"id":5,"name":"Spandana","isFav":false},{"id":6,"name":"Krishna","isFav":false}]);
  const [showAddedFriends, setshowAddedFriends] = useState(true)
  useEffect(() => {
    // Load friendList by calling API
    if(myFriendList.length<1){
    dispatch(getFriendList())
    }
  });
  const handleRemoveFriend = (id) =>{
    dispatch(removeFromMyFriendList(id))
  }
  const handleAddFriend = (newFriend) =>{
    console.log("add friend request",newFriend)
    if(newFriend.id){
      dispatch(addToMyFriendList(newFriend))
    }
  }
  const handleAddToFav = (id) =>{
    dispatch(updateFavourites(id))
    dispatch(sortMyFriendList())
  }
  return (
    <FriendList 
        handleAddFriend={handleAddFriend}
        showAddedFriends= {showAddedFriends}
        setshowAddedFriends = {setshowAddedFriends}
        myFriendList = {myFriendList}
        handleRemoveFriend = {handleRemoveFriend}
        handleAddToFav = {handleAddToFav}
    />
  );
}

export default FriendListContainer;