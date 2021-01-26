export function fetchingData(){
    return {
        type:"FETCHING_DATA",
}
}

export function loadUserSuccess(userList){
    return {
        type:"LOAD_USERS_SUCCESS",
        userList: userList
}
}

export function loadingError(error){
    return {
        type:"LOADING_ERROR",
        error: error
}
}

export function loadFriendListSuccess(friendList){
    return {
        type:"LOAD_FRIEND_LIST_SUCCESS",
        friendList: friendList
}
}

export function updateMyFriendList(newFriendList){
    return {
        type:"UPDATE_MY_FRIEND_LIST",
        newFriendList: newFriendList
}
}

export function removeFromMyFriendList(id){
    return {
        type:"REMOVE_FROM_MY_FRIEND_LIST",
        id: id
}
}

export function addToMyFriendList(newFriend){
    return {
        type:"ADD_TO_MY_FRIEND_LIST",
        newFriend: newFriend
}
}

export function updateFavourites(id){
    return {
        type:"UPDATE_FAVOURITES",
        id: id
}
}

export function sortMyFriendList(){
    console.log("action","sortingList")
    return {
        type:"SORT_MY_FRIEND_LIST"
}
}

export function loadPage(pageNo){
    console.log("pagination", pageNo)
    return {
        type:"LOAD_PAGE",
        pageNo:pageNo
}
}