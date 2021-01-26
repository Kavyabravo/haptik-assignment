import SearchFriendContainer from "../containers/SearchFriendContainer";
import FriendRow from "../components/FriendRow";

function FriendList(props) {
  return (
    <div className="friend-list container">
      <div className="header row">Friends List</div>
      <SearchFriendContainer
        handleAddFriend={props.handleAddFriend}
        showAddedFriends={props.showAddedFriends}
        setshowAddedFriends={props.setshowAddedFriends}
      />
      {props.showAddedFriends && props.myFriendList
        ? props.myFriendList.map((friend) => (
            <FriendRow
              key={friend.id}
              friend={friend}
              handleRemoveFriend={props.handleRemoveFriend}
              handleAddToFav={props.handleAddToFav}
            />
          ))
        : null}
      {props.showAddedFriends ? (
        <div className="pagination-btn-wrapper row">
          <span onClick={props.handlePreviousPage} className={`pagination-btn`}>
            {"<"}
          </span>
          <span onClick={props.handleNextPage} className="pagination-btn">
            {">"}
          </span>
        </div>
      ) : null}
    </div>
  );
}

export default FriendList;
