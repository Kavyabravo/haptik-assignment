import React, { useState,useEffect } from 'react';
import SearchFriend from '../components/SearchFriend';
import { getUsers} from '../api/apiHandler'
import { useSelector,useDispatch } from "react-redux";

function SearchFriendContainer(props) {
  const userList = useSelector(state => state.userList);
  console.log("user list",userList)
  const [searchName,setSearchName] = useState('')
  const [newFriend, setNewFriend] = useState({})
  const [searchResult, setSearchResult] =  useState([])
  const dispatch = useDispatch()
  const searchBar = React.createRef()
  useEffect(() => {
    // Load userList by calling API
    if(userList.length<1){
    dispatch(getUsers())
    }
  });
  const handleSubmit = (event) =>{
    event.preventDefault();
    props.handleAddFriend(newFriend)
    props.setshowAddedFriends(true)
    setSearchName('')
  }

  const handleSelectFriend = (user) =>{
    setNewFriend(user)
    setSearchName(user.name)
    setSearchResult([])
    searchBar.current.focus()
  }

  const handleOnChange = (e) =>{
    setSearchName(e.target.value)
    searchData(e.target.value)
  }
  const searchData = (name) => {
    var queryData = [];
    if(name !== '') {
      props.setshowAddedFriends(false)
      userList.forEach(person => {

          if(person.name.toLowerCase().indexOf(name.toLowerCase())!==-1) {
            if(queryData.length < 4) {
              queryData.push(person);
            }
          }
      });
      setNewFriend(queryData.length>0?queryData[0]:{})
      setSearchResult(queryData)
    }
    else{
      props.setshowAddedFriends(true)
    }
  }
    return (
          <SearchFriend
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          searchName={searchName}
          searchBar={searchBar}
          showAddedFriends={props.showAddedFriends}
          newFriend={newFriend}
          searchResult={searchResult}
          handleSelectFriend={handleSelectFriend}
            />
    )}
  
  export default SearchFriendContainer;