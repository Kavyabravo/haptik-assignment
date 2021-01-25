import { useState } from 'react';
import UserList from './UserList'

function SearchFriend(props) {
  const [userList, setUserList] = useState([{"id":10,"name":"Druva","isFav":false},{"id":19,"name":"Chakri","isFav":false},{"id":12,"name":"Likki","isFav":false},{"id":13,"name":"Vineeth","isFav":false},{"id":1,"name":"Kavya","isFav":false},{"id":2,"name":"Pavs","isFav":false},{"id":3,"name":"Ronga","isFav":false},{"id":4,"name":"Swathi","isFav":false},{"id":5,"name":"Spandana","isFav":false},{"id":6,"name":"Krishna","isFav":false}]);
  const [newFriend, setNewFriend] = useState({})
  const [searchResult, setSearchResult] =  useState([])
  const handleSubmit = (event) =>{
    event.preventDefault();
    props.handleAddFriend(newFriend)
  }

  const addFriend = (user) =>{
    setNewFriend(user)
    setSearchResult([])
  }

  const searchData = (e) => {
    var queryData = [];
    if(e.target.value != '') {
      userList.forEach(person => {

          if(person.name.toLowerCase().indexOf(e.target.value.toLowerCase())!=-1) {
            if(queryData.length < 4) {
              queryData.push(person);
            }
          }
      });
    }
    setSearchResult(queryData)
  }
    return (
      // <div className="container">
        <div className="row search-container">
            <form onSubmit={handleSubmit} autoComplete="off">
            <input onChange={searchData} type="text" placeholder="Enter your friend's name" className="search-bar" defaultValue={newFriend?.name}/>
            {(searchResult) ? <UserList
             userList={searchResult}
             addFriend={addFriend}
              /> : null  }
              </form>
              </div>
      // </div>
    );
  }
  
  export default SearchFriend;