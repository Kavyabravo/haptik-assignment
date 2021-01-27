import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  userList: [],
  friendList: [],
  friendListPage: [],
  pageCount: 0,
  pageNo: -1,
  perPageCount: 4,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PAGE:
      if (!state.pageCount) {
        return {
          ...state,
          friendListPage: [],
        };
      } else if (action.pageNo > 0 && action.pageNo <= state.pageCount) {
        let lowerCount = (action.pageNo - 1) * state.perPageCount;
        let upperCount = action.pageNo * state.perPageCount;
        let friendListPage = state.friendList.slice(lowerCount, upperCount);
        return {
          ...state,
          friendListPage: friendListPage,
          pageNo: action.pageNo,
        };
      } else {
        return state;
      }
    case actionTypes.FETCHING_DATA:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        userList: action.userList,
      };
    case actionTypes.LOADING_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.SORT_MY_FRIEND_LIST:
      let friendList = [];
      let unFavList = [];
      state.friendList.map((friend) => {
        if (friend.isFav) {
          friendList.push(friend);
        } else {
          unFavList.push(friend);
        }
        return friend;
      });
      friendList = friendList.concat(unFavList);
      return {
        ...state,
        loading: false,
        friendList: friendList,
      };
    case actionTypes.LOAD_FRIEND_LIST_SUCCESS:
      let count = action.friendList.length;
      let noOfPages = Math.ceil(count / state.perPageCount);
      return {
        ...state,
        loading: false,
        friendList: action.friendList,
        pageCount: noOfPages,
        pageNo: action.pageNo,
      };
    case actionTypes.UPDATE_MY_FRIEND_LIST:
      return {
        ...state,
        loading: false,
        friendList: action.newFriendList,
      };
    case actionTypes.REMOVE_FROM_MY_FRIEND_LIST:
      let newFriendList = state.friendList.filter((friend) => {
        return friend.id !== action.id ? true : false;
      });
      return {
        ...state,
        loading: false,
        friendList: newFriendList,
        pageCount: Math.ceil(newFriendList.length / state.perPageCount),
      };
    case actionTypes.ADD_TO_MY_FRIEND_LIST:
      let isFriendAdded = false;
      let newMyFriendList = state.friendList;
      newMyFriendList.map((friend) => {
        if (friend.id === action.newFriend.id) {
          isFriendAdded = true;
        }
        return friend;
      });
      if (!isFriendAdded) {
        newMyFriendList = [action.newFriend].concat(newMyFriendList);
      }

      return {
        ...state,
        loading: false,
        friendList: newMyFriendList,
        pageCount: Math.ceil(newMyFriendList.length / state.perPageCount),
      };
    case actionTypes.UPDATE_FAVOURITES:
      let favFriend;
      let myFriendList = state.friendList.filter((friend) => {
        if (friend.id === action.id) {
          friend.isFav = !friend.isFav;
          favFriend = friend;
          return false;
        }
        return true;
      });
      myFriendList = favFriend
        ? [favFriend].concat(myFriendList)
        : myFriendList;
      return {
        ...state,
        loading: false,
        friendList: myFriendList,
      };

    default:
      return state;
  }
};

export default userReducer;
