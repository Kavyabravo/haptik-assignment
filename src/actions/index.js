import * as actionTypes from "./actionTypes";
export function fetchingData() {
  console.log(actionTypes.FETCHING_DATA);
  return {
    type: actionTypes.FETCHING_DATA,
  };
}

export function loadUserSuccess(userList) {
  return {
    type: actionTypes.LOAD_USERS_SUCCESS,
    userList: userList,
  };
}

export function loadingError(error) {
  return {
    type: actionTypes.LOADING_ERROR,
    error: error,
  };
}

export function loadFriendListSuccess(friendList) {
  return {
    type: actionTypes.LOAD_FRIEND_LIST_SUCCESS,
    friendList: friendList,
  };
}

export function updateMyFriendList(newFriendList) {
  return {
    type: actionTypes.UPDATE_MY_FRIEND_LIST,
    newFriendList: newFriendList,
  };
}

export function removeFromMyFriendList(id) {
  return {
    type: actionTypes.REMOVE_FROM_MY_FRIEND_LIST,
    id: id,
  };
}

export function addToMyFriendList(newFriend) {
  return {
    type: actionTypes.ADD_TO_MY_FRIEND_LIST,
    newFriend: newFriend,
  };
}

export function updateFavourites(id) {
  return {
    type: actionTypes.UPDATE_FAVOURITES,
    id: id,
  };
}

export function sortMyFriendList() {
  console.log("action", "sortingList");
  return {
    type: actionTypes.SORT_MY_FRIEND_LIST,
  };
}

export function loadPage(pageNo) {
  console.log("pagination", pageNo);
  return {
    type: actionTypes.LOAD_PAGE,
    pageNo: pageNo,
  };
}
