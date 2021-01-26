import React, { useState } from 'react';
import UserList from './UserList'

function SearchFriend(props) {
  const [userList] = useState([{"id":10,"name":"Druva","isFav":false},{"id":19,"name":"Chakri","isFav":false},{"id":12,"name":"Likki","isFav":false},{"id":13,"name":"Vineeth","isFav":false},{"id":1,"name":"Kavya","isFav":false},{"id":2,"name":"Pavs","isFav":false},{"id":3,"name":"Ronga","isFav":false},{"id":4,"name":"Swathi","isFav":false},{"id":5,"name":"Spandana","isFav":false},{"id":6,"name":"Krishna","isFav":false}]);
  const [searchName,setSearchName] = useState('')
  const [newFriend, setNewFriend] = useState({})
  const [searchResult, setSearchResult] =  useState([])
  const searchBar = React.createRef()
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
      // <div className="container">
      <React.Fragment>
        <div className="row search-container">
            <form onSubmit={handleSubmit} autoComplete="off">
            <input 
            onChange={handleOnChange} 
            type="text" 
            placeholder="Enter your friend's name" 
            className="search-bar" 
            ref={searchBar}
            value={searchName}/>
              </form>
              </div>
                {(searchResult && !props.showAddedFriends) ? <UserList
                  userList={searchResult}
                  newFriend = {newFriend}
                  handleSelectFriend={handleSelectFriend}
                    /> : null  }
      </React.Fragment>
      // </div>
    );
  }
  
  export default SearchFriend;