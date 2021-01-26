import React from 'react';
import UserList from './UserList';

function SearchFriend(props) {
    return (
      <React.Fragment>
        <div className="row search-container">
            <form onSubmit={props.handleSubmit} autoComplete="off">
            <input 
            onChange={props.handleOnChange} 
            type="text" 
            placeholder="Enter your friend's name" 
            className="search-bar" 
            ref={props.searchBar}
            value={props.searchName}/>
              </form>
              </div>
        {(props.searchResult && !props.showAddedFriends) ? 
          <UserList
            userList={props.searchResult}
            newFriend = {props.newFriend}
            handleSelectFriend={props.handleSelectFriend}
            /> 
            : null }
      </React.Fragment>
    );
  }
  
  export default SearchFriend;